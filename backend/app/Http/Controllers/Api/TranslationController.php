<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;

class TranslationController extends Controller
{
    /**
     * Get all translations for the current locale
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $locale = App::getLocale();
        $translations = $this->loadTranslations($locale);
        
        return response()->json([
            'success' => true,
            'locale' => $locale,
            'translations' => $translations
        ]);
    }

    /**
     * Get a specific translation by key
     *
     * @param Request $request
     * @param string $key
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, string $key)
    {
        $locale = App::getLocale();
        $translations = $this->loadTranslations($locale);
        
        // Support nested keys using dot notation (e.g., "headerMenu.home")
        $value = $this->getNestedValue($translations, $key);
        
        if ($value === null) {
            return response()->json([
                'success' => false,
                'message' => 'Translation key not found',
                'key' => $key
            ], 404);
        }
        
        return response()->json([
            'success' => true,
            'locale' => $locale,
            'key' => $key,
            'value' => $value
        ]);
    }

    /**
     * Load translations from JSON file
     *
     * @param string $locale
     * @return array
     */
    private function loadTranslations(string $locale): array
    {
        $filePath = resource_path("lang/{$locale}.json");
        
        if (!File::exists($filePath)) {
            return [];
        }
        
        $content = File::get($filePath);
        return json_decode($content, true) ?? [];
    }

    /**
     * Get nested value from array using dot notation
     *
     * @param array $array
     * @param string $key
     * @return mixed
     */
    private function getNestedValue(array $array, string $key)
    {
        $keys = explode('.', $key);
        $value = $array;
        
        foreach ($keys as $k) {
            if (!isset($value[$k])) {
                return null;
            }
            $value = $value[$k];
        }
        
        return $value;
    }
}
