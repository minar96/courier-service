<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Attachment extends Model
{
    use HasFactory;
    protected $fillable = [
        'attachmentable_type',
        'attachmentable_id',
        'url',
        'alt',
        'position',
        'rank',
    ];

    public function attachmentable(): MorphTo
    {
        return $this->morphTo();
    }
}
