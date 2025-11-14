<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory, SoftDeletes;

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

    // 🔹 Parent category
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    // 🔹 Children categories
    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

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

    public function image()
    {
        return $this->morphOne(Attachment::class, 'attachmentable');
    }

    public function attachments()
    {
        return $this->morphMany(Attachment::class, 'attachmentable');
    }
}
