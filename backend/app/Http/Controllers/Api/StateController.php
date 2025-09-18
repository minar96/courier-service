<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
     // GET /api/states
    public function index(Request $request)
    {
        $query = State::query();

        // Filters
        if ($request->has('country_id')) {
            $query->where('country_id', $request->country_id);
        }
        if ($request->has('name')) {
            $query->where('name', 'like', '%'.$request->name.'%');
        }
        if ($request->has('iso2')) {
            $query->where('iso2', $request->iso2);
        }

        $states = $query->orderBy('name')->get();
        return response()->json($states);
    }

    // GET /api/states/{id}
    public function show($id)
    {
        $state = State::with('cities')->find($id);
        if (!$state) {
            return response()->json(['message' => 'State not found'], 404);
        }
        return response()->json($state);
    }
}
