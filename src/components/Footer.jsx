import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../assets/logo/mustack.svg';

export default function Footer() {
    return (
        <footer className="relative mt-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300">

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

                {/* Brand */}
                <div>
                    <Link to={"/"} className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        <img src={logo} alt="logo not found" />
                    </Link>
                    <p className="mt-4 text-gray-250 leading-relaxed">
                        We are Developing and Building modern, fast and beautiful web experiences and clean design principles.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        {["Home", "About", "Projects", "Gallery", "Contact"].map(
                            (item) => (
                                <li key={item}>
                                    <Link
                                        to={`#/${item.toLowerCase()}`}
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                        className="hover:text-indigo-400 transition"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Connect with me
                    </h3>
                    <div className="flex gap-4">
                        {[
                            { Icon: FaGithub, link: "https://github.com/bhoopendrachaurasia" },
                            { Icon: FaLinkedin, link: "#" },
                            { Icon: FaTwitter, link: "#" },
                        ].map(({ Icon, link }, i) => (
                            <a
                                key={i}
                                href={link}
                                target="_blank"
                                className="p-3 rounded-full bg-white/10 hover:bg-indigo-500 hover:scale-110 transition transform"
                            >
                                <Icon className="text-xl" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 text-center py-6 text-sm text-gray-400">
                Copyright © {new Date().getFullYear()} {" | All Rights Reserved | "}
                <Link to="#">Privacy Policy</Link>
            </div>
        </footer>
    );
}
