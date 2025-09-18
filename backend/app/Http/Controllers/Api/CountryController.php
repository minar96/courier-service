<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
     public function index(Request $request)
    {
        $query = Country::query();

        // Filters
        if ($request->has('name')) {
            $query->where('name', 'like', '%'.$request->name.'%');
        }
        if ($request->has('iso2')) {
            $query->where('iso2', $request->iso2);
        }
        if ($request->has('iso3')) {
            $query->where('iso3', $request->iso3);
        }
        if ($request->has('currency')) {
            $query->where('currency', $request->currency);
        }

        $countries = $query->orderBy('name')->get();
        return response()->json($countries);
    }

    // GET /api/countries/{id}
    public function show($id)
    {
        $country = Country::with('states.cities')->find($id);
        if (!$country) {
            return response()->json(['message' => 'Country not found'], 404);
        }
        return response()->json($country);
    }
}
