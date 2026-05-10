import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaMapPin, FaPhone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoSparkles as Sparkles } from "react-icons/io5";

import { socialLinks, getInTouch } from "../data";

export default function ContactUs() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
            {/* Background Glow Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/30 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

                {/* Heading */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 mb-6 backdrop-blur-md">
                        <Sparkles size={18} />
                        Let's Connect
                    </div>

                    <h1 className="text-5xl font-semibold md:text-7xl font-black leading-tight bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                        Contact Us
                    </h1>

                    <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Have an idea, startup, or project in mind? We create
                        beautiful digital experiences that stand out.
                        Let’s build something incredible together.
                    </p>
                </div>

                {/* Main Section */}
                <div className="grid lg:grid-cols-2 gap-10 items-stretch">

                    {/* Left Side */}
                    <div className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-8">
                                Get In Touch
                            </h2>

                            <div className="space-y-6">
                                {getInTouch.map(({ Icon, title, value }, index) => (
                                    <div
                                        key={value}
                                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/20"
                                    >
                                        {/* Gradient Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-pink-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                        {/* Animated Blur Circle */}
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-pink-500/20 transition duration-500"></div>

                                        <div className="relative z-10 flex items-center gap-5">

                                            {/* Icon */}
                                            <div className="relative">
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 blur-md opacity-40 group-hover:opacity-80 transition"></div>

                                                <div className="relative p-5 rounded-2xl bg-slate-900 border border-white/10 group-hover:scale-110 transition duration-300">
                                                    <Icon
                                                        size={26}
                                                        className={`${index === 0
                                                                ? "text-pink-400"
                                                                : index === 1
                                                                    ? "text-indigo-400"
                                                                    : "text-cyan-400"
                                                            }`}
                                                    />
                                                </div>
                                            </div>

                                            {/* Text */}
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white mb-1 tracking-wide">
                                                    {title}
                                                </h3>

                                                <p className="text-slate-400 group-hover:text-slate-200 transition">
                                                    {value}
                                                </p>
                                            </div>

                                            {/* Arrow */}
                                            <div className="opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center">
                                                    →
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-12">
                                <h3 className="text-xl font-semibold mb-5">
                                    Follow Us
                                </h3>

                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map(({ Icon, label, link }, index) => (
                                        <Link
                                            key={index}
                                            to={link}
                                            target="_blank"
                                            className="group flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 transition-all duration-300 hover:scale-105"
                                        >
                                            {Icon && <Icon size={18} />}
                                            <span>{label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Card */}
                            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-white/10">
                                <p className="text-slate-300 leading-relaxed">
                                    We usually respond within{" "}
                                    <span className="font-bold text-white">
                                        24 hours
                                    </span>.
                                    Let’s discuss your next big idea 🚀
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10"></div>

                        <form className="relative z-10 p-8 md:p-10 space-y-6">

                            <div>
                                <label className="block mb-2 text-slate-300 font-medium">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-900/70 border border-slate-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-slate-300 font-medium">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-900/70 border border-slate-700 focus:border-pink-400 focus:ring-2 focus:ring-pink-500/30 outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-slate-300 font-medium">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Project Discussion"
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-900/70 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-slate-300 font-medium">
                                    Message
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Tell us about your project..."
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-900/70 border border-slate-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 outline-none resize-none transition"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-indigo-500/20"
                            >
                                Send Message
                                <IoIosSend
                                    size={20}
                                    className="group-hover:translate-x-1 transition"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}