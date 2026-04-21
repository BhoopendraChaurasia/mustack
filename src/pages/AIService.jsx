
import { CategoryService } from '../components/CategoryService';
import { services, accordionsAI } from '../data';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import Accordion from '../components/Accordion'

export default function ServicesSection() {

    const { pathname } = useLocation();

    const { image, title } = services.find(service => service.path === pathname);

      
    return (
        <section className="bg-black py-16 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-center">

                {/* LEFT IMAGE (2/3) */}

                <div className="lg:col-span-2 relative rounded-3xl">

                    {/* Section 1: Image */}
                    <div className="w-full h-full">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                        {/* <div className="mt-4"> */}
                        <div className="w-full">

                            {/* Heading */}
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight text-white">
                                Our Capabilities in AI <br />
                                <span className="text-lime-400 font-semibold">Development</span>
                            </h2>

                            {/* Description */}
                            <p className="mt-4 text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed">
                                Alphawizz, one of India's largest AI solution providers, has expert engineers that help automate businesses using AI, machine learning, and proprietary ideas.
                            </p>

                            {/* Accordion */}

                            <Accordion items={accordionsAI} />
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                {/* RIGHT PANEL (1/3) */}
                <CategoryService />
            </div>


        </section>
    );
}