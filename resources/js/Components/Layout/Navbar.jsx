import { Link, usePage } from "@inertiajs/react";
import React from "react";
import Container from "../Section";

export default function Navbar() {
    const active = "font-semibold";
    const inactive = "font-normall";
    const { url, component } = usePage();
    const { auth } = usePage().props;
    console.log(auth);
    return (
        <header className=" sticky  top-5 z-[990]">
            <div className="flex w-full justify-between container items-center  shadow-md mx-auto bg-white  px-[32px] py-4 rounded-[10px]">
                <Link
                    href={route("home.index")}
                    className="text-2xl font-semibold italic"
                >
                    <img
                        src={`${asset}images/logoheader.svg`}
                        alt="logoheader"
                        className="w-48"
                    />
                </Link>
                <div className="flex justify-evenly gap-4 items-center text-xl">
                    <Link
                        href={route("home.index")}
                        className={
                            component == "Home/Index" ? active : inactive
                        }
                    >
                        Home
                    </Link>
                    <Link
                        href={route("order.index")}
                        className={url.startsWith("/order") ? active : inactive}
                    >
                        Order
                    </Link>
                    <Link
                        href={route("about.index")}
                        className={url == "/about" ? active : inactive}
                    >
                        About
                    </Link>
                    <Link
                        href={route("contact.index")}
                        className={url == "/contact" ? active : inactive}
                    >
                        Contact
                    </Link>
                    {!auth.user ? (
                        <Link
                            href={route("login")}
                            className="bg-secondary flex items-center justify-center px-3 py-1.5 rounded-md text-white"
                        >
                            Login
                        </Link>
                    ) : (
                        <Link>Profile</Link>
                    )}
                </div>
            </div>
        </header>
    );
}
