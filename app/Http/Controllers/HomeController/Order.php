<?php

namespace App\Http\Controllers\HomeController;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Fleet;
use App\Models\Routes;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Order extends Controller
{
    public function index()
    {
        $data = [
            'fleet' =>Fleet::with('schedules')->get(),
            'routes' => Routes::with('schedules')->get(),
            'schedules' => Schedule::with(['route','fleet'])->get()
        ];
        return Inertia::render('Home/Order/Index',$data);
    }
    public function olders()
    {
        $data = [
            'booking' => Booking::with(['schedule.route', 'schedule.fleet','payments'])->get()
        ];
        return Inertia::render('Home/Order/MyOrder',$data);
    }
}