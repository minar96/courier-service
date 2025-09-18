<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function uploadFile($file, $path, $fileName = null)
    {
        try {
            $path = "storage/" . $path;
            $fileName = (time() . '_' . str_replace(' ', '_', $file->getClientOriginalName()));
            $file->move($path,$fileName);
        } catch (Exception) {
            return null;
        }
        return $fileName;
    }

    // for delete File
    public function deleteFile($path, $fileName)
    {
        try {

            $location = 'storage/' . $path . '/' . $fileName;
            if (file_exists($location)) {
                @unlink($location);
                return true;
            }
        } catch (Exception) {
            return false;
        }

        return false;
    }
}
