<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPublicInfo extends Model
{
    use HasFactory;
    protected $table = 'user_public_info';
    protected $fillable = [
        'nick_name',
        'occupation',
        'biography',
        'description',
    ];
}
