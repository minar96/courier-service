<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OrderStatusLog extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'order_id',
        'old_status',
        'new_status',
        'updated_by',
        'updated_reason',
        'remarks',
    ];

    // Relationships
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
