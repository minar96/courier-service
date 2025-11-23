<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Attachment;
use App\Helpers\FileHelper;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
public function __construct()
    {
        $this->middleware(['auth', 'verified', 'role:admin']);
    }

    /**
     * One page: list + create + edit
     */
    public function index(Request $request)
    {
        $search    = $request->get('search');
        $perPage   = $request->get('per_page', 10);
        $editId    = $request->get('edit'); // ?edit=ID
        $editItem  = null;

        $query = Category::query();

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name_en', 'like', "%{$search}%")
                    ->orWhere('name_bn', 'like', "%{$search}%")
                    ->orWhere('code', 'like', "%{$search}%");
            });
        }

        $categories = $query->orderBy('id', 'desc')->paginate($perPage);

        if ($editId) {
            $editItem = Category::find($editId);
        }

        return view('categories.index', [
            'categories' => $categories,
            'search'     => $search,
            'editItem'   => $editItem,
        ]);
    }

    /**
     * Store new category (form on same page)
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $data = $request->validate([
                'code'      => 'required|unique:categories,code',
                'name_en'   => 'required|string|unique:categories,name_en',
                'name_bn'   => 'nullable|string|unique:categories,name_bn',
                'is_active' => 'nullable|boolean',
                'image'     => 'nullable|image|max:2048',
            ]);

            $data['is_active'] = $data['is_active'] ?? true;

            if ($request->hasFile('image')) {
                $data['file_id'] = FileHelper::uploadFile($request->file('image'), 'category');
            }

            Category::create($data);

            DB::commit();

            return redirect()
                ->route('categories.index')
                ->with('success', 'Category created successfully.');
        } catch (\Exception $e) {
            DB::rollBack();

            return back()
                ->withInput()
                ->with('error', 'Failed to create category: ' . $e->getMessage());
        }
    }

    public function update(Request $request, Category $category)
    {
        DB::beginTransaction();

        try {
            $data = $request->validate([
                'code'      => 'required|unique:categories,code,' . $category->id,
                'name_en'   => 'required|string|unique:categories,name_en,' . $category->id,
                'name_bn'   => 'nullable|string|unique:categories,name_bn,' . $category->id,
                'is_active' => 'nullable',
                'image'     => 'nullable', // can be file or nothing
            ]);

            $data['is_active'] = $request->has('is_active')
                ? (bool)$request->is_active
                : $category->is_active;

            // New image uploaded
            if ($request->hasFile('image')) {
                $data['file_id'] = FileHelper::updateFile(
                    $request->file('image'),
                    $category->file_id,
                    'category'
                );
            }
            // Remove existing image
            elseif ($request->has('remove_image')) {
                if ($category->file_id) {
                    // delete old attachment + file
                    \App\Models\Attachment::find($category->file_id)?->delete();
                }
                $data['file_id'] = null;
            }

            $category->update($data);

            DB::commit();

            return redirect()
                ->route('categories.index')
                ->with('success', 'Category updated successfully.');
        } catch (\Exception $e) {
            DB::rollBack();

            return back()
                ->withInput()
                ->with('error', 'Failed to update category: ' . $e->getMessage());
        }
    }

    /**
     * Delete category (soft delete)
     */
    public function destroy(Category $category)
    {
        DB::beginTransaction();

        try {
            if ($category->file_id) {
                $this->cleanupAttachment($category->file_id);
                $category->file_id = null;
                $category->save();
            }

            $category->delete();

            DB::commit();

            return redirect()
                ->route('categories.index')
                ->with('success', 'Category deleted successfully.');

        } catch (\Exception $e) {
            DB::rollBack();

            return redirect()
                ->back()
                ->with('error', 'Failed to delete category: ' . $e->getMessage());
        }
    }

    // ===== Helpers =====
    private function cleanupAttachment(int $attachmentId): void
    {
        $attachment = Attachment::find($attachmentId);

        if (!$attachment) return;

        if (!empty($attachment->url) && Storage::disk('public')->exists($attachment->url)) {
            Storage::disk('public')->delete($attachment->url);
        }

        $attachment->delete();
    }
}
