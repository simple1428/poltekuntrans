import formatToIndonesianDate from "@/Components/FormatDate";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

// Fungsi untuk memformat tanggal ke dalam format Indonesia
// const formatToIndonesianDate = (dateString) => {
//     const options = {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//         hour: "2-digit",
//         minute: "2-digit",
//     };
//     return new Date(dateString).toLocaleDateString("id-ID", options);
// };

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
    }, [schedule]);

    const countdownDisplay = timeLeft ? (
        <span className="text-xs absolute -top-2 left-0 bg-secondary border-b text-white rounded-r-full rounded-tl-full px-2 py-1 ">
            {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </span>
    ) : (
        <span className="text-xs absolute -top-2 left-0 bg-red-600 text-white rounded-r-full rounded-tl-full px-2 py-1 ">
            Bus sudah berangkat
        </span>
    );

    return (
        <div
            className={`${
                schedule.status == 1
                    ? "bg-gradient-to-r from-secondary to-primary"
                    : "bg-gradient-to-r from-red-500 to-red-700"
            } rounded-lg shadow-md mb-4 relative flex justify-between items-center  `}
        >
            <div className="p-4">
                <h3 className="text-xl font-bold text-white">
                    {schedule.fleet.model} |{" "}
                    {schedule.route.departure_city +
                        " - " +
                        schedule.route.arrival_city}
                </h3>
                <p className="text-white">
                    Nomor Armada: {schedule.fleet.fleet_number}
                </p>
                <p className="text-white">
                    Tanggal Keberangkatan:{" "}
                    {formatToIndonesianDate(schedule.departure_time)}
                </p>
                <p className="text-white">
                    Kapasitas: {schedule.fleet.capacity}
                </p>
                <p className="text-white">Tersisa: {schedule.capacity}</p>
            </div>
            <div className="">
                <div className="mt-4">{countdownDisplay}</div>
                {schedule.status == 1 ? (
                    schedule.capacity >= 0 ? (
                        <Link
                            href={route("booking.index", schedule)}
                            className="rounded-l-full bg-secondary px-3 py-2 flex items-center justify-center text-primary text-lg uppercase font-semibold"
                        >
                            Pesan Sekarang
                        </Link>
                    ) : (
                        <span className="rounded-l-full bg-secondary px-3 py-2 flex items-center justify-center text-red-600 text-lg uppercase font-semibold">
                            Sold Out
                        </span>
                    )
                ) : (
                    <div className="  text-xl   uppercase   font-semibold  text-white">
                        Tidak Aktif
                    </div>
                )}
            </div>
        </div>
    );
}
