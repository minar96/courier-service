<aside x-data="{ sidebarOpen: true }"
       class="bg-gray-800 text-white h-screen flex flex-col transition-all duration-300">

    <!-- Logo -->
    <div class="flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <h1 :class="sidebarOpen ? 'opacity-100 duration-300' : 'opacity-0 w-0 overflow-hidden'" class="text-lg font-bold">My Admin</h1>
        <button @click="sidebarOpen = !sidebarOpen" class="text-white focus:outline-none">
            <i :class="sidebarOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
    </div>

    <!-- Menu -->
    <nav class="flex-1 mt-4 overflow-y-auto">

        <!-- Dashboard -->
        <a href="{{ route('dashboard') }}"
           class="flex items-center px-4 py-2 hover:bg-gray-700 transition-colors duration-200
                  {{ request()->routeIs('dashboard') ? 'bg-gray-700' : '' }}">
            <i class="fas fa-home w-5 text-center"></i>
            <span x-show="sidebarOpen" class="ml-3 transition-all duration-300">Dashboard</span>
        </a>

        <!-- Users -->
        <a href="{{ route('users.index') }}"
           class="flex items-center px-4 py-2 hover:bg-gray-700 transition-colors duration-200
                  {{ request()->routeIs('users.*') ? 'bg-gray-700' : '' }}">
            <i class="fas fa-users w-5 text-center"></i>
            <span x-show="sidebarOpen" class="ml-3 transition-all duration-300">Users</span>
        </a>

        <!-- Settings Dropdown -->
        <div x-data="{ open: {{ request()->routeIs('settings.*') ? 'true' : 'false' }} }">
            <button @click="open = !open"
                    class="w-full flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none transition-colors duration-200
                           {{ request()->routeIs('settings.*') ? 'bg-gray-700' : '' }}">
                <i class="fas fa-cog w-5 text-center"></i>
                <span x-show="sidebarOpen" class="ml-3 flex-1 text-left transition-all duration-300">Settings</span>
                <i x-show="sidebarOpen" class="fas" :class="open ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </button>

            <!-- Submenu -->
            <div x-show="open && sidebarOpen" x-transition:enter="transition ease-out duration-200"
                 x-transition:enter-start="opacity-0 transform -translate-y-2"
                 x-transition:enter-end="opacity-100 transform translate-y-0"
                 x-transition:leave="transition ease-in duration-150"
                 x-transition:leave-start="opacity-100 transform translate-y-0"
                 x-transition:leave-end="opacity-0 transform -translate-y-2"
                 class="ml-10 space-y-1 overflow-hidden">
                <a href="{{ route('settings.general') }}"
                   class="block px-2 py-1 text-sm hover:bg-gray-700 rounded
                          {{ request()->routeIs('settings.general') ? 'bg-gray-700 font-semibold' : '' }}">
                    General
                </a>
                <a href="{{ route('settings.security') }}"
                   class="block px-2 py-1 text-sm hover:bg-gray-700 rounded
                          {{ request()->routeIs('settings.security') ? 'bg-gray-700 font-semibold' : '' }}">
                    Security
                </a>
            </div>
        </div>

        {{-- <!-- Reports Dropdown -->
        <div x-data="{ open: {{ request()->routeIs('reports.*') ? 'true' : 'false' }} }">
            <button @click="open = !open"
                    class="w-full flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none transition-colors duration-200
                           {{ request()->routeIs('reports.*') ? 'bg-gray-700' : '' }}">
                <i class="fas fa-chart-bar w-5 text-center"></i>
                <span x-show="sidebarOpen" class="ml-3 flex-1 text-left transition-all duration-300">Reports</span>
                <i x-show="sidebarOpen" class="fas" :class="open ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </button>

            <div x-show="open && sidebarOpen" x-transition:enter="transition ease-out duration-200"
                 x-transition:enter-start="opacity-0 transform -translate-y-2"
                 x-transition:enter-end="opacity-100 transform translate-y-0"
                 x-transition:leave="transition ease-in duration-150"
                 x-transition:leave-start="opacity-100 transform translate-y-0"
                 x-transition:leave-end="opacity-0 transform -translate-y-2"
                 class="ml-10 space-y-1 overflow-hidden">
                <a href="{{ route('reports.sales') }}"
                   class="block px-2 py-1 text-sm hover:bg-gray-700 rounded
                          {{ request()->routeIs('reports.sales') ? 'bg-gray-700 font-semibold' : '' }}">
                    Sales
                </a>
                <a href="{{ route('reports.users') }}"
                   class="block px-2 py-1 text-sm hover:bg-gray-700 rounded
                          {{ request()->routeIs('reports.users') ? 'bg-gray-700 font-semibold' : '' }}">
                    Users
                </a>
                <a href="{{ route('reports.system') }}"
                   class="block px-2 py-1 text-sm hover:bg-gray-700 rounded
                          {{ request()->routeIs('reports.system') ? 'bg-gray-700 font-semibold' : '' }}">
                    System
                </a>
            </div>
        </div> --}}

    </nav>

</aside>
