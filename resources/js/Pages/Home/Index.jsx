import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Section from "@/Components/Section";
import TextInput from "@/Components/TextInput";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Index() {
    return (
        <>
            <Head title="Home" />
            <HomeLayout>
                <Section className={""}>
                    <div className="h-44   text-center space-y-3 py-10 relative">
                        <h3 className="text-3xl text-secondary uppercase z-10">
                            Saatnya Liburan, Saatnya Kita
                        </h3>
                        <div className="relative z-0">
                            <div className="absolute w-full h-6 bg-white bottom-3 z-0"></div>
                            <h1 className="text-5xl text-secondary font-semibold uppercase relative z-10">
                                Jelajah Indonesia
                            </h1>
                        </div>
                    </div>
                </Section>
                <Section className={"relative  h-[500px] flex justify-center"}>
                    <div className="bg-secondary shadow-xl h-96 w-64 rounded-2xl transition duration-300 hover:scale-105 hover:shadow-white">
                        <div className="relative  h-full">
                            <div className="absolute bg-white w-32  bottom-10 rounded-r-full pl-2 ">
                                <h3 className="font-semibold">Yogyakarta</h3>
                                <hr />
                                <small>Mulai dari 1 jt-an</small>
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondary shadow-xl h-96 w-64 rounded-2xl -ml-5 mt-5 transition duration-300 hover:scale-105 hover:shadow-white">
                        <div className="relative  h-full">
                            <div className="absolute bg-white w-32  bottom-10 rounded-r-full pl-2">
                                <h3 className="font-semibold">Bali</h3>
                                <hr />
                                <small>Mulai dari 1 jt-an</small>
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondary shadow-xl h-96 w-64 rounded-2xl  -ml-5 transition duration-300 hover:scale-105 hover:shadow-white">
                        <div className="relative  h-full">
                            <div className="absolute bg-white w-32  bottom-10 rounded-r-full pl-2">
                                <h3 className="font-semibold">Malang</h3>
                                <hr />
                                <small>Mulai dari 1 jt-an</small>
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondary shadow-xl h-96 w-64 rounded-2xl  -ml-5 mt-5 transition duration-300 hover:scale-105 hover:shadow-white">
                        <div className="relative  h-full">
                            <div className="absolute bg-white w-32  bottom-10 rounded-r-full pl-2">
                                <h3 className="font-semibold">Magelang</h3>
                                <hr />
                                <small>Mulai dari 1 jt-an</small>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section
                    className={
                        "bg-white h-32 rounded-lg flex  justify-between  items-center relative  my-10"
                    }
                >
                    <div className="flex  justify-between px-10 items-center w-full">
                        <div className="">
                            <InputLabel
                                className="font-semibold text-xl"
                                value="Keberangkatan"
                            />
                            <select
                                name=""
                                id=""
                                className="border-gray-200 rounded-lg"
                            >
                                <option value="">Pilih Keberangkatan</option>
                            </select>
                        </div>
                        <div className="">
                            <InputLabel
                                className="font-semibold text-xl"
                                value="Tujuan"
                            />{" "}
                            <select
                                name=""
                                id=""
                                className="border-gray-200 rounded-lg"
                            >
                                <option value="">Pilih Tujuan</option>
                            </select>
                        </div>
                        <div className="">
                            <InputLabel
                                className="font-semibold text-xl"
                                value="Tanggal"
                            />
                            <select
                                name=""
                                id=""
                                className="border-gray-200 rounded-lg"
                            >
                                <option value="">Pilih Tanggal</option>
                            </select>
                        </div>
                        <div className="">
                            <InputLabel
                                className="font-semibold text-xl"
                                value="Jumlah Orang"
                            />
                            <select
                                name=""
                                id=""
                                className="border-gray-200 rounded-lg"
                            >
                                <option value="">Pilih Jumlah Orang</option>
                            </select>
                        </div>
                    </div>
                    <div className="  bg-secondary w-36 text-white text-center rounded-l-full py-3 uppercase">
                        Order Now
                    </div>
                </Section>
                <div className="bg-white my-10 py-5 ">
                    <section className="container mx-auto">
                        <h1 className="text-center font-bold text-2xl pt-4 border-b ">
                            Layanan
                        </h1>
                        <div className="grid grid-cols-3 gap-5 mt-5 mx-40">
                            <div className="w-full h-64 bg-secondary shadow-2xl transition duration-300 hover:scale-105 hover:shadow-white rounded-r-[30%] rounded-tl-[30%]"></div>
                            <div className="w-full h-64 bg-secondary shadow-2xl transition duration-300 hover:scale-105 hover:shadow-white  rounded-t-[30%]"></div>
                            <div className="w-full h-64 bg-secondary shadow-2xl transition duration-300 hover:scale-105 hover:shadow-white rounded-l-[30%] rounded-tr-[30%]"></div>
                            <div className="w-full h-64 bg-secondary shadow-2xl transition duration-300 hover:scale-105 hover:shadow-white rounded-r-[30%] rounded-bl-[30%]"></div>
                            <div className="w-full h-64 bg-secondary shadow-2xl transition duration-300 hover:scale-105 hover:shadow-white  rounded-b-[30%]"></div>
                            <div className="w-full h-64 bg-secondary shadow-2xl transition duration-300 hover:scale-105 hover:shadow-white rounded-l-[30%] rounded-br-[30%]"></div>
                        </div>
                    </section>
                </div>
                <Section className="flex py-10 justify-between">
                    <h3 className="text-2xl font-extrabold uppercase tracking-tighter">
                        Travel With Us
                    </h3>
                    <div className=" flex gap-2 items-center">
                        <TextInput
                            placeholder="Send Email "
                            className="border-gray-100"
                        />
                        <PrimaryButton className="bg-secondary">
                            SEND
                        </PrimaryButton>
                    </div>
                </Section>
            </HomeLayout>
        </>
    );
}
