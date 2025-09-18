<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'capital', 'iso2', 'iso3', 'currency', 'currency_name', 'currency_symbol', 'is_active'];

    public function states() {
        return $this->hasMany(State::class);
    }

    public function cities() {
        return $this->hasMany(City::class);
    }
}
