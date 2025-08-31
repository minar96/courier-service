<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
        $this->middleware('role:admin')->only(['store','update','destroy','restore','forceDelete']);
    }

    // Get all categories (with pagination & search)
    public function index(Request $request)
    {
        try {
            $search = $request->get('search');
            $perPage = $request->get('per_page', 10);

            $query = Category::whereNull('parent_id');

            if ($search) {
                $query->where(function($q) use ($search){
                    $q->where('name_en', 'like', "%{$search}%")
                    ->orWhere('name_bn', 'like', "%{$search}%");
                });
            }

            $categories = $query->paginate($perPage);

            return response()->json([
                'status' => true,
                'message' => 'Categories retrieved successfully',
                'data' => $categories->getCollection()->map(fn($cat) => $this->formatCategory($cat)),
                'meta' => [
                    'current_page' => $categories->currentPage(),
                    'last_page' => $categories->lastPage(),
                    'per_page' => $categories->perPage(),
                    'total' => $categories->total(),
                ],
                'links' => [
                    'first' => $categories->url(1),
                    'last' => $categories->url($categories->lastPage()),
                    'prev' => $categories->previousPageUrl(),
                    'next' => $categories->nextPageUrl(),
                ]
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['status'=>false,'message'=>$e->getMessage()],500);
        }
    }

    // Get single category
    public function show($id)
    {
        try {
            $category = Category::findOrFail($id);

            if(!$category) {
                return response()->json(['status'=>false,'message'=>'Category not found'],404);
            }

            return response()->json([
                'status'=>true,
                'message'=>'Category retrieved',
                'data'=>$this->formatCategory($category)
            ],200);
        } catch (\Exception $e) {
            return response()->json(['status'=>false,'message'=>$e->getMessage()],404);
        }
    }

    // Create category
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $data = $request->validate([
                'code' => 'required|unique:categories,code',
                'parent_id' => 'nullable|exists:categories,id',
                'name_en' => 'required|string',
                'name_bn' => 'nullable|string',
                'description_en' => 'nullable|string',
                'description_bn' => 'nullable|string',
                'is_active' => 'boolean',
            ]);

            $data['is_active'] = $data['is_active'] ?? true;

            $category = Category::create($data);

            DB::commit();
            return response()->json(['status'=>true,'message'=>'Category created','data'=>$this->formatCategory($category)],201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status'=>false,'message'=>$e->getMessage()],500);
        }
    }

    // Update category
    public function update(Request $request,$id)
    {
        DB::beginTransaction();
        try {
            $category = Category::findOrFail($id);

            $data = $request->validate([
                'code' => 'sometimes|required|unique:categories,code,'.$id,
                'parent_id' => 'nullable|exists:categories,id',
                'name_en' => 'sometimes|required|string',
                'name_bn' => 'nullable|string',
                'description_en' => 'nullable|string',
                'description_bn' => 'nullable|string',
                'is_active' => 'boolean',
            ]);

            $data['is_active'] = $data['is_active'] ?? $category->is_active;

            $category->update($data);

            DB::commit();
            return response()->json(['status'=>true,'message'=>'Category updated','data'=>$this->formatCategory($category)],200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status'=>false,'message'=>$e->getMessage()],500);
        }
    }

    // Soft delete category
    public function destroy($id)
    {
        DB::beginTransaction();
        try {
            $category = Category::findOrFail($id);
            $category->delete();
            DB::commit();
            return response()->json(['status'=>true,'message'=>'Category soft deleted'],200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status'=>false,'message'=>$e->getMessage()],500);
        }
    }

    // Restore soft deleted category
    public function restore($id)
    {
        DB::beginTransaction();
        try {
            $category = Category::withTrashed()->findOrFail($id);
            if($category->trashed()) $category->restore();
            DB::commit();
            return response()->json(['status'=>true,'message'=>'Category restored'],200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status'=>false,'message'=>$e->getMessage()],500);
        }
    }

    // Force delete category
    public function forceDelete($id)
    {
        DB::beginTransaction();
        try {
            $category = Category::withTrashed()->findOrFail($id);
            $category->forceDelete();
            DB::commit();
            return response()->json(['status'=>true,'message'=>'Category permanently deleted'],200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status'=>false,'message'=>$e->getMessage()],500);
        }
    }

    // Helper function: format category
    private function formatCategory($category)
    {
        return [
            'id'=>$category->id,
            'code'=>$category->code,
            'parent_id'=>$category->parent_id,
            'name_en'=>$category->name_en,
            'name_bn'=>$category->name_bn,
            'slug'=>$category->slug,
            'description_en'=>$category->description_en,
            'description_bn'=>$category->description_bn,
            'is_active'=>$category->is_active == 1 ? true : false,
            'children'=>$category->children->map(fn($c) => $this->formatCategory($c)),
        ];
    }
}
