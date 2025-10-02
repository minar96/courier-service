<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
     use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'receiver_id',
        'tracking_no',
        'shipping_fee',
        'cod_amount',
        'notes',
        'product_category',
        'product_details',
        'order_date',
        'picked_at',
        'delivered_at',
        'status',
    ];

    protected $dates = [
        'order_date',
        'picked_at',
        'delivered_at',
    ];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function receiver()
    {
        return $this->belongsTo(Receiver::class);
    }

    public function statusLogs()
    {
        return $this->hasMany(OrderStatusLog::class);
    }
}
