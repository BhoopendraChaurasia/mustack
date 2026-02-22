
import { useState } from "react";
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import logo from '../assets/logo/mustack.svg';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation();

    const links = [
        { path: '/', title: "Home" }, 
        { path: '/about', title: "About" }, 
        { path: '/services', title: "Services" }, 
        { path: '/contact', title: "Contact" }
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-white/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to={"/"} className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    <img src={logo} alt="Logo" width="150" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 font-medium">
                    {links.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={`${pathname === item.path && "text-indigo-600 transition after:absolute after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all"} relative text-gray-700 hover:text-indigo-600 transition
              after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
              after:bg-indigo-500 after:transition-all hover:after:w-full`}>
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition">
                    Contact us
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    <FiMenu />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-6 pb-6 space-y-4 bg-white/90 backdrop-blur">
                    {links.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="block text-gray-700 font-medium hover:text-indigo-600"
                            onClick={() => setOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                    <button className="w-full mt-2 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold">
                        Hire Me
                    </button>
                </div>
            )}
        </header>
    );
}
