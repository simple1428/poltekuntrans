import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import {
    Notification,
    notifySuccess,
    notifyError,
    notifyInfo,
    notifyWarning,
} from "@/Components/Notification";
import PrimaryButton from "@/Components/PrimaryButton";
import Section from "@/Components/Section";
import TextInput from "@/Components/TextInput";
import HomeLayout from "@/Layouts/HomeLayout";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Booking({ schedule }) {
    const fleet = schedule.fleet;
    const [capacityOptions, setCapacityOptions] = useState([]);
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        phone_number: "",
        seats_booked: "",
        schedule_id: schedule.id,
    });
    useEffect(() => {
        const options = [];
        for (let i = 1; i <= schedule.capacity; i++) {
            options.push({ value: i, label: `${i} Penumpang` });
        }
        setCapacityOptions(options);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log("Submitted data:", data); // Process form data
        post(route("booking.store"), {
            preserveScroll: true,
            onSuccess: () => {
                notifySuccess("This is a success message!");
            },
            onError: () => {
                notifyError("This is an error message!");
            },
        });
    };
    return (
        <>
            <Head title="Boking" />
            <HomeLayout>
                <Section>
                    <h3 className="text-center font-bold text-lg border-b mb-4 border-white uppercase ">
                        Booking Tiket
                    </h3>
                    <div className="">
                        <Notification />
                    </div>
                    <div className="bg-white  rounded-md flex justify-between">
                        <div className="w-1/2 p-3">
                            <div className="border-b mb-7">
                                <h3 className="text-2xl font-bold">
                                    {fleet.model}
                                </h3>
                                <div className="mt-1">
                                    <h3 className="text-lg font-semibold bg-primary rounded-md px-2 text-secondary">
                                        {schedule.route.departure_city} -{" "}
                                        {schedule.route.arrival_city} /{" "}
                                        <FormatRupiah
                                            value={schedule.route.cost}
                                        />{" "}
                                        @Kursi
                                    </h3>
                                </div>
                                <div className="flex gap-3">
                                    <p className="text-sm text-secondary font-semibold border-r pr-4">
                                        {fleet.fleet_number}
                                    </p>
                                    <p className="text-sm text-secondary font-semibold border-r pr-4">
                                        {" "}
                                        {fleet.capacity} Kursi
                                    </p>
                                    <p className="text-sm text-green-400 font-semibold border-r pr-4">
                                        {fleet.capacity} Kursi Tersedia
                                    </p>
                                </div>
                            </div>
                            <div className="my-3 ">
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-2"
                                >
                                    <div className="">
                                        <InputLabel value={"Masukan Nama"} />
                                        <TextInput
                                            className="w-full"
                                            name="name"
                                            value={data.name}
                                            onChange={(event) =>
                                                setData(
                                                    "name",
                                                    event.target.value
                                                )
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2 text-xs"
                                        />
                                    </div>
                                    <div className="">
                                        <InputLabel
                                            value={"Masukan Nomor Ponsel"}
                                        />
                                        <TextInput
                                            className="w-full"
                                            type=""
                                            name="phone_number"
                                            value={data.phone_number}
                                            onChange={(event) =>
                                                setData(
                                                    "phone_number",
                                                    event.target.value
                                                )
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.phone_number}
                                            className="mt-2 text-xs"
                                        />
                                    </div>
                                    <div className="">
                                        <InputLabel
                                            value={"Pilih Jumlah Orang"}
                                        />
                                        <select
                                            className="w-full border-gray-300 rounded-md"
                                            onChange={(e) => {
                                                setData(
                                                    "seats_booked",
                                                    e.target.value
                                                );
                                            }}
                                        >
                                            <option value="">
                                                Pilih Kapasitas
                                            </option>
                                            {capacityOptions.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.seats_booked}
                                            className="mt-2 text-xs"
                                        />
                                    </div>
                                    <div className="border-t pt-4">
                                        <p>
                                            Total :{" "}
                                            <FormatRupiah
                                                value={
                                                    schedule.route.cost *
                                                    data.seats_booked
                                                }
                                            />
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <PrimaryButton className="bg-secondary text-white hover:bg-secondary/80">
                                                Order
                                            </PrimaryButton>
                                            <Link
                                                href={route("order.index")}
                                                className="bg-secondary/10   rounded-lg px-5 py-1   text-secondary hover:bg-secondary/20 transition duration-300  "
                                            >
                                                Batal
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className=" w-1/2 flex flex-col items-end justify-center">
                            <img
                                src={`${asset}storage/${fleet.image}`}
                                alt=""
                                className="w-80 h-72 rounded-l-full"
                            />
                            <div className=" p-2 text-end">
                                <p className="text-sm font-semibold">
                                    {fleet.fleet_number}
                                </p>
                                <h3 className="text-lg font-bold border-b">
                                    {fleet.model}
                                </h3>
                            </div>
                        </div>
                    </div>
                </Section>
            </HomeLayout>
        </>
    );
}
