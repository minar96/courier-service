<?php

namespace App\Helpers;

use App\Models\Attachment;
use Illuminate\Support\Facades\Storage;

class FileHelper
{
    public static function uploadFile($file, string $alt = ''): ?int
    {
        if (!$file) {
            return null;
        }

        // Folder inside storage/app/public
        $folder = 'files';

        // Unique name
        $fileName = uniqid() . '_' . str_replace(' ', '_', $file->getClientOriginalName());

        // Save to storage/app/public/files/...
        $path = $file->storeAs($folder, $fileName, 'public');

        // Save DB row (url = relative path)
        $attachment = Attachment::create([
            'url' => $path,      // e.g. "files/abc_123.jpg"
            'alt' => $alt,
        ]);

        return $attachment->id;
    }

    public static function updateFile($file, ?int $oldAttachmentId = null, string $alt = ''): ?int
    {
        if (!$file) {
            return $oldAttachmentId;
        }

        // Delete old file and record
        if ($oldAttachmentId) {
            $old = Attachment::find($oldAttachmentId);
            if ($old) {
                if ($old->url && Storage::disk('public')->exists($old->url)) {
                    Storage::disk('public')->delete($old->url);
                }
                $old->delete();
            }
        }

        // Upload new one
        return self::uploadFile($file, $alt);
    }
}
