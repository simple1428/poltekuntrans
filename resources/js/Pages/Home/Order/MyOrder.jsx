import Section from "@/Components/Section";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function MyOrder({ booking }) {
    return (
        <>
            <Head />
            <HomeLayout>
                <Section>
                    <h3 className="text-xl font-bold border-b border-white text-center">
                        Pesanan Saya
                    </h3>
                </Section>
                <Section
                    className={
                        "bg-white rounded-lg h-96 flex flex-col gap-3 p-2"
                    }
                >
                    {booking.map((item, i) => {
                        console.log(item);
                        return (
                            <div
                                className="border w-full h-20 shadow-md flex justify-between items-center px-5"
                                key={i}
                            >
                                <div className="">
                                    <h3 className="text-lg font-bold">
                                        {item.code}
                                    </h3>
                                    <h3 className="text-lg font-semibold">
                                        {item.schedule.route.departure_city} -{" "}
                                        {item.schedule.route.arrival_city}
                                    </h3>
                                </div>
                                <Link
                                    className="bg-secondary px-2 py-1 rounded-lg text-primary hover:bg-secondary/80 "
                                    href={route("booking.show", item.id)}
                                >
                                    Lihat Pesanan
                                </Link>
                            </div>
                        );
                    })}
                </Section>
            </HomeLayout>
        </>
    );
}
