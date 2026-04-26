import React, { useState } from "react";
import mustack from "../assets/images/slider/mustack.png";
import myclnq from "../assets/images/slider/myclnq.png";
import prologify from "../assets/images/slider/prologify.png";
import jurisverse from "../assets/images/slider/jurisverse.png";
import trigoelectric from "../assets/images/slider/trigoelectric.png";
const projectsData = [
    { id: 1, title: "Portfolio Website", category: "web", image: mustack },
    { id: 2, title: "E-commerce App", category: "app", image: myclnq },
    { id: 3, title: "iOS Fitness Tracker", category: "ios", image: jurisverse },
    { id: 4, title: "Blog Platform", category: "web", image: trigoelectric },
    { id: 5, title: "Chat Application", category: "app", image: prologify },
];

const categories = ["all", "web", "app", "ios"];

export default function Projects() {
    const [active, setActive] = useState("all");

    const filteredProjects =
        active === "all"
            ? projectsData
            : projectsData.filter((p) => p.category === active);

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            {/* Title */}
            <h1 className="text-5xl font-semibold text-pink-400 text-center my-10">
                My Projects
            </h1>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 my-8 flex-wrap my-15">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-5 py-2 rounded-full capitalize transition ${active === cat
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 border hover:bg-blue-100"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {project.title}
                        </h2>
                        <p className="text-gray-500 capitalize">
                            {project.category}
                        </p>

                        <img src={project.image} alt={project.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}