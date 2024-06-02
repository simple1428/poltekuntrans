import { Link } from "@inertiajs/react";
import React from "react";
import Container from "../Section";

export default function Navbar() {
    const active = "font-semibold";
    const inactive = "font-normall";
    return (
        <header className=" sticky  top-5 z-[990]">
            <div className="flex w-full justify-between container items-center  shadow-md mx-auto bg-white  px-[32px] py-4 rounded-[10px]">
                <h1 className="text-2xl font-semibold ">Poltekun Trans</h1>
                <div className="flex justify-evenly gap-4 items-center text-xl">
                    <Link className={active}>Home</Link>
                    <Link className={inactive}>Order</Link>
                    <Link className={inactive}>About</Link>
                    <Link className={inactive}>Contact</Link>
                    <Link className="bg-secondary flex items-center justify-center px-3 py-1.5 rounded-md text-white">
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}
