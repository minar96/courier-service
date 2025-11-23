<aside
    id="sidebar"
    class="fixed inset-y-0 left-0 bg-gray-900 text-gray-100
           transform -translate-x-full md:translate-x-0 md:relative
           z-30 w-64 md:w-auto transition-all duration-300 ease-in-out">
    
    <div id="sidebarBackdrop" class="hidden fixed inset-0 bg-black bg-opacity-40 md:hidden z-20"></div>

    
    <div class="flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <div class="flex items-center space-x-2">
            <span class="text-2xl">⚙️</span>
            <span class="logo-text text-lg font-semibold">Admin Panel</span>
        </div>

        
        <button id="closeSidebarBtn" class="md:hidden text-xl">✕</button>
    </div>

    <nav class="px-2 py-4 space-y-1 text-sm">

        <?php if (\Illuminate\Support\Facades\Blade::check('role', 'admin')): ?>
        
        <a href="<?php echo e(route('dashboard.index')); ?>"
           class="flex items-center gap-3 px-3 py-2 rounded-lg
                 <?php echo e(request()->routeIs('dashboard.index') ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'); ?>">
            <span class="w-5 text-lg">🏠</span>
            <span class="menu-label font-medium">Dashboard</span>
        </a>

        
        <button type="button"
                class="submenu-toggle flex w-full items-center justify-between gap-3 px-3 py-2 rounded-lg
                       text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none"
                data-target="#usersSubmenu">
            <div class="flex items-center gap-3">
                <span class="w-5 text-lg">👥</span>
                <span class="menu-label font-medium">Category</span>
            </div>
            <svg class="submenu-arrow w-4 h-4 text-gray-400 transition-transform duration-200"
                 fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 5l7 7-7 7" />
            </svg>
        </button>

        
        <div id="usersSubmenu" class="submenu pl-11 mt-1 space-y-1">
            <a href="<?php echo e(route('categories.index') ?? '#'); ?>"
               class="block px-2 py-1.5 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white">
                List
            </a>
        </div>

        
        <a href="#"
           class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white">
            <span class="w-5 text-lg">📦</span>
            <span class="menu-label font-medium">Products</span>
        </a>

        
        <a href="#"
           class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white">
            <span class="w-5 text-lg">📊</span>
            <span class="menu-label font-medium">Reports</span>
        </a>

        
        <a href="#"
           class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white">
            <span class="w-5 text-lg">⚙️</span>
            <span class="menu-label font-medium">Settings</span>
        </a>
        <?php endif; ?>

    </nav>


    
    <div id="sidebarBackdrop" class="hidden fixed inset-0 bg-black bg-opacity-40 md:hidden"></div>
</aside>
<?php /**PATH H:\xampp\htdocs\courier-service\backend\resources\views/partials/sidebar.blade.php ENDPATH**/ ?>