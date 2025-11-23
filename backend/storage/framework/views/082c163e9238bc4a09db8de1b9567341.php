<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $__env->yieldContent('title', 'Admin Dashboard'); ?></title>

    
    <script src="https://cdn.tailwindcss.com"></script>

    
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/style.css')); ?>">
<body class="bg-gray-100" id="body">

<div class="flex">

    
    <?php echo $__env->make('partials.sidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <div class="flex-1 min-h-screen">

        
        <?php echo $__env->make('partials.topbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        
        <main
            id="mainContent"
            class="pt-20 px-4 pb-6 transition-all duration-300 ease-in-out"
        >
            <?php echo $__env->yieldContent('content'); ?>
        </main>

    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


<script src="<?php echo e(asset('assets/js/main.js')); ?>"></script>
<script>
          // Flash alerts
        <?php if(session('success')): ?>
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: <?php echo json_encode(session('success'), 15, 512) ?>,
            timer: 2000,
            showConfirmButton: false,
        });
        <?php endif; ?>

        <?php if(session('error')): ?>
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: <?php echo json_encode(session('error'), 15, 512) ?>,
        });
        <?php endif; ?>

</script>
</body>
</html>
<?php /**PATH H:\xampp\htdocs\courier-service\backend\resources\views/layouts/main.blade.php ENDPATH**/ ?>