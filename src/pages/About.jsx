import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { teams} from '../data';


export default function About() {
    
    return (
        <main className="bg-slate-950 text-white min-h-screen px-6 py-24">
            <div className="max-w-8xl mx-auto">

                <h1 className="text-6xl mb-7 font-semibold text-center bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                    About Us
                </h1>


                <section className="space-y-2 text-slate-300">

                    <div className="max-w-7xl mx-auto px-6 py-20 
                grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT SIDE */}
                        <div className="max-w-xl">

                            <h2 className="text-4xl md:text-5xl font-bold 
                   bg-gradient-to-r from-white to-gray-400 
                   bg-clip-text text-transparent">
                                Why Choose Our Team?
                            </h2>

                            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                                We build high-performance digital products focused on scalability,
                                reliability, and long-term business growth — engineered to perform
                                flawlessly at every stage.
                            </p>

                            <ul className="mt-10 space-y-5">
                                {[
                                    "High-performance & lightning-fast loading",
                                    "Modern, responsive & user-focused UI",
                                    "Secure and scalable architecture",
                                    "SEO-optimized development standards",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-4 p-5 rounded-2xl 
                     bg-gradient-to-br from-gray-900/80 to-gray-800/80
                     border border-gray-800
                     hover:border-emerald-500/40
                     hover:shadow-lg hover:shadow-emerald-500/10
                     transition-all duration-300"
                                    >
                                        <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" size={20} />
                                        <span className="text-slate-200">{item}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* RIGHT SIDE - QUOTE CARD */}
                        <div className="relative group">

                            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl opacity-0 
                    group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

                            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800
                    border border-gray-800 
                    group-hover:border-emerald-500/40
                    rounded-3xl p-12 shadow-2xl 
                    flex flex-col justify-between min-h-[320px]
                    transition-all duration-300">

                                <BiSolidQuoteAltLeft size={30} className="text-gray-500" />

                                <p className="text-2xl md:text-3xl font-semibold text-white 
                    leading-relaxed my-8">
                                    We don’t just build websites —
                                    <br />
                                    we create digital experiences that convert.
                                </p>

                                <div className="flex justify-end">
                                    <BiSolidQuoteAltRight size={30} className="text-gray-500" />
                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                <section className="mt-20">
                    <h2 className="text-5xl mb-30 mb-6 text-center">
                        Out Dedicated Team
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {teams.map(({ name, role, bio, img }) => (
                            <div
                                key={name}
                                className="bg-gradient-to-r from-gray-900 to-gray-850 hover:border-[0.1px] hover:bg-gradient-to-br hover:from-gray-950 to-gray-1000 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-indigo-300/50 transition hover:p-5"
                            >
                                <img
                                    src={img}
                                    alt={name}
                                    className="w-28 h-28 rounded-full object-cover mb-4"
                                    loading="lazy"
                                />
                                <h3 className="text-xl font-semibold text-indigo-400">{name}</h3>
                                <p className="text-sm text-slate-400 italic mb-2">{role}</p>
                                <p className="text-slate-300">{bio}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="relative mt-36 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 px-6 py-20 backdrop-blur-2xl">

                    {/* Background Glow */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl"></div>
                    </div>

                    <div className="relative z-10">

                        {/* Heading */}
                        <div className="text-center">
                            <span className="inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-2 text-sm font-medium tracking-widest text-indigo-300 uppercase">
                                Our Philosophy
                            </span>

                            <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                Our Core Values
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
                                These values define our culture, guide our decisions,
                                and shape every digital experience we create.
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                            {[
                                {
                                    title: "Quality & Excellence",
                                    icon: "✨",
                                    desc: "We deliver polished products with exceptional attention to detail.",
                                },
                                {
                                    title: "Customer First",
                                    icon: "💙",
                                    desc: "Your success is our priority in every project we build.",
                                },
                                {
                                    title: "Innovation & Creativity",
                                    icon: "🚀",
                                    desc: "We combine technology and creativity to craft unique experiences.",
                                },
                                {
                                    title: "Transparency & Integrity",
                                    icon: "🔒",
                                    desc: "Honest communication and trust are at the heart of our work.",
                                },
                            ].map(({ title, icon, desc }) => (
                                <div
                                    key={title}
                                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/20"
                                >

                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-pink-500/0 to-cyan-500/0 opacity-0 transition duration-500 group-hover:opacity-100"></div>

                                    {/* Glow */}
                                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl"></div>

                                    <div className="relative z-10">

                                        {/* Icon */}
                                        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-500 to-pink-500 text-4xl shadow-lg shadow-indigo-500/30">
                                            {icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-8 text-2xl font-bold text-white">
                                            {title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-4 leading-relaxed text-slate-400">
                                            {desc}
                                        </p>

                                        {/* Bottom Line */}
                                        <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-500 group-hover:w-28"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
