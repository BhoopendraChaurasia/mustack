
import { useState } from "react";
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import logo from '../assets/logo/mustack.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import AIService from '../pages/AIService';
import { services, links }from '../data';

export default function Header() {
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation();

    

   

    const [openMenu, setOpenMenu] = useState(null);
    const [subMenu, setSubMenu] = useState(null);

    const toggleMenu = (index) => {
        setOpenMenu(openMenu === index ? null : index);
        setSubMenu(null);
    };

    const toggleSubMenu = (index) => {
        setSubMenu(subMenu === index ? null : index);
    };
    const navigate = useNavigate();
    
    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-white/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link 
                    to={"/"} 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    <img src={logo} alt="Logo" width="150" 
                />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 font-medium relative">
                    {links.map((item, index) =>
                        item.children ? (
                            <div key={index} className="relative">
                                {/* Main Button */}
                                <button
                                    onClick={() => {
                                        toggleMenu(index);
                                        navigate("/services");
                                    }}
                                    className="text-gray-700 hover:text-indigo-600 transition"
                                >
                                    {item.title} ▼
                                </button>

                                {/* Dropdown */}
                                <div
                                    className={`absolute top-10 left-0 bg-white shadow-lg rounded-lg py-2 w-56 z-50 transform transition-all duration-300 ${openMenu === index
                                            ? "opacity-100 scale-100 visible"
                                            : "opacity-0 scale-95 invisible"
                                        }`}
                                >
                                    {item.children.map((sub, subIndex) => (
                                        <div key={subIndex} className="relative">
                                            {sub.children ? (
                                                <>
                                                    {/* Submenu Button */}
                                                    <button
                                                        onClick={() => toggleSubMenu(subIndex)}
                                                        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between"
                                                    >
                                                        {sub.title} ▶
                                                    </button>

                                                    {/* Submenu */}
                                                    <div
                                                        className={`absolute top-0 left-full bg-white shadow-lg rounded-lg py-2 w-48 transform transition-all duration-300 ${subMenu === subIndex
                                                                ? "opacity-100 scale-100 visible"
                                                                : "opacity-0 scale-95 invisible"
                                                            }`}
                                                    >
                                                        {sub.children.map((child, childIndex) => (
                                                            <Link
                                                                key={childIndex}
                                                                to={child.path}
                                                                className="block px-4 py-2 hover:bg-gray-100"
                                                                onClick={() => {
                                                                    setOpenMenu(null);
                                                                    setSubMenu(null);
                                                                    navigate("/ai-service")
                                                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                                                }}
                                                            >
                                                                {child.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </>
                                            ) : (
                                                <Link
                                                    to={sub.path}
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => {
                                                        setOpenMenu(null);
                                                        navigate("/ai-service")
                                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                                    }}
                                                    element={sub.AIService}
                                                >
                                                    {sub.title}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={() => {
                                    navigate("/ai-service");
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                }}
                                className={`${pathname === item.path && "text-indigo-600 after:w-full"
                                    } relative text-gray-700 hover:text-indigo-600 transition
              after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
              after:bg-indigo-500 after:transition-all hover:after:w-full`}
                            >
                                {item.title}
                            </Link>
                        )
                    )}
                </nav>
                {/* CTA */}
                <button onClick={() => {
                    navigate("/contact");
                    window.scrollTo({top: 0, behavior: "smooth" })
                }} className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition">
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
                    <button onClick={() => {
                        navigate("/contact");
                        setOpen(false);
                    }} className="w-full mt-2 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold">
                        Contact us
                    </button>
                </div>
            )}
        </header>
    );
}
