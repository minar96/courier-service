<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Attachment;
use App\Helpers\FileHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
        $this->middleware('role:admin')->only(['store','update','destroy','restore','forceDelete']);
    }

    // ================================
    // Get all categories
    // ================================
    public function index(Request $request)
    {
        try {
            $search  = $request->get('search');
            $perPage = $request->get('per_page', 10);

            $query = Category::query();

            if ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('name_en', 'like', "%{$search}%")
                      ->orWhere('name_bn', 'like', "%{$search}%");
                });
            }

            $categories = $query->paginate($perPage);

            return response()->json([
                'status'  => true,
                'message' => 'Categories retrieved successfully',
                'data'    => $categories->getCollection()->map(fn ($cat) => $this->formatCategory($cat)),
                'meta'    => [
                    'current_page' => $categories->currentPage(),
                    'last_page'    => $categories->lastPage(),
                    'per_page'     => $categories->perPage(),
                    'total'        => $categories->total(),
                ],
                'links'   => [
                    'first' => $categories->url(1),
                    'last'  => $categories->url($categories->lastPage()),
                    'prev'  => $categories->previousPageUrl(),
                    'next'  => $categories->nextPageUrl(),
                ]
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    // ================================
    // Get single category
    // ================================
    public function show($id)
    {
        try {
            $category = Category::findOrFail($id);

            return response()->json([
                'status'  => true,
                'message' => 'Category retrieved',
                'data'    => $this->formatCategory($category),
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 404);
        }
    }

    // ================================
    // Create category
    // ================================
    public function store(Request $request)
    {
        DB::beginTransaction();

        // track new attachment to cleanup if error
        $newAttachmentId = null;

        try {
            $data = $request->validate([
                'code'      => 'required|unique:categories,code',
                'name_en'   => 'required|string|unique:categories,name_en',
                'name_bn'   => 'nullable|string|unique:categories,name_bn',
                'is_active' => 'boolean',
                'image'     => 'nullable|image|max:2048',
            ]);

            $data['is_active'] = $data['is_active'] ?? true;

            // If image uploaded, use FileHelper::uploadFile
            if ($request->hasFile('image')) {
                $newAttachmentId = FileHelper::uploadFile($request->file('image'), 'image');
                $data['file_id'] = $newAttachmentId;
            }

            $category = Category::create($data);

            DB::commit();

            return response()->json([
                'status'  => true,
                'message' => 'Category created',
                'data'    => $this->formatCategory($category),
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();

            // If attachment created but category failed, clean it up
            if ($newAttachmentId) {
                $this->cleanupAttachment($newAttachmentId);
            }

            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    // ================================
    // Update category
    // ================================
    public function update(Request $request)
    {
        DB::beginTransaction();

        $newAttachmentId = null;

        try {
            $category = Category::findOrFail($request->id);

            $data = $request->validate([
                'id'        => 'required|exists:categories,id',
                'code'      => 'sometimes|required|unique:categories,code,' . $category->id,
                'name_en'   => 'sometimes|required|string',
                'name_bn'   => 'nullable|string',
                'is_active' => 'nullable',
                'image'     => 'nullable', // can be file or null
            ]);

            // Handle is_active (string/boolean)
            if ($request->has('is_active')) {
                $data['is_active'] = filter_var($request->is_active, FILTER_VALIDATE_BOOLEAN);
            }

            // If new image uploaded: use FileHelper::updateFile
            if ($request->hasFile('image')) {
                $newAttachmentId = FileHelper::updateFile(
                    $request->file('image'),
                    $category->file_id,
                    'image'
                );

                $data['file_id'] = $newAttachmentId;
            }
            // If client explicitly sends image = null -> delete image
            elseif ($request->has('image') && $request->image === null) {
                if ($category->file_id) {
                    $this->cleanupAttachment($category->file_id);
                }
                $data['file_id'] = null;
            }

            $category->update($data);

            DB::commit();

            $category->refresh();

            return response()->json([
                'status'  => true,
                'message' => 'Category updated',
                'data'    => $this->formatCategory($category),
            ], 200);

        } catch (\Exception $e) {
            DB::rollBack();

            // If new attachment was created by updateFile but something failed after,
            // try to remove it as well
            if ($newAttachmentId) {
                $this->cleanupAttachment($newAttachmentId);
            }

            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    // ================================
    // Soft delete
    // ================================
    public function destroy($id)
    {
        DB::beginTransaction();

        try {
            $category = Category::findOrFail($id);

            // If category has file, delete attachment + file
            if ($category->file_id) {
                $this->cleanupAttachment($category->file_id);
                $category->file_id = null;
                $category->save();
            }

            $category->delete();

            DB::commit();

            return response()->json(['status' => true, 'message' => 'Category deleted'], 200);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    // ================================
    // Restore soft deleted
    // ================================
    public function restore($id)
    {
        DB::beginTransaction();

        try {
            $category = Category::withTrashed()->findOrFail($id);

            if ($category->trashed()) {
                $category->restore();
            }

            DB::commit();

            return response()->json(['status' => true, 'message' => 'Category restored'], 200);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    // ================================
    // Force delete
    // ================================
    public function forceDelete($id)
    {
        DB::beginTransaction();

        try {
            $category = Category::withTrashed()->findOrFail($id);

            if ($category->file_id) {
                $this->cleanupAttachment($category->file_id);
            }

            $category->forceDelete();

            DB::commit();

            return response()->json(['status' => true, 'message' => 'Category permanently deleted'], 200);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    // ================================
    // Helpers
    // ================================

    /**
     * Delete attachment row + physical file by id
     */
    private function cleanupAttachment(int $attachmentId): void
    {
        $attachment = Attachment::find($attachmentId);

        if (!$attachment) {
            return;
        }

        if (!empty($attachment->url) && Storage::disk('public')->exists($attachment->url)) {
            Storage::disk('public')->delete($attachment->url);
        }

        $attachment->delete();
    }

    /**
     * Format category for response
     */
    private function formatCategory($category): array
    {
        return [
            'id'        => $category->id,
            'code'      => $category->code,
            'name_en'   => $category->name_en,
            'name_bn'   => $category->name_bn,
            'slug'      => $category->slug,
            'is_active' => (bool) $category->is_active,
            'image'     => $category->file_id ? Storage::disk('public')->url($category->image->url) : null,
        ];
    }
}
