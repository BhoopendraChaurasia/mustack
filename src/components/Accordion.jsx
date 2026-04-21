import { useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export default function Accordion({items}) {
    
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return <div className="space-y-4 sm:mt-15">
        {items.length > 0 && items.map((item, index) => (
            <div
                key={index}
                className="border border-gray-700 hover:border-gray-100  rounded-xl overflow-hidden"
            >
                {/* Header */}
                <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left bg-black/40 hover:bg-black/60 transition"
                >
                    <span className="text-white font-medium">
                        {item.title}
                    </span>

                    <span className="text-xl text-lime-400 hover:">
                        {openIndex === index ? <CiCircleMinus /> : <CiCirclePlus />}
                    </span>
                </button>

                {/* Content */}
                <div
                    className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index
                        ? "max-h-40 py-4 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <p className="text-gray-300 text-sm">
                        {item.content}
                    </p>
                </div>
            </div>
        ))}
    </div>
}