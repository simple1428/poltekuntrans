import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Section from "@/Components/Section";
import TextInput from "@/Components/TextInput";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function Index({ routes, schedules }) {
    const { data, setData } = useForm({
        departure_city: "",
        arrival_city: "",
        departure_date: "",
    });

    const uniqueDepartureCities = [
        ...new Set(routes.map((item) => item.departure_city)),
    ];

    const [filteredArrivalCities, setFilteredArrivalCities] = useState([]);
    const [isDepartureSelected, setIsDepartureSelected] = useState(false);
    const [availableFleets, setAvailableFleets] = useState([]);
    const [timeLefts, setTimeLefts] = useState({});

    const handleDepartureChange = (event) => {
        const departureCity = event.target.value;
        setData("departure_city", departureCity);
        setIsDepartureSelected(true);

        const arrivalCities = routes
            .filter((route) => route.departure_city === departureCity)
            .map((route) => route.arrival_city);

        setFilteredArrivalCities(arrivalCities);
    };

    const handleArrivalChange = (event) => {
        const arrivalCity = event.target.value;
        setData("arrival_city", arrivalCity);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const route = routes.find(
            (route) =>
                route.departure_city === data.departure_city &&
                route.arrival_city === data.arrival_city
        );

        if (!route) {
            console.error("Route not found");
            return;
        }

        const selectedDate = new Date(data.departure_date);
        const filteredSchedules = schedules.filter((schedule) => {
            const scheduleDate = new Date(schedule.departure_time);
            return (
                schedule.route_id === route.id &&
                scheduleDate.toDateString() === selectedDate.toDateString() &&
                schedule.status
            );
        });

        setAvailableFleets(filteredSchedules);

        const initialTimeLefts = filteredSchedules.reduce((acc, schedule) => {
            acc[schedule.id] = calculateTimeLeft(schedule.departure_time);
            return acc;
        }, {});
        setTimeLefts(initialTimeLefts);
    };

    const formatToIndonesianDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "Asia/Jakarta",
        }).format(date);
    };

    const calculateTimeLeft = (departureTime) => {
        const now = new Date();
        const difference = +new Date(departureTime) - now;

        if (difference <= 0) return null;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLefts((prevTimeLefts) => {
                const newTimeLefts = {};
                for (const id in prevTimeLefts) {
                    newTimeLefts[id] = calculateTimeLeft(
                        availableFleets.find((schedule) => schedule.id === +id)
                            .departure_time
                    );
                }
                return newTimeLefts;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [availableFleets]);

    const renderCountdown = (timeLeft) => {
        if (!timeLeft) return "Berangkat";

        const { days, hours, minutes, seconds } = timeLeft;
        return `${days}h ${hours}j ${minutes}m ${seconds}d`;
    };

    return (
        <>
            <Head title="Order" />
            <HomeLayout>
                <div className="bg-secondary h-96 py-10">
                    <Section className={"  h-full "}>
                        <div className="flex flex-col items-center ">
                            <h3 className="text-white font-bold text-2xl text-center uppercase  ">
                                Layanan Order Tiket
                            </h3>
                            <hr className="w-44 mt-2" />
                            <hr className="w-40 mt-1" />
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col items-center"
                        >
                            <div className="w-1/2 bg-white/10   mt-3 shadow-2xl rounded-md p-5">
                                <div className="   grid  grid-cols-2 ">
                                    <div className="  rounded-lg flex flex-col items-center justify-center">
                                        <InputLabel
                                            className="text-white text-xl"
                                            value={"Pilih Keberangkatan"}
                                        />
                                        <select
                                            id="departureCity"
                                            name="departureCity"
                                            onChange={handleDepartureChange}
                                            className="border-gray-200 rounded-lg w-3/4"
                                            required
                                        >
                                            <option
                                                value=""
                                                disabled={isDepartureSelected}
                                            >
                                                Pilih Keberangkatan
                                            </option>
                                            {uniqueDepartureCities.map(
                                                (city, index) => (
                                                    <option
                                                        key={index}
                                                        value={city}
                                                    >
                                                        {city}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div className="  rounded-lg flex flex-col items-center justify-center">
                                        <label
                                            htmlFor="arrivalCity"
                                            className="text-white text-xl"
                                        >
                                            Pilih Tujuan
                                        </label>
                                        <select
                                            onChange={handleArrivalChange}
                                            id="arrivalCity"
                                            name="arrivalCity"
                                            className="border-gray-200 rounded-lg w-3/4"
                                            required
                                        >
                                            <option value="">
                                                Pilih Tujuan
                                            </option>
                                            {filteredArrivalCities.map(
                                                (city, index) => (
                                                    <option
                                                        key={index}
                                                        value={city}
                                                    >
                                                        {city}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-3 border-t">
                                    <div className="  rounded-lg flex flex-col items-center justify-center">
                                        <InputLabel
                                            className="text-white text-xl"
                                            value={"Pilih Tanggal"}
                                        />
                                        <TextInput
                                            type="date"
                                            onChange={(e) => {
                                                setData(
                                                    "departure_date",
                                                    e.target.value
                                                );
                                            }}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="my-5">
                                <PrimaryButton className="bg-white text-secondary font-bold hover:bg-white/90">
                                    Cari Armada
                                </PrimaryButton>
                            </div>
                        </form>
                    </Section>
                </div>
                <div className="bg-white py-10 ">
                    <Section>
                        {availableFleets.length > 0 ? (
                            availableFleets.map((schedule) => (
                                <div
                                    key={schedule.id}
                                    className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 relative flex justify-between items-center"
                                >
                                    <div className="">
                                        <h3 className="text-xl font-bold">
                                            {schedule.fleet.model}
                                        </h3>
                                        <p>
                                            Nomor Armada:{" "}
                                            {schedule.fleet.fleet_number}
                                        </p>
                                        <p>
                                            Tanggal Keberangkatan:{" "}
                                            {formatToIndonesianDate(
                                                schedule.departure_time
                                            )}
                                        </p>
                                        <p>
                                            Kapasitas: {schedule.fleet.capacity}
                                        </p>
                                    </div>
                                    <div className="">
                                        <Link className="rounded-l-full bg-secondary px-3 py-2 text-white">
                                            Booking
                                        </Link>
                                    </div>

                                    <p className="text-xs absolute -top-2 left-0 bg-secondary text-white rounded-r-full rounded-tl-full px-2 py-1 animate-pulse">
                                        {renderCountdown(
                                            timeLefts[schedule.id]
                                        )}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">
                                Tidak ada armada yang tersedia.
                            </p>
                        )}
                    </Section>
                </div>
            </HomeLayout>
        </>
    );
}
