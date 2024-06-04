import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="bg-secondary text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <h5 className="text-lg font-bold uppercase">
                        Poltekun Trans
                    </h5>
                    <p className="text-sm">
                        © 2024 Poltekun Trans. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a
                        href="#"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        Contact
                    </a>
                </div>
                <div className="flex space-x-4">
                    <a
                        href="#"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </footer>
    );
}
