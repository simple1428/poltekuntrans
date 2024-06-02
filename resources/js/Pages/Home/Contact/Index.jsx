import Section from "@/Components/Section";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Contact() {
    return (
        <>
            <Head title="Contact" />
            <HomeLayout>
                <div className="bg-white py-10">
                    <Section className={"flex justify-between items-center"}>
                        <div className="w-1/2 space-y-4 py-3">
                            <h3 className="font-bold text-2xl">Hubungi Kami</h3>
                            <p className="">
                                Jika Anda memiliki pertanyaan, saran, atau ingin
                                informasi lebih lanjut, jangan ragu untuk
                                menghubungi kami melalui informasi di bawah ini.
                            </p>
                            <h4 className="text-secondary">
                                Kontak Informasi:
                            </h4>
                            <ul>
                                <li>
                                    <strong>Telepon:</strong> (021) 1234-5678
                                </li>
                                <li>
                                    <strong>Email:</strong>{" "}
                                    info@poltekuntrans.com
                                </li>
                                <li>
                                    <strong>Alamat:</strong> Jl. Raya No. 123,
                                    Jakarta, Indonesia
                                </li>
                            </ul>
                            <h4 className="text-secondary">Media Sosial:</h4>
                            <ul>
                                <li>
                                    <strong>Facebook:</strong>{" "}
                                    fb.com/poltekuntrans
                                </li>
                                <li>
                                    <strong>Twitter:</strong>{" "}
                                    twitter.com/poltekuntrans
                                </li>
                                <li>
                                    <strong>Instagram:</strong>{" "}
                                    instagram.com/poltekuntrans
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            <img
                                src={`${asset}images/contact.svg`}
                                alt="contact"
                                className="w-64"
                            />
                        </div>
                    </Section>
                </div>
                <div className="bg-secondary py-5">
                    <Section className={"flex justify-between items-center"}>
                        <div className="w-full text-white text-center">
                            <h3 className="font-bold text-2xl uppercase">
                                Lokasi Kami
                            </h3>
                            <p className="">
                                Anda dapat mengunjungi kantor kami di lokasi
                                berikut:
                            </p>
                            <div className="flex justify-center mt-5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9173490478054!2d-122.08424968469293!3d37.42199997982539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e6b12d4b1f%3A0xaefa0f2e6d39d4a1!2sGoogleplex!5e0!3m2!1sen!2sid!4v1625264632924!5m2!1sen!2sid"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="w-full h-64"
                                ></iframe>
                            </div>
                        </div>
                    </Section>
                </div>
            </HomeLayout>
        </>
    );
}
