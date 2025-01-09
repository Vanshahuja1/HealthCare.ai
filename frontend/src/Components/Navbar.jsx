import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from '../images/logo (2).png';
export const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        setColor(window.scrollY >= 100);
    };

    const location = useLocation();
    const path = location.pathname;

    window.addEventListener("scroll", changeColor);

    return (
        <div
            className={`flex justify-between items-center px-6 fixed w-full h-[90px] z-20 shadow-lg ${
                color ? " text-black" : "bg-transparent text-[#00d4ff]"
            } transition-all duration-1000`}
        >
            {/* Logo Section */}
            <div className="flex items-center">
                <img
                    src={Image}
                    alt="logo-health-care"
                    className="h-12 mr-3"
                />
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-wide hover:text-gray-300 transition duration-300"
                >
                    MED.ai
                </Link>
            </div>

            {/* Menu Items */}
            <ul
                className={`${
                    click ? "flex" : "hidden"
                } md:flex flex-col md:flex-row md:items-center md:gap-6 absolute md:static top-0 left-0 h-screen md:h-auto w-full md:w-auto bg-black md:bg-transparent text-white md:text-current md:pl-0 pl-6 transition-all duration-300`}
            >
                {[
                    { path: "/works", label: "HOW IT WORKS" },
                    { path: "/tech", label: "TECHNOLOGY" },
                    { path: "/offer", label: "OUR OFFERINGS" },
                    { path: "/about", label: "ABOUT US" },
                ].map((item) => (
                    <li key={item.path} className="md:py-0 py-4">
                        <Link
                            to={item.path}
                            className={`text-lg font-semibold hover:text-gray-400 transition duration-300 ${
                                path === item.path ? "text-blue-400" : ""
                            }`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger Icon */}
            <div className="md:hidden cursor-pointer" onClick={handleClick}>
                {click ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
        </div>
    );
};
