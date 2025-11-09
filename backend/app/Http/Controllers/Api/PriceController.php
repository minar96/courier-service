<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Price;
use Illuminate\Http\Request;

class PriceController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
        $this->middleware('role:admin')->only(['store','update','destroy']);
    }
      // GET /api/prices
    public function index(Request $request)
    {
        try {
            $query = Price::query()->with(['country', 'state', 'city']);

            if ($request->has('country_id')) $query->where('country_id', $request->country_id);
            if ($request->has('state_id')) $query->where('state_id', $request->state_id);
            if ($request->has('city_id')) $query->where('city_id', $request->city_id);
            if ($request->has('weight')) $query->where('weight', $request->weight);

            $prices = $query->orderBy('price')->get();
            return response()->json($prices);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to fetch prices',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // GET /api/prices/{id}
    public function show($id)
    {
        try {
            $price = Price::with(['country', 'state', 'city'])->findOrFail($id);
            return response()->json($price);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Price not found'], 404);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to fetch price',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // POST /api/prices
    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'country_id' => 'required|exists:countries,id',
                'state_id' => 'nullable|exists:states,id',
                'city_id' => 'nullable|exists:cities,id',
                'price' => 'required|numeric|min:0',
                'weight' => 'required|numeric|min:0',
            ]);

            $price = Price::create($data);
            return response()->json($price, 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['message' => 'Validation failed', 'errors' => $e->errors()], 422);

        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['message' => 'Database error', 'error' => $e->getMessage()], 500);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to create price', 'error' => $e->getMessage()], 500);
        }
    }

    // PUT /api/prices/{id}
    public function update(Request $request, $id)
    {
        try {
            $price = Price::findOrFail($id);

            $data = $request->validate([
                'country_id' => 'sometimes|exists:countries,id',
                'state_id' => 'nullable|exists:states,id',
                'city_id' => 'nullable|exists:cities,id',
                'price' => 'sometimes|numeric|min:0',
                'weight' => 'sometimes|numeric|min:0',
            ]);

            $price->update($data);
            return response()->json($price);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['message' => 'Validation failed', 'errors' => $e->errors()], 422);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Price not found'], 404);

        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['message' => 'Database error', 'error' => $e->getMessage()], 500);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to update price', 'error' => $e->getMessage()], 500);
        }
    }

    // DELETE /api/prices/{id}
    public function destroy($id)
    {
        try {
            $price = Price::findOrFail($id);
            $price->delete();
            return response()->json(['message' => 'Price deleted successfully']);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Price not found'], 404);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete price', 'error' => $e->getMessage()], 500);
        }
    }
}
