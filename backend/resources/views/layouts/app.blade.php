<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Dashboard')</title>

    <!-- ✅ Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script defer src="https://unpkg.com/alpinejs"></script>
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      integrity="sha512-...your-cdn..."
      crossorigin="anonymous"
      referrerpolicy="no-referrer" />
</head>
<body class="bg-gray-100">

<div x-data="{ sidebarOpen: true }" class="flex h-screen">

    <!-- ✅ Sidebar include -->
    @include('partials.sidebar')

    <!-- ✅ Main content wrapper -->
    <div class="flex-1 flex flex-col">

        <!-- ✅ Topbar include -->
        @include('partials.topbar')

        <!-- ✅ Dynamic page content -->
        <main class="p-6">
            @yield('content')
        </main>
    </div>
</div>

</body>
</html>
