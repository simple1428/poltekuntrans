import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import QRCodeComponent from "@/Components/QRCodeComponent";
import Section from "@/Components/Section";
import TextInput from "@/Components/TextInput";
import HomeLayout from "@/Layouts/HomeLayout";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Head, useForm } from "@inertiajs/react";
import React from "react";
import {
    Notification,
    notifySuccess,
    notifyError,
    notifyInfo,
    notifyWarning,
} from "@/Components/Notification";
export default function Show({ booking }) {
    const fleet = booking.schedule.fleet;
    const route = booking.schedule.route;
    const payment = booking.payments;
    const { data, setData, post, processing, errors } = useForm();
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
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
            <Head title="Order detail" />
            <HomeLayout>
                <Section className="h-96 bg-white rounded-lg flex overflow-hidden relative">
                    <div className="w-[30%] border-r-4 border-dashed border-secondary flex justify-center items-center">
                        <QRCodeComponent value={booking.code} />
                    </div>
                    <div className="w-[70%] bg-secondary text-white p-2 flex flex-col justify-between relative">
                        {booking.status === 0 ? (
                            <div className="absolute text-[100px] uppercase -rotate-12 right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 font-bold text-transparent/30 ">
                                NonAktif
                            </div>
                        ) : null}
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-bold">
                                E-TIKET POLTEKUN TRANS
                            </h1>
                            <h3>{booking.code}</h3>
                        </div>
                        <div className="text-lg text-end">
                            <h1>
                                <span className="text-gray-400">Nama</span> :{" "}
                                {booking.name}
                            </h1>
                            <h1>
                                {" "}
                                <span className="text-gray-400">
                                    Nomor Handphone
                                </span>
                                : {booking.phone_number}
                            </h1>
                            <h3>
                                <span className="text-gray-400">Armada</span>:{" "}
                                {fleet.model} / {fleet.fleet_number}
                            </h3>
                            <p>
                                <span className="text-gray-400">
                                    Keberangkatan
                                </span>
                                : {route.departure_city}
                            </p>
                            <p>
                                <span className="text-gray-400">Tujuan</span>:{" "}
                                {route.arrival_city}
                            </p>
                            <p>
                                <span className="text-gray-400">
                                    Kursi Booking
                                </span>
                                : {booking.seats_booked}
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <h1 className="text-lg font-bold">
                                <FormatRupiah value={booking.total_cost} />
                            </h1>
                        </div>
                    </div>
                </Section>
                <Section className={"my-5"}>
                    NB* :{" "}
                    <span className="text-red-500">
                        Harap Lakukan Pembayaran Terlebih Dahulu Untuk
                        Mengaktifkan Tiket
                    </span>
                    <div className="bg-red-500/50">
                        <p>Status Pembayaran : {payment.status}</p>
                        <form
                            onChange={handleSubmit}
                            className="flex items-center p-2 gap-4"
                        >
                            <div className="">
                                <TextInput
                                    type="file"
                                    className="bg-gray-200"
                                />
                                <InputError />
                            </div>
                            <PrimaryButton
                                disabled={processing}
                                className="s
                            text-primary bg-secondary hover:bg-secondary/80"
                            >
                                Confirm Pembayaran
                            </PrimaryButton>
                        </form>
                        <span>Fitur belum bisa</span>
                    </div>
                </Section>
            </HomeLayout>
        </>
    );
}
