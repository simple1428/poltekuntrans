import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Section from "@/Components/Section";
import TextInput from "@/Components/TextInput";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import CardBus from "./Comp/CardBus";

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
    const [isActiveSection, setIsActiveSection] = useState(false);
    const [availableFleets, setAvailableFleets] = useState([]);

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
        console.log("Data:", data);
        console.log("Route:", route);

        if (data.departure_date) {
            const selectedDate = new Date(data.departure_date);
            const filteredSchedules = schedules.filter((schedule) => {
                const scheduleDate = new Date(schedule.departure_time);
                console.log("Schedule Date:", scheduleDate);
                console.log("Selected Date:", selectedDate);
                return (
                    schedule.route_id == route.id &&
                    scheduleDate.toDateString() ===
                        selectedDate.toDateString() &&
                    schedule.status
                );
            });
            console.log("Filtered Schedules with Date:", filteredSchedules);
            setAvailableFleets(filteredSchedules);
            setIsActiveSection(true);
        } else {
            const filteredSchedules = schedules.filter((schedule) => {
                return schedule.route_id == route.id && schedule.status;
            });
            console.log("Filtered Schedules without Date:", filteredSchedules);
            setAvailableFleets(filteredSchedules);
            setIsActiveSection(true);
        }
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
                        <h1 className="border-b pt-5 mb-5 text-xl font-bold uppercase">
                            Armada yang tersedia
                        </h1>

                        {isActiveSection == true ? (
                            availableFleets.length > 0 ? (
                                availableFleets.map((schedule, index) => (
                                    <CardBus key={index} schedule={schedule} />
                                ))
                            ) : (
                                <p className="text-center text-gray-500">
                                    Tidak ada armada yang tersedia.
                                </p>
                            )
                        ) : (
                            schedules
                                .filter((sc) => {
                                    return sc.status === 1;
                                })
                                .map((schedule, index) => {
                                    return (
                                        <CardBus
                                            key={index}
                                            schedule={schedule}
                                        />
                                    );
                                })
                        )}
                    </Section>
                </div>
            </HomeLayout>
        </>
    );
}
