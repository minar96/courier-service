@extends('layouts.main')

@section('title', 'Admin Dashboard')
@section('page_title', 'Dashboard')

@section('content')
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="p-4 bg-white shadow rounded-lg">
            <p class="text-gray-500 text-sm">Users</p>
            <h3 class="text-2xl font-bold">1,250</h3>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
            <p class="text-gray-500 text-sm">Orders</p>
            <h3 class="text-2xl font-bold">320</h3>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
            <p class="text-gray-500 text-sm">Revenue</p>
            <h3 class="text-2xl font-bold">$8,450</h3>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
            <p class="text-gray-500 text-sm">Tickets</p>
            <h3 class="text-2xl font-bold">14</h3>
        </div>
    </div>
@endsection
