import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

// Fungsi untuk memformat tanggal ke dalam format Indonesia
const formatToIndonesianDate = (dateString) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
};

// Fungsi untuk menghitung selisih waktu dalam hitungan mundur
const calculateTimeLeft = (departureTime) => {
    const difference = +new Date(departureTime) - +new Date();
    if (difference <= 0) return null;

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

export default function CardBus({ schedule }) {
    const [timeLeft, setTimeLeft] = useState(
        calculateTimeLeft(schedule.departure_time)
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(schedule.departure_time));
        }, 1000);

        return () => clearInterval(timer);
    }, [schedule.departure_time]);

    const countdownDisplay = timeLeft ? (
        <span className="text-xs absolute -top-2 left-0 bg-secondary text-white rounded-r-full rounded-tl-full px-2 py-1 animate-pulse">
            {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </span>
    ) : (
        <span className="text-xs absolute -top-2 left-0 bg-red-600 text-white rounded-r-full rounded-tl-full px-2 py-1 animate-pulse">
            Bus sudah berangkat
        </span>
    );

    return (
        <div
            className={`${
                schedule.status == 1 ? "bg-gray-100" : "bg-red-100"
            }  p-4 rounded-lg shadow-md mb-4 relative flex justify-between items-center  `}
        >
            <div className="">
                <h3 className="text-xl font-bold">{schedule.fleet.model}</h3>
                <p>Nomor Armada: {schedule.fleet.fleet_number}</p>
                <p>
                    Tanggal Keberangkatan:{" "}
                    {formatToIndonesianDate(schedule.departure_time)}
                </p>
                <p>Kapasitas: {schedule.fleet.capacity}</p>
                <div className="mt-4">{countdownDisplay}</div>
            </div>
            <div className="">
                {schedule.status == 1 ? (
                    <Link className="rounded-l-full bg-secondary px-3 py-2 text-white">
                        Booking
                    </Link>
                ) : (
                    <div className="  text-xl   uppercase   font-semibold  ">
                        Inactive
                    </div>
                )}
            </div>
        </div>
    );
}
