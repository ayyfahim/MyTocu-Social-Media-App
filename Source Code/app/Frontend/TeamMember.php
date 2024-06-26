<?php

namespace App\Frontend;

use App\Frontend\AboutUs;
use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    protected $guarded = [];

    public function about_us()
    {
        return $this->hasMany(AboutUs::class);
    }
}
