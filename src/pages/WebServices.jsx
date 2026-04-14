import {CategoryService}  from '../components/CategoryService';


export default function ServicesSection() {
    return (
        <section className="bg-black py-16 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-center">

                {/* LEFT IMAGE (2/3) */}
                <div className="lg:col-span-2 rounded-3xl overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                        alt="Machine Learning"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT PANEL (1/3) */}
                <CategoryService />
            </div>
        </section>
    );
}