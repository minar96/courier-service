<header id="topbar"
        class="fixed top-0 left-0 right-0 h-16 bg-white shadow flex items-center justify-between
               px-4 md:px-6 z-20 transition-all duration-300 ease-in-out">

    <div class="flex items-center space-x-3">
        {{-- mobile open --}}
        <button id="openSidebarBtn" class="md:hidden p-2 border rounded-lg">
            ☰
        </button>

        {{-- desktop collapse --}}
        <button id="collapseSidebarBtn"
                class="hidden md:inline-flex p-2 border rounded-lg text-gray-600 hover:bg-gray-100"
                title="Collapse sidebar">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8"
                 viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <h1 class="text-lg font-semibold">@yield('page_title', 'Dashboard')</h1>
    </div>

    <div class="flex items-center gap-4">
        <span class="text-sm text-gray-600">{{ auth()->user()->name ?? 'Admin' }}</span>
        <button class="px-3 py-1 text-sm bg-gray-900 text-white rounded-lg">
            Logout
        </button>
    </div>
</header>
