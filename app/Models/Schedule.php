<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    protected $guarded = [
        'id', 
    ];
    public function route()
    {
        return $this->belongsTo(Routes::class);
    }

    public function fleet()
    {
        return $this->belongsTo(Fleet::class);
    }
}