<header class="bg-white shadow px-4 py-3 flex items-center justify-between">
    <button @click="sidebarOpen = !sidebarOpen" class="md:hidden text-gray-600 text-2xl">
        &#9776;
    </button>
    <h2 class="text-xl font-semibold">@yield('title', 'Dashboard')</h2>
    <div class="flex items-center space-x-3">
        <span class="text-gray-600">Admin</span>
        <button class="text-red-500">Logout</button>
    </div>
</header>
