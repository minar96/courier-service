@extends('layouts.main')

@section('title', 'Categories')
@section('page_title', 'Categories')

@section('content')

    @php
        $isEdit = isset($editItem) && $editItem;
    @endphp

    <div class="grid gap-4 md:grid-cols-3 mb-6">

        {{-- Left: Create / Edit form --}}
        <div class="md:col-span-1">
            <div class="bg-white rounded-lg shadow-sm p-4">

                <div class="flex items-center justify-between mb-3">
                    <h2 class="text-sm font-semibold">
                        {{ $isEdit ? 'Edit Category' : 'Create Category' }}
                    </h2>
                    @if($isEdit)
                        <a href="{{ route('categories.index') }}"
                           class="text-xs text-blue-600 hover:underline">
                            + New
                        </a>
                    @endif
                </div>

                <form
                    action="{{ $isEdit ? route('categories.update', $editItem) : route('categories.store') }}"
                    method="POST"
                    enctype="multipart/form-data"
                    class="space-y-3"
                >
                    @csrf
                    @if($isEdit)
                        @method('PUT')
                    @endif

                    {{-- Code --}}
                    <div>
                        <label class="block text-xs font-medium mb-1">
                            Code <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="code"
                            value="{{ old('code', $isEdit ? $editItem->code : '') }}"
                            class="w-full border rounded-lg px-3 py-2 text-sm @error('code') border-red-500 @enderror">
                        @error('code')
                        <p class="text-xs text-red-600 mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    {{-- Name EN --}}
                    <div>
                        <label class="block text-xs font-medium mb-1">
                            Name (English) <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name_en"
                            value="{{ old('name_en', $isEdit ? $editItem->name_en : '') }}"
                            class="w-full border rounded-lg px-3 py-2 text-sm @error('name_en') border-red-500 @enderror">
                        @error('name_en')
                        <p class="text-xs text-red-600 mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    {{-- Name BN --}}
                    <div>
                        <label class="block text-xs font-medium mb-1">
                            Name (Bangla)
                        </label>
                        <input
                            type="text"
                            name="name_bn"
                            value="{{ old('name_bn', $isEdit ? $editItem->name_bn : '') }}"
                            class="w-full border rounded-lg px-3 py-2 text-sm @error('name_bn') border-red-500 @enderror">
                        @error('name_bn')
                        <p class="text-xs text-red-600 mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    {{-- Active --}}
                    <div class="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="is_active"
                            id="is_active"
                            value="1"
                            class="rounded"
                            @checked(old('is_active', $isEdit ? $editItem->is_active : true))>
                        <label for="is_active" class="text-xs">Active</label>
                    </div>

                    {{-- Current image (edit mode) --}}
                    @if($isEdit)
                        <div>
                            <label class="block text-xs font-medium mb-1">Current Image</label>
                            @if($editItem->image_url ?? false)
                                <img src="{{ $editItem->image_url }}"
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
                            @else
                                <p class="text-xs text-gray-500">No image</p>
                            @endif
                        </div>
                    @endif

                    {{-- Custom upload + preview --}}
                    <div>
                        <label class="block text-xs font-medium mb-1">
                            {{ $isEdit ? 'Upload New Image' : 'Image' }}
                        </label>

                        <div
                            class="js-image-picker border border-dashed rounded-lg px-3 py-3 text-xs flex items-center gap-3 cursor-pointer hover:bg-gray-50"
                        >
                            <div class="w-10 h-10 rounded bg-gray-100 flex items-center justify-center overflow-hidden">
                                <img id="image_preview"
                                     src="{{ $isEdit && ($editItem->image_url ?? false) ? $editItem->image_url : '' }}"
                                     alt=""
                                     class="max-w-full max-h-full {{ $isEdit && ($editItem->image_url ?? false) ? '' : 'hidden' }}">
                                <span id="image_placeholder"
                                      class="{{ $isEdit && ($editItem->image_url ?? false) ? 'hidden' : '' }}">🖼️</span>
                            </div>
                            <div>
                                <p class="font-medium">
                                    Click to select image
                                </p>
                                <p id="image_filename" class="text-gray-500">
                                    {{ $isEdit && ($editItem->image_url ?? false) ? 'Current image selected' : 'PNG, JPG up to 2MB' }}
                                </p>
                            </div>
                        </div>

                        <input
                            type="file"
                            id="image_input"
                            name="image"
                            accept="image/*"
                            class="hidden @error('image') border-red-500 @enderror">

                        @error('image')
                        <p class="text-xs text-red-600 mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    {{-- Buttons --}}
                    <div class="pt-2 flex justify-end gap-2">
                        @if($isEdit)
                            <a href="{{ route('categories.index') }}"
                               class="px-3 py-2 text-xs border rounded-lg">
                                Cancel
                            </a>
                            <button
                                type="submit"
                                class="px-4 py-2 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                Update
                            </button>
                        @else
                            <button
                                type="submit"
                                class="px-4 py-2 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                Save
                            </button>
                        @endif
                    </div>
                </form>
            </div>
        </div>

        {{-- Right: search + table --}}
        <div class="md:col-span-2">

            {{-- Search --}}
            <form method="GET" class="flex flex-wrap gap-2 mb-3 items-center">
                <input
                    type="text"
                    name="search"
                    value="{{ request('search') }}"
                    placeholder="Search by code or name..."
                    class="border rounded-lg px-3 py-2 text-sm w-full sm:w-72">
                <button
                    type="submit"
                    class="px-3 py-2 text-sm rounded-lg bg-gray-900 text-white">
                    Search
                </button>
            </form>

            {{-- Table --}}
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
                        @forelse($categories as $category)
                            <tr>
                                <td class="px-3 py-2">{{ $category->id }}</td>
                                <td class="px-3 py-2 font-mono text-xs">{{ $category->code }}</td>
                                <td class="px-3 py-2">{{ $category->name_en }}</td>
                                <td class="px-3 py-2">{{ $category->name_bn }}</td>
                                <td class="px-3 py-2">
                                    @if($category->is_active)
                                        <span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">Active</span>
                                    @else
                                        <span class="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">Inactive</span>
                                    @endif
                                </td>
                                <td class="px-3 py-2">
                                    @if($category->image_url ?? false)
                                        <img src="{{ $category->image_url }}"
                                             alt="Image"
                                             class="w-10 h-10 object-cover rounded">
                                    @else
                                        <span class="text-xs text-gray-400">No image</span>
                                    @endif
                                </td>
                                <td class="px-3 py-2 text-right space-x-1">
                                    {{-- Edit: reload same page in edit mode --}}
                                    <a href="{{ route('categories.index', ['edit' => $category->id, 'search' => request('search')]) }}"
                                       class="inline-flex items-center px-2 py-1 text-xs border rounded-lg hover:bg-gray-50">
                                        Edit
                                    </a>

                                    {{-- Delete with SweetAlert --}}
                                    <form action="{{ route('categories.destroy', $category) }}"
                                          method="POST"
                                          class="inline-block js-delete-form">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit"
                                                class="inline-flex items-center px-2 py-1 text-xs border border-red-500 text-red-600 rounded-lg hover:bg-red-50">
                                            Delete
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="7" class="px-3 py-4 text-center text-sm text-gray-500">
                                    No categories found.
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            {{-- Pagination --}}
            <div class="mt-4">
                {{ $categories->withQueryString()->links() }}
            </div>
        </div>
    </div>

    {{-- jQuery-based scripts --}}
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

@endsection
