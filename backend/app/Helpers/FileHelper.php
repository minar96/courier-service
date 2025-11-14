<?php

namespace App\Helpers;

use App\Models\Attachment;
use Illuminate\Support\Facades\Storage;

class FileHelper
{
    /**
     * Upload file and create attachment record.
     * - Stores actual file in storage/app/public/files
     * - Stores relative path in `url` column
     * - Returns attachment ID
     */
    public static function uploadFile($file, string $alt = ''): ?int
    {
        if (!$file) {
            return null;
        }

        // Common folder for all attachments
        $folder = 'files';

        // Make unique file name
        $fileName = uniqid() . '_' . preg_replace('/\s+/', '_', $file->getClientOriginalName());

        // Path relative to "public" disk: files/xxxxx.jpg
        $path = $file->storeAs($folder, $fileName, 'public');

        // Save in DB: url = path (not full URL)
        $attachment = Attachment::create([
            'url' => $path,
            'alt' => $alt,
        ]);

        return $attachment->id;
    }

    /**
     * Update file:
     * - if new file: delete old physical file + record
     * - upload new file
     * - return new attachment ID
     */
    public static function updateFile($file, ?int $oldAttachmentId = null, string $alt = ''): ?int
    {
        if (!$file) {
            // no new file => keep old attachment
            return $oldAttachmentId;
        }

        // Delete old attachment + file
        if ($oldAttachmentId) {
            $old = Attachment::find($oldAttachmentId);

            if ($old) {
                if (!empty($old->url)) {
                    Storage::disk('public')->delete($old->url);
                }
                $old->delete();
            }
        }

        // Upload new one
        return self::uploadFile($file, $alt);
    }
}
