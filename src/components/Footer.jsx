import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaHeart,
} from "react-icons/fa";

import logo from "../assets/logo/mustack.svg";
import { links, socialLinks } from "../data.js";

export default function Footer() {
    return (
        <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-slate-950 text-gray-300">

            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

                {/* Top Section */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2">

                    {/* Brand */}
                    <div>
                        <Link
                            to="/"
                            className="inline-block group"
                        >
                            <img
                                src={logo}
                                alt="MuStack Logo"
                                className="w-44 transition duration-500 group-hover:scale-105"
                            />
                        </Link>

                        <p className="mt-6 leading-relaxed text-slate-400">
                            We craft modern digital products with
                            premium design, scalable architecture,
                            and lightning-fast performance.
                        </p>

                        {/* Newsletter */}
                        <div className="mt-8">
                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                                Stay Updated
                            </h4>

                            <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none"
                                />

                                <button className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-pink-500 px-5 transition hover:scale-105">
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="ml-20">
                        <h3 className="mb-6 text-xl  font-bold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">
                            {links
                                .filter(({ path }) => path !== "/services")
                                .map(({ title, path }) => (
                                    <li key={path}>
                                        <Link
                                            to={path}
                                            className="group flex items-center gap-2 text-slate-400 transition hover:text-white"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 opacity-0 transition group-hover:opacity-100"></span>

                                            <span className="group-hover:translate-x-1 transition">
                                                {title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="mr-10">
                        <h3 className="mb-6 text-xl font-bold text-white">
                            Services
                        </h3>

                        <ul className="space-y-4">
                            {links
                                .filter(({ title }) => title === "Services")
                                .flatMap(({ children }) => children)
                                .map(({ title, path }) => (
                                    <li key={path}>
                                        <Link
                                            to={path}
                                            className="group flex items-center gap-2 text-slate-400 transition hover:text-white"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-pink-400 opacity-0 transition group-hover:opacity-100"></span>

                                            <span className="group-hover:translate-x-1 transition">
                                                {title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* Social */}
            
                    <div>
                        <h3 className="mb-6 text-xl font-bold text-white">
                            Connect With Us
                        </h3>

                        <p className="mb-6 text-slate-400 leading-relaxed">
                            Follow us on social platforms and stay connected
                            with our latest updates and projects.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map(
                                ({ Icon, link, label }, index) => (
                                    <a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/20"
                                    >
                                        {/* Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-pink-500/0 to-cyan-500/0 opacity-0 transition duration-500 group-hover:opacity-100"></div>

                                        <Icon className="relative z-10 text-2xl transition duration-300 group-hover:scale-125 group-hover:text-white" />
                                    </a>
                                )
                            )}
                        </div>

                        {/* Contact Card */}
                        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 p-5 backdrop-blur-xl">
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ready to launch your next big project?
                                Let’s create something extraordinary together 🚀
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">

                    <p className="flex items-center gap-2">
                        © {new Date().getFullYear()} MuStack.
                        Made with
                        <FaHeart className="text-pink-500 animate-pulse" />
                        in India
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            to="/privacy-policy"
                            className="transition hover:text-indigo-400"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/terms"
                            className="transition hover:text-indigo-400"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}