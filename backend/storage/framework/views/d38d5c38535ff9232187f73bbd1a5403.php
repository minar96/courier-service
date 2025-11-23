<?php $__env->startSection('title', 'Categories'); ?>
<?php $__env->startSection('page_title', 'Categories'); ?>

<?php $__env->startSection('content'); ?>

    <?php
        $isEdit = isset($editItem) && $editItem;
    ?>

    <div class="grid gap-4 md:grid-cols-3 mb-6">

        
        <div class="md:col-span-1">
            <div class="bg-white rounded-lg shadow-sm p-4">

                <div class="flex items-center justify-between mb-3">
                    <h2 class="text-sm font-semibold">
                        <?php echo e($isEdit ? 'Edit Category' : 'Create Category'); ?>

                    </h2>
                    <?php if($isEdit): ?>
                        <a href="<?php echo e(route('categories.index')); ?>"
                           class="text-xs text-blue-600 hover:underline">
                            + New
                        </a>
                    <?php endif; ?>
                </div>

                <form
                    action="<?php echo e($isEdit ? route('categories.update', $editItem) : route('categories.store')); ?>"
                    method="POST"
                    enctype="multipart/form-data"
                    class="space-y-3"
                >
                    <?php echo csrf_field(); ?>
                    <?php if($isEdit): ?>
                        <?php echo method_field('PUT'); ?>
                    <?php endif; ?>

                    
                    <div>
                        <label class="block text-xs font-medium mb-1">
                            Code <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="code"
                            value="<?php echo e(old('code', $isEdit ? $editItem->code : '')); ?>"
                            class="w-full border rounded-lg px-3 py-2 text-sm <?php $__errorArgs = ['code'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> border-red-500 <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>">
                        <?php $__errorArgs = ['code'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                        <p class="text-xs text-red-600 mt-1"><?php echo e($message); ?></p>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                    </div>

                    
                    <div>
                        <label class="block text-xs font-medium mb-1">
                            Name (English) <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name_en"
                            value="<?php echo e(old('name_en', $isEdit ? $editItem->name_en : '')); ?>"
                            class="w-full border rounded-lg px-3 py-2 text-sm <?php $__errorArgs = ['name_en'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> border-red-500 <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>">
                        <?php $__errorArgs = ['name_en'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                        <p class="text-xs text-red-600 mt-1"><?php echo e($message); ?></p>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                    </div>

                    
                    <div>
                        <label class="block text-xs font-medium mb-1">
                            Name (Bangla)
                        </label>
                        <input
                            type="text"
                            name="name_bn"
                            value="<?php echo e(old('name_bn', $isEdit ? $editItem->name_bn : '')); ?>"
                            class="w-full border rounded-lg px-3 py-2 text-sm <?php $__errorArgs = ['name_bn'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> border-red-500 <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>">
                        <?php $__errorArgs = ['name_bn'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                        <p class="text-xs text-red-600 mt-1"><?php echo e($message); ?></p>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                    </div>

                    
                    <div class="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="is_active"
                            id="is_active"
                            value="1"
                            class="rounded"
                            <?php if(old('is_active', $isEdit ? $editItem->is_active : true)): echo 'checked'; endif; ?>>
                        <label for="is_active" class="text-xs">Active</label>
                    </div>

                    
                    <?php if($isEdit): ?>
                        <div>
                            <label class="block text-xs font-medium mb-1">Current Image</label>
                            <?php if($editItem->image_url ?? false): ?>
                                <img src="<?php echo e($editItem->image_url); ?>"
                                     alt="Category image"
                                     class="w-16 h-16 object-cover rounded mb-2">
                                <div class="flex items-center gap-2 mb-2">
                                    <input type="checkbox"
                                           name="remove_image"
                                           id="remove_image"
                                           value="1"
                                           class="rounded">
                                    <label for="remove_image" class="text-xs text-gray-600">
                                        Remove current image
                                    </label>
                                </div>
                            <?php else: ?>
                                <p class="text-xs text-gray-500">No image</p>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>

                    
                    <div>
                        <label class="block text-xs font-medium mb-1">
                            <?php echo e($isEdit ? 'Upload New Image' : 'Image'); ?>

                        </label>

                        <div
                            class="js-image-picker border border-dashed rounded-lg px-3 py-3 text-xs flex items-center gap-3 cursor-pointer hover:bg-gray-50"
                        >
                            <div class="w-10 h-10 rounded bg-gray-100 flex items-center justify-center overflow-hidden">
                                <img id="image_preview"
                                     src="<?php echo e($isEdit && ($editItem->image_url ?? false) ? $editItem->image_url : ''); ?>"
                                     alt=""
                                     class="max-w-full max-h-full <?php echo e($isEdit && ($editItem->image_url ?? false) ? '' : 'hidden'); ?>">
                                <span id="image_placeholder"
                                      class="<?php echo e($isEdit && ($editItem->image_url ?? false) ? 'hidden' : ''); ?>">🖼️</span>
                            </div>
                            <div>
                                <p class="font-medium">
                                    Click to select image
                                </p>
                                <p id="image_filename" class="text-gray-500">
                                    <?php echo e($isEdit && ($editItem->image_url ?? false) ? 'Current image selected' : 'PNG, JPG up to 2MB'); ?>

                                </p>
                            </div>
                        </div>

                        <input
                            type="file"
                            id="image_input"
                            name="image"
                            accept="image/*"
                            class="hidden <?php $__errorArgs = ['image'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> border-red-500 <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>">

                        <?php $__errorArgs = ['image'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                        <p class="text-xs text-red-600 mt-1"><?php echo e($message); ?></p>
                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                    </div>

                    
                    <div class="pt-2 flex justify-end gap-2">
                        <?php if($isEdit): ?>
                            <a href="<?php echo e(route('categories.index')); ?>"
                               class="px-3 py-2 text-xs border rounded-lg">
                                Cancel
                            </a>
                            <button
                                type="submit"
                                class="px-4 py-2 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                Update
                            </button>
                        <?php else: ?>
                            <button
                                type="submit"
                                class="px-4 py-2 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                Save
                            </button>
                        <?php endif; ?>
                    </div>
                </form>
            </div>
        </div>

        
        <div class="md:col-span-2">

            
            <form method="GET" class="flex flex-wrap gap-2 mb-3 items-center">
                <input
                    type="text"
                    name="search"
                    value="<?php echo e(request('search')); ?>"
                    placeholder="Search by code or name..."
                    class="border rounded-lg px-3 py-2 text-sm w-full sm:w-72">
                <button
                    type="submit"
                    class="px-3 py-2 text-sm rounded-lg bg-gray-900 text-white">
                    Search
                </button>
            </form>

            
            <div class="bg-white rounded-lg shadow-sm overflow-x-auto">
                <table class="min-w-full text-sm">
                    <thead class="bg-gray-50 text-gray-600">
                        <tr>
                            <th class="px-3 py-2 text-left">ID</th>
                            <th class="px-3 py-2 text-left">Code</th>
                            <th class="px-3 py-2 text-left">Name (EN)</th>
                            <th class="px-3 py-2 text-left">Name (BN)</th>
                            <th class="px-3 py-2 text-left">Status</th>
                            <th class="px-3 py-2 text-left">Image</th>
                            <th class="px-3 py-2 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y">
                        <?php $__empty_1 = true; $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                            <tr>
                                <td class="px-3 py-2"><?php echo e($category->id); ?></td>
                                <td class="px-3 py-2 font-mono text-xs"><?php echo e($category->code); ?></td>
                                <td class="px-3 py-2"><?php echo e($category->name_en); ?></td>
                                <td class="px-3 py-2"><?php echo e($category->name_bn); ?></td>
                                <td class="px-3 py-2">
                                    <?php if($category->is_active): ?>
                                        <span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">Active</span>
                                    <?php else: ?>
                                        <span class="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">Inactive</span>
                                    <?php endif; ?>
                                </td>
                                <td class="px-3 py-2">
                                    <?php if($category->image_url ?? false): ?>
                                        <img src="<?php echo e($category->image_url); ?>"
                                             alt="Image"
                                             class="w-10 h-10 object-cover rounded">
                                    <?php else: ?>
                                        <span class="text-xs text-gray-400">No image</span>
                                    <?php endif; ?>
                                </td>
                                <td class="px-3 py-2 text-right space-x-1">
                                    
                                    <a href="<?php echo e(route('categories.index', ['edit' => $category->id, 'search' => request('search')])); ?>"
                                       class="inline-flex items-center px-2 py-1 text-xs border rounded-lg hover:bg-gray-50">
                                        Edit
                                    </a>

                                    
                                    <form action="<?php echo e(route('categories.destroy', $category)); ?>"
                                          method="POST"
                                          class="inline-block js-delete-form">
                                        <?php echo csrf_field(); ?>
                                        <?php echo method_field('DELETE'); ?>
                                        <button type="submit"
                                                class="inline-flex items-center px-2 py-1 text-xs border border-red-500 text-red-600 rounded-lg hover:bg-red-50">
                                            Delete
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <tr>
                                <td colspan="7" class="px-3 py-4 text-center text-sm text-gray-500">
                                    No categories found.
                                </td>
                            </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>

            
            <div class="mt-4">
                <?php echo e($categories->withQueryString()->links()); ?>

            </div>
        </div>
    </div>

    
    <script>
        $(document).ready(function () {

            // Click the upload box -> trigger file input
            $('.js-image-picker').on('click', function (e) {
                e.preventDefault();
                $('#image_input').trigger('click');
            });

            // When a file is chosen, show preview + filename
            $('#image_input').on('change', function (e) {
                const file = this.files[0];
                if (!file) return;

                const reader = new FileReader();

                reader.onload = function (evt) {
                    $('#image_preview')
                        .attr('src', evt.target.result)
                        .removeClass('hidden');

                    $('#image_placeholder').addClass('hidden');
                };

                reader.readAsDataURL(file);

                $('#image_filename').text(file.name);
            });

            // SweetAlert delete confirmation
            $('.js-delete-form').on('submit', function (e) {
                e.preventDefault();
                const form = this;

                Swal.fire({
                    title: 'Are you sure?',
                    text: 'This will delete the category.',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#dc2626',
                    cancelButtonColor: '#6b7280',
                    confirmButtonText: 'Yes, delete it',
                }).then((result) => {
                    if (result.isConfirmed) {
                        form.submit();
                    }
                });
            });
        });
    </script>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH H:\xampp\htdocs\courier-service\backend\resources\views/categories/index.blade.php ENDPATH**/ ?>