import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PortfolioSlider from "../components/PortfolioSlider";


export default function Home() {

    const services = [
        {
            title: "Web Development",
            desc: "Fast, scalable, and modern websites built with the latest technologies."
        },
        {
            title: "UI / UX Design",
            desc: "Beautiful, intuitive designs focused on user experience and conversions."
        },
        {
            title: "E-Commerce Solutions",
            desc: "High-performance online stores with secure payment integration."
        }
    ];

    const tagsLines = [
        {
            style: "from- red - 400 to - pink - 500",
            title: "We don’t just build websites — we create digital experiences that convert."
        },
        {
            style: "from-green-400 to-blue-500", 
            title: "We design and develop modern, scalable solutions for your business growth."
        },
        {
            style: "from-red-400 to-cyan-500", 
            title: "From idea to launch, we craft powerful web and AI-driven applications."
        },
        {
            style: "from-megenta-400 to-pink-500",
            title: "We build high-performance digital products that users love."
        },
        {
            style: "from-blue-400 to-pink-500",
            title: "Transforming your vision into smart, technology-driven solutions."
        }
    ];

    const topicsList = [
        "Web Development",
        "AI Development",
        "Backend Development",
        "API Development"
    ];

    const shuffleArray = (arr) => {
        return [...arr].sort(() => Math.random() - 0.5);
    }

    const [topics, setTopics] = useState(shuffleArray(topicsList));
    const [topicIndex, setTopicIndex] = useState(0);
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = topics[topicIndex];

        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + currentWord[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100); // typing speed

            return () => clearTimeout(timeout);
        } else {
            const delay = setTimeout(() => {
                setText("");
                setCharIndex(0);

                if (topicIndex < topics.length - 1) {
                    setTopicIndex((prev) => prev + 1);
                } else {
                    // reshuffle after all words
                    setTopics(shuffleArray(topicsList));
                    setTopicIndex(0);
                }
            }, 1000);

            return () => clearTimeout(delay);
        }
    }, [charIndex, topicIndex, topics]);

    const [tagIndex, setTagIndex] = useState(0);

    useEffect(() => {
        
        const interval = setInterval(() => {
            setTagIndex(prev => {
                if(prev<tagsLines.length-1) return prev+1;
                else return 0;
            });
        }, 3000);
        
        return () => clearInterval(interval);
    }, [tagsLines.length]);


    const navigate = useNavigate();

    return (
        <div className="bg-slate-950 text-white overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center px-6">
                {/* Glow background */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -right-32 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl" />

                {/* <div className="relative max-w-5xl text-center"> */}
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                            We Build{" "}
                            <span className="bg-gradient-to-r from-indigo-400 to-pink-700 bg-clip-text text-transparent">
                                Next-Gen Tech
                            </span>
                            <br />
                            <span className="text-green-400">{text}</span>
                            <br />
                            That Powers Your Business Growth
                        </h3>

                        <p className="mt-6 text-lg text-slate-300">
                            We deliver on time customer requirement and exact time demand of client.
                        </p>

                        <div className="mt-10 flex justify-center items-center gap-6 flex-wrap">
                            <button
                                onClick={() => navigate("/contact")}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold hover:scale-105 transition"
                            >
                                Contact us
                            </button>

                            <button
                                onClick={() => navigate("/services")}
                                className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition"
                            >
                                Explore Our Services
                            </button>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br hover:border-emerald-500/40 from-gray-800 to-gray-900 hover:bg-gradient-to-br hover:from-gray-950 to-gray-1000 rounded-3xl py-40 p-10 shadow-2xl hover:border-[0.1px]">
                        <BiSolidQuoteAltLeft size={30} className="text-gray-500" />
                        <p className={`text-2xl font-semibold ${tagsLines[tagIndex].style}`}>
                            {tagsLines[tagIndex].title}
                        </p>
                        <div className="flex justify-end">
                            <BiSolidQuoteAltRight size={30} className="text-gray-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-6xl font-semibold">Portfolio</h2>
                    <p className="mt-4 text-slate-400 text-5xl md:text-5xl text-white">
                        We have developed more <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">scalable and optimized project</span> with our goal oriented
                    </p>
                        <PortfolioSlider />                        
                </div>
            </section>

            {/* About us */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold">
                            About us
                        </h2>
                        <p className="mt-6 text-5xl md:text-5xl text-white/90">
                            We focus on current creative idea for <br />
                            <span className="font-bold bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                                business of client, performance, and long-term success
                            </span><br/> for your business.
                        </p>

                        <ul className="mt-8 space-y-4 text-slate-300">
                            <li> High-performance & fast loading</li>
                            <li> Modern & responsive UI</li>
                            <li> Secure and scalable solutions</li>
                            <li> SEO-friendly development</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-600 to-pink-600 rounded-3xl p-10 shadow-2xl">
                        <p className="text-2xl font-semibold">
                            “We don’t just build websites —
                            we create digital experiences that convert.”
                        </p>
                    </div>
                </div>
            </section>
            {/* WHY US */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold">
                            Why Choose Our Team?
                        </h2>
                        <p className="mt-6 text-slate-400">
                            We focus on quality, performance, and long-term success for your business.
                        </p>

                        <ul className="mt-8 space-y-4 text-slate-300">
                            <li> High-performance & fast loading</li>
                            <li> Modern & responsive UI</li>
                            <li> Secure and scalable solutions</li>
                            <li> SEO-friendly development</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-600 to-pink-600 rounded-3xl p-10 shadow-2xl">
                        <p className="text-2xl font-semibold">
                            “We don’t just build websites —
                            we create digital experiences that convert.”
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-indigo-600 to-pink-600 text-center">
                <h2 className="text-4xl font-bold">
                    Ready to Start Your Project?
                </h2>
                <p className="mt-6 text-white/90">
                    Let’s build something amazing together.
                </p>

                <button className="mt-10 px-10 py-4 rounded-full bg-white text-indigo-600 font-semibold hover:scale-105 transition">
                    Contact Us
                </button>
            </section>
        </div>
    );
}
