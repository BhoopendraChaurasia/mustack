
import {services} from '../data';
import { FaArrowUpRightDots } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const CategoryService = () => {
    const navigate = useNavigate();

    return (
        <div className="lg:col-span-1 bg-[#0d0d0d] rounded-3xl p-8 text-white shadow-xl">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Services Category
            </h2>

            {/* Services List */}
            <div className="space-y-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between border-b border-gray-800 pb-4 group cursor-pointer hover:bg-white/5 px-2 rounded-lg transition"
                    >

                        {/* Left Text */}
                        <div onClick={() => navigate(service.path)} className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="text-gray-300 group-hover:text-white transition">
                                {service.title}
                            </span>
                        </div>

                        {/* Arrow */}
                        <FaArrowUpRightDots className="text-green-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
                    </div>
                ))}
            </div>

        </div>
    );
}