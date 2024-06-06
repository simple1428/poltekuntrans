<?php

namespace App\Http\Controllers\HomeController;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use App\Models\Booking as ModelsBooking;
use App\Models\Fleet;
use App\Models\Payment;
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
    public function show(ModelsBooking $booking)
    {
        $data = [
            'booking' => $booking->load(['schedule.route', 'schedule.fleet','payments'])
        ];

        return Inertia::render('Home/Order/Show',$data);
    }
    public function store(OrderRequest $request)
    {
        $uniqueCode = 'PLT_' . str_pad(random_int(0, 99999), 5, '0', STR_PAD_LEFT);

        $schedule = Schedule::findOrFail($request->schedule_id);
        $data = [
            'code' => $uniqueCode,
            'seats_booked' => $request->seats_booked,
            'schedule_id' => $schedule->id,
            'user_id' => auth()->user()->id,
            'total_cost' => $schedule->route->cost * $request->seats_booked,
            'name' => $request->name,
            'phone_number' => $request->phone_number,
            'status' => 0
        ];

        $booking = ModelsBooking::create($data);
        if($booking)
        {
            $data2 = [
                'booking_id' => $booking->id,
                'amount' => $booking->total_cost,
                'payment_method' => 'Transfer Bank',
                'status' => 'UnPaid'
            ];
            Payment::create($data2);
        }
        return redirect()->route('booking.show',$booking->id);
    }
}