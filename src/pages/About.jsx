import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
    const teams = [
        {
            name: "Ravi Teja",
            role: "Project Manager & Lead Developer",
            bio: "Passionate about building fast, scalable web applications with React and modern tools.",
            img: "https://i.pravatar.cc/150?img=12",
        },
        {
            name: "Aarti Sharma",
            role: "UI/UX Designer",
            bio: "Designs intuitive and beautiful user experiences focused on conversion.",
            img: "https://i.pravatar.cc/150?img=32",
        },
        {
            name: "Rahul Verma",
            role: "Backend Engineer",
            bio: "Expert in secure and scalable backend solutions with Node.js and databases.",
            img: "https://i.pravatar.cc/150?img=47",
        },
    ];

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

                <section className="mt-24 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
                    <ul className="max-w-xl mx-auto space-y-4 text-slate-300 list-disc list-inside text-left md:text-center md:list-none md:flex md:justify-center md:gap-12">
                        {[
                            "Quality & Excellence",
                            "Customer-Centric Approach",
                            "Innovation & Creativity",
                            "Transparency & Integrity",
                        ].map((value) => (
                            <li
                                key={value}
                                className="before:content-['▹'] before:text-indigo-500 before:mr-2"
                            >
                                {value}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}
