import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import logo from "../assets/logo/mustack.svg";
import { links } from "../data";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [subMenu, setSubMenu] = useState(null);

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const wrapperRef = useRef();

    // ✅ Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpenMenu(null);
                setSubMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = (index) => {
        setOpenMenu(openMenu === index ? null : index);
        setSubMenu(null);
    };

    const toggleSubMenu = (index) => {
        setSubMenu(subMenu === index ? null : index);
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-white/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
                    <img src={logo} alt="Logo" width="150" />
                </Link>

                {/* Desktop Nav */}
                <nav ref={wrapperRef} className="hidden md:flex items-center gap-8 font-medium relative">

                    {links.map((item, index) =>
                        item.children ? (
                            <div key={index} className="relative">

                                <button
                                    onClick={() => toggleMenu(index)}
                                    className="text-gray-700 hover:text-indigo-600 flex"
                                >
                                    {item.title}
                                    {openMenu === index ?
                                        <IoMdArrowDropright className="mt-0 text-3xl" /> :
                                        <IoMdArrowDropdown className="mt-0 text-3xl" />
                                    }

                                </button>

                                {/* Dropdown */}
                                {openMenu === index && (
                                    <div className="absolute top-10 left-0 bg-white shadow-lg rounded-lg py-2 w-56 z-50">

                                        {item.children.map((sub, subIndex) => (
                                            <div key={subIndex} className="relative">

                                                {sub.children ? (
                                                    <>
                                                        <button
                                                            onClick={() => toggleSubMenu(subIndex)}
                                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between"
                                                        >
                                                            {sub.title} ▶
                                                        </button>

                                                        {subMenu === subIndex && (
                                                            <div className="absolute top-0 left-full bg-white shadow-lg rounded-lg py-2 w-48">
                                                                {sub.children.map((child, i) => (
                                                                    <Link
                                                                        key={i}
                                                                        to={child.path}
                                                                        className="block px-4 py-2 hover:bg-gray-100"
                                                                        onClick={() => {
                                                                            setOpenMenu(null);
                                                                            setSubMenu(null);
                                                                        }}
                                                                    >
                                                                        {child.title}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Link
                                                        to={sub.path}
                                                        className="block px-4 py-2 hover:bg-gray-100"
                                                        onClick={() => setOpenMenu(null)}
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                )}

                                            </div>
                                        ))}

                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link

                                key={index}
                                to={item.path}
                                onClick={() => toggleMenu(null)}
                                className={`${pathname === item.path ? "text-indigo-600" : ""
                                    } text-gray-700 hover:text-indigo-600`}
                            >
                                {item.title}
                            </Link>
                        )
                    )}

                </nav>

                {/* CTA */}
                <button
                    onClick={() => navigate("/contact")}
                    className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                >
                    Contact us
                </button>

                {/* Mobile Menu */}
                <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                    <FiMenu />
                </button>
            </div>

            {/* ================= MOBILE MENU ================= */}
            {open && (
                <div
                    ref={wrapperRef}
                    className="md:hidden px-6 pb-6 space-y-4 bg-white shadow-md"
                >
                    {links.map((item, index) =>
                        item.children ? (
                            <div key={index}>
                                {/* Parent */}
                                <button
                                    onClick={() => toggleMenu(index)}
                                    className="w-full flex justify-between items-center font-medium text-gray-800"
                                >
                                    {item.title}
                                    {openMenu === index ? (
                                        <IoMdArrowDropdown className="text-2xl" />
                                    ) : (
                                        <IoMdArrowDropright className="text-2xl" />
                                    )}
                                </button>

                                {/* Dropdown */}
                                {openMenu === index && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {item.children.map((sub, subIndex) =>
                                            sub.children ? (
                                                <div key={subIndex}>
                                                    {/* Sub Parent */}
                                                    <button
                                                        onClick={() => toggleSubMenu(subIndex)}
                                                        className="w-full flex justify-between text-gray-700"
                                                    >
                                                        {sub.title}
                                                        <span>›</span>
                                                    </button>

                                                    {/* Sub Menu */}
                                                    {subMenu === subIndex && (
                                                        <div className="pl-4 mt-1 space-y-1">
                                                            {sub.children.map((child, i) => (
                                                                <Link
                                                                    key={i}
                                                                    to={child.path}
                                                                    className="block px-3 py-2 rounded-md text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition"
                                                                    onClick={() => {
                                                                        setOpen(false);
                                                                        setOpenMenu(null);
                                                                        setSubMenu(null);
                                                                    }}
                                                                >
                                                                    {child.title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <Link
                                                    key={subIndex}
                                                    to={sub.path}
                                                    className="block px-3 py-2 rounded-md text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition"
                                                    onClick={() => {
                                                        setOpen(false);
                                                        setOpenMenu(null);
                                                        setSubMenu(null);
                                                    }}
                                                >
                                                    {sub.title}
                                                </Link>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={index}
                                to={item.path}
                                className="block font-medium text-gray-800"
                                onClick={() => {
                                    setOpen(false);
                                    setOpenMenu(null);
                                    setSubMenu(null);
                                }}
                            >
                                {item.title}
                            </Link>
                        )
                    )}
                </div>
            )}
        </header>
    );
}