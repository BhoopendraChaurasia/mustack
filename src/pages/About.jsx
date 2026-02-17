export default function About() {
    return (
        <main className="bg-slate-950 text-white min-h-screen px-6 py-24">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                    About Us
                </h1>

                <section className="space-y-8 text-center text-slate-300">
                    <p className="text-lg leading-relaxed">
                        At <strong>Bhoopendra Web Solutions</strong>, we’re passionate about crafting beautiful,
                        performant websites that help businesses thrive online.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Founded by a team of dedicated developers and designers, our mission is to empower
                        your brand through cutting-edge technology and creative design.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Whether you need a sleek portfolio, a robust e-commerce platform, or a custom web app,
                        we’ve got you covered from start to finish.
                    </p>
                </section>

                <section className="mt-20">
                    <h2 className="text-5xl mb-20 mb-6 text-center">
                        Out Dedicated Team
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                name: "Bhoopendra Chaurasia",
                                role: "Founder & Lead Developer",
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
                        ].map(({ name, role, bio, img }) => (
                            <div
                                key={name}
                                className="bg-slate-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-indigo-300/50 transition hover:p-5"
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
