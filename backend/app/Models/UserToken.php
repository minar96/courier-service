<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserToken extends Model
{
    use HasFactory;

     protected $fillable = [
        'user_id',
        'access_token',
        'refresh_token',
        'refresh_token_expires_at',
        'device_name',
        'ip_address',
        'last_used_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
