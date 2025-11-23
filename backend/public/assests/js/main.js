   $(document).ready(function() {

        // MOBILE: open sidebar
        $('#openSidebarBtn').on('click', function() {
            $('#sidebar').removeClass('-translate-x-full');
            $('#sidebarBackdrop').removeClass('hidden');
        });

        // MOBILE: close sidebar
        $('#closeSidebarBtn, #sidebarBackdrop').on('click', function() {
            $('#sidebar').addClass('-translate-x-full');
            $('#sidebarBackdrop').addClass('hidden');
        });

        // DESKTOP: collapse / expand sidebar
        $('#collapseSidebarBtn').on('click', function() {
            $('body').toggleClass('sidebar-collapsed');

            // when collapsed, close all submenus and reset arrows
            if ($('body').hasClass('sidebar-collapsed')) {
                $('.submenu').slideUp(0);
                $('.submenu-arrow').removeClass('rotate-90');
            }
        });

        // SUBMENU TOGGLE
        $('.submenu-toggle').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation(); // 👈 important: don't bubble to backdrop / other handlers

            const isDesktop = window.innerWidth >= 768;

            // if collapsed on desktop, first expand the sidebar
            if (isDesktop && $('body').hasClass('sidebar-collapsed')) {
                $('body').removeClass('sidebar-collapsed');
            }

            const target = $(this).data('target');
            const $submenu = $(target);
            const $arrow = $(this).find('.submenu-arrow');

            // accordion behavior: close others
            $('.submenu').not($submenu).slideUp(150);
            $('.submenu-arrow').not($arrow).removeClass('rotate-90');

            // smooth open/close this one
            $submenu.stop(true, true).slideToggle(150);
            $arrow.toggleClass('rotate-90');
        });
    });
