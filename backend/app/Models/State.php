<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'iso2', 'iso3166_2', 'country_id', 'is_active'];

    public function country() {
        return $this->belongsTo(Country::class);
    }

    public function cities() {
        return $this->hasMany(City::class);
    }
}
