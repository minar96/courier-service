<?php

if (!function_exists('trans_json')) {
    /**
     * Get translation from JSON file
     *
     * @param string $key
     * @param array $replace
     * @param string|null $locale
     * @return string
     */
    function trans_json(string $key, array $replace = [], ?string $locale = null): string
    {
        $locale = $locale ?? app()->getLocale();
        $filePath = resource_path("lang/{$locale}.json");
        
        if (!file_exists($filePath)) {
            return $key;
        }
        
        static $translations = [];
        
        if (!isset($translations[$locale])) {
            $translations[$locale] = json_decode(file_get_contents($filePath), true) ?? [];
        }
        
        $keys = explode('.', $key);
        $value = $translations[$locale];
        
        foreach ($keys as $k) {
            if (!isset($value[$k])) {
                return $key;
            }
            $value = $value[$k];
        }
        
        // Replace placeholders
        foreach ($replace as $search => $replaceValue) {
            $value = str_replace(":{$search}", $replaceValue, $value);
        }
        
        return is_string($value) ? $value : $key;
    }
}
