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
        $locale = null;
        
        // Priority 1: Check for 'lang' query parameter
        if ($request->query('lang')) {
            $locale = $request->query('lang');
        }
        
        // Priority 2: Use session locale if available
        elseif ($request->hasSession() && $request->session()->get('locale')) {
            $locale = $request->session()->get('locale');
        }
        
        // Priority 3: Check Accept-Language header
        elseif ($request->header('Accept-Language')) {
            $locale = $request->header('Accept-Language');
        }
        
        // Clean up locale string (remove region codes like en-US -> en)
        if ($locale) {
            $locale = strtolower(substr($locale, 0, 2));
        }
        
        // Validate locale is supported, otherwise use default from config
        if (!$locale || !in_array($locale, $supportedLocales)) {
            $locale = config('app.locale', 'bn');
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
