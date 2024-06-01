import Footer from "@/Components/Layout/Footer";
import Navbar from "@/Components/Layout/Navbar";
import React from "react";

export default function HomeLayout({ children }) {
    return (
        <div className="min-h-screen bg-primary font-inter flex justify-between flex-col">
            <div className="">
                <Navbar />
                <main className="pt-10">{children}</main>
            </div>
            <Footer />
        </div>
    );
}
