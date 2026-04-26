
import { CategoryService } from '../components/CategoryService';
import { services, accordionsAI } from '../data';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import Accordion from '../components/Accordion'

export default function ServicesSection() {

    const { pathname } = useLocation();

    const { image, title, accordion } = services.find(service => service.path === pathname);


    return (
        <section className="bg-black py-16 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-start">

                {/* LEFT SECTION (2/3) */}
                <div className="lg:col-span-2 space-y-6">

                    {/* IMAGE */}
                    <div className="rounded-3xl overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight text-white">
                            Our Capabilities in AI <br />
                            <span className="text-lime-400 font-semibold">
                                Development
                            </span>
                        </h2>

                        <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed">
                            We are moving to new era with AI development, blockchain, crypto and Cyber Security and Cyber Attacks
                        </p>

                        {/* ACCORDION */}
                        <div className="mt-6">
                            <Accordion items={accordion} />
                        </div>
                    </div>

                </div>

                {/* RIGHT PANEL (1/3) */}
                <div>
                    <CategoryService />
                </div>

            </div>
        </section>
    );
}