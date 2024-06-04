<?php

namespace App\Http\Controllers\HomeController;

use App\Http\Controllers\Controller;
use App\Models\Fleet;
use App\Models\Routes;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Booking extends Controller
{
    public function index(Schedule $schedule)
    {
        $data = [
            'schedule' => $schedule->load(['route','fleet'])
        ];
        return Inertia::render('Home/Order/Booking',$data);
    }
}