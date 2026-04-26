import { services } from "../data";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

export const CategoryService = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();



    return (
        <div className="lg:col-span-1 bg-[#0d0d0d] rounded-3xl p-6 md:p-8 text-white shadow-xl border border-white/10">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
                Services Category
            </h2>

            {/* Services List */}
            <div className="space-y-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(service.path)}
                        className={`${pathname === service.path && "border-white/10 bg-white/10"} flex items-center justify-between border border-transparent hover:border-white/10 bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 group`}
                    >

                        {/* Left */}
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-125 transition" />
                            <span className="text-gray-300 group-hover:text-white transition text-sm md:text-base">
                                {service.title}
                            </span>
                        </div>

                        {/* Arrow */}
                        <FaArrowUpRightDots className="text-green-400 text-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
                    </div>
                ))}
            </div>
        </div>
    );
};