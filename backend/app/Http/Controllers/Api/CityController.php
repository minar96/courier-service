<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    // GET /api/cities
    public function index(Request $request)
    {
        $query = City::query();

        // Filters
        if ($request->has('country_id')) {
            $query->where('country_id', $request->country_id);
        }
        if ($request->has('state_id')) {
            $query->where('state_id', $request->state_id);
        }
        if ($request->has('name')) {
            $query->where('name', 'like', '%'.$request->name.'%');
        }

        $cities = $query->orderBy('name')->get();
        return response()->json($cities);
    }

    // GET /api/cities/{id}
    public function show($id)
    {
        $city = City::with(['state', 'country'])->find($id);
        if (!$city) {
            return response()->json(['message' => 'City not found'], 404);
        }
        return response()->json($city);
    }
}
