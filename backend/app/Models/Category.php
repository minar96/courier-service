<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'code',
        'name_en',
        'name_bn',
        'slug',
        'file_id',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    // 🔹 Scope: Active categories
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    // 🔹 Automatically generate slug on creating/updating
    public static function boot()
    {
        parent::boot();

        static::creating(function ($category) {
            if(!$category->slug && $category->name_en) {
                $category->slug = Str::slug($category->name_en);
            }
        });

        static::updating(function ($category) {
            if($category->isDirty('name_en')) {
                $category->slug = Str::slug($category->name_en);
            }
        });
    }

    public function attachments()
    {
        return $this->hasMany(Attachment::class, 'file_id', 'id');
    }

    public function image()
    {
        return $this->belongsTo(Attachment::class, 'file_id');
    }

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return $this->file_id && $this->image
            ? Storage::disk('public')->url($this->image->url)
            : null;
    }

}
