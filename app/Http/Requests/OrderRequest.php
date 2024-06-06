<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'seats_booked' => 'required|integer|min:1',
            'name' => 'required|string|max:255|min:3',
            'phone_number' => 'required|string|max:20',
        ];
    }
}