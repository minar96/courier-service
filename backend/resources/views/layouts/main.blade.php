<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Dashboard')</title>

    {{-- Tailwind CSS --}}
    <script src="https://cdn.tailwindcss.com"></script>

    {{-- jQuery --}}
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    {{-- Collapse + layout CSS --}}
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
<body class="bg-gray-100" id="body">

<div class="flex">

    {{-- Sidebar --}}
    @include('partials.sidebar')

    <div class="flex-1 min-h-screen">

        {{-- Topbar --}}
        @include('partials.topbar')

        {{-- Main Content --}}
        <main
            id="mainContent"
            class="pt-20 px-4 pb-6 transition-all duration-300 ease-in-out"
        >
            @yield('content')
        </main>

    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

{{-- Sidebar + submenu JS --}}
<script src="{{ asset('assets/js/main.js') }}"></script>
<script>
          // Flash alerts
        @if(session('success'))
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: @json(session('success')),
            timer: 2000,
            showConfirmButton: false,
        });
        @endif

        @if(session('error'))
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: @json(session('error')),
        });
        @endif

</script>
</body>
</html>
