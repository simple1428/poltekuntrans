import Section from "@/Components/Section";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Index() {
    return (
        <>
            <Head title="About" />
            <HomeLayout>
                <div className="bg-white py-10">
                    <Section className={"flex justify-between items-center"}>
                        <div className="w-1/2 flex items-center justify-center ">
                            <img
                                src={`${asset}images/logo.svg`}
                                alt="poltekuntrans"
                                className="w-64"
                            />
                        </div>
                        <div className="w-1/2  space-y-4  py-3">
                            <h3 className="font-bold text-2xl">
                                {" "}
                                Tentang Kami
                            </h3>
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Sequi fugit optio asperiores,
                                illo modi eaque expedita placeat, odio unde
                                deleniti totam pariatur tenetur ratione
                                molestias nemo vitae reprehenderit velit
                                quisquam, perspiciatis maxime beatae. Vitae
                                itaque voluptates commodi nostrum perferendis
                                eveniet, alias quia id quam tenetur officia
                                tempora eligendi nobis! Commodi?
                            </p>
                            <h4 className="text-secondary ">
                                Saat ini Poltekun Trans telah berhasil
                                mengembangkan jumlah tujuan keberangkatan
                                menjadi :
                            </h4>
                            <p>
                                Jakarta, Bandung, Tangerang, Soekarno Hatta
                                International Airport, Semarang, Solo, Salatiga,
                                Yogyakarta, Surabaya and Malang
                            </p>
                        </div>
                    </Section>
                </div>
                <div className="bg-secondary py-5">
                    {" "}
                    <Section className={"flex justify-between items-center"}>
                        <div className="w-1/2 text-white   ">
                            <h3 className="font-bold text-2xl uppercase">
                                {" "}
                                Jaringan Kami
                            </h3>
                            <p className="">
                                Poltekun Trans dikenal sebagai penyedia layanan
                                Executive Shuttle pertama di Indonesia yang
                                memiliki cakupan terluas. Kami telah hadir di 9
                                Kota besar dan menghubungkan kota-kota besar di
                                Pulau Jawa.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <img src={`${asset}images/maps.svg`} alt="" />
                        </div>
                    </Section>
                </div>
                <div className="py-10 mb-10">
                    <Section>
                        <h3 className="uppercase text-2xl font-semibold text-center">
                            Rute Tersedia
                        </h3>
                        <div className="grid grid-cols-3 w-full">
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-lg text-yellow-500 border-b border-white">
                                    Jawa Barat
                                </h3>
                                <ul>
                                    <li>DKI Jakarta {"><"} Bandung </li>
                                    <li>Tangerang {"><"} Bandung </li>
                                    <li>Bekasi {"><"} Bandung </li>
                                    <li>Jakarta {"><"} Semarang </li>
                                    <li>Bandung {"><"} Semarang </li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-lg text-yellow-500 border-b border-white">
                                    Jawa Tengah
                                </h3>
                                <ul>
                                    <li>Semarang {"><"} Yogyakarta</li>
                                    <li>Semarang {"><"} Surakarta (Solo)</li>
                                    <li>Semarang {"><"} Purwokerto</li>
                                    <li>Semarang {"><"} Tegal</li>
                                    <li>Yogyakarta {"><"} Surakarta (Solo)</li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-lg text-yellow-500 border-b border-white">
                                    Jawa Timur
                                </h3>
                                <ul>
                                    <li>Surabaya {"><"} Malang</li>
                                    <li>Surabaya {"><"} Kediri</li>
                                    <li>Surabaya {"><"} Jember</li>
                                    <li>Surabaya {"><"} Banyuwangi</li>
                                    <li>Malang {"><"} Kediri</li>
                                </ul>
                            </div>
                        </div>
                    </Section>
                </div>
            </HomeLayout>
        </>
    );
}
