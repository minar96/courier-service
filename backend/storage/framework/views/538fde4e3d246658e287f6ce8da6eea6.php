<?php $__env->startSection('title', 'Admin Dashboard'); ?>
<?php $__env->startSection('page_title', 'Dashboard'); ?>

<?php $__env->startSection('content'); ?>
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH H:\xampp\htdocs\courier-service\backend\resources\views/dashboard/index.blade.php ENDPATH**/ ?>