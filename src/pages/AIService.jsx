
import { CategoryService } from '../components/CategoryService';
import { services } from '../data';
import { useLocation } from "react-router-dom";

export default function ServicesSection() {


    const { pathname } = useLocation();

    const { image, title } = services.find(service => service.path === pathname);
    
    return (
        <section className="bg-black py-16 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-center">

                {/* LEFT IMAGE (2/3) */}
                <div className="lg:col-span-2 rounded-3xl overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT PANEL (1/3) */}
                <CategoryService />
            </div>
        </section>
    );
}