<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Get supported locales from config
        $supportedLocales = config('app.supported_locales', ['en', 'bn']);
        
        // Priority 1: Check for 'lang' query parameter
        $locale = $request->query('lang');
        
        // Priority 2: Check Accept-Language header if lang parameter not provided
        if (!$locale) {
            $locale = $request->header('Accept-Language');
        }
        
        // Priority 3: Use session locale if available
        if (!$locale && $request->hasSession()) {
            $locale = $request->session()->get('locale');
        }
        
        // Clean up locale string (remove region codes like en-US -> en)
        if ($locale) {
            $locale = strtolower(substr($locale, 0, 2));
        }
        
        // Validate locale is supported, otherwise use default
        if (!in_array($locale, $supportedLocales)) {
            $locale = config('app.locale', 'en');
        }
        
        // Set the application locale
        App::setLocale($locale);
        
        // Store locale in session for future requests
        if ($request->hasSession()) {
            $request->session()->put('locale', $locale);
        }
        
        return $next($request);
    }
}
