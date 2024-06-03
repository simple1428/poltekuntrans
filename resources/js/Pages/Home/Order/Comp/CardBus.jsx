import formatToIndonesianDate from "@/Components/FormatDate";
import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

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
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 relative flex justify-between items-center">
            <div className="">
                <h3 className="text-xl font-bold">{schedule.fleet.model}</h3>
                <p>Nomor Armada: {schedule.fleet.fleet_number}</p>
                <p>
                    Tanggal Keberangkatan:{" "}
                    {formatToIndonesianDate(schedule.departure_time)}
                </p>
                <p>Kapasitas: {schedule.fleet.capacity}</p>
                <p className="text-xs absolute -top-2 left-0 bg-secondary text-white rounded-r-full rounded-tl-full px-2 py-1 animate-pulse">
                    {timeLeft.days ||
                    timeLeft.hours ||
                    timeLeft.minutes ||
                    timeLeft.seconds ? (
                        <div>
                            <span>
                                {timeLeft.days}d {timeLeft.hours}h{" "}
                                {timeLeft.minutes}m {timeLeft.seconds}s
                            </span>
                        </div>
                    ) : (
                        <span>Bus sudah berangkat</span>
                    )}
                </p>
            </div>
            <div className="">
                <Link className="rounded-l-full bg-secondary px-3 py-2 text-white">
                    Booking
                </Link>
            </div>
        </div>
    );
}

const calculateTimeLeft = (departureTime) => {
    const difference = +new Date(departureTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};
