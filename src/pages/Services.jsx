import {services} from "../data";


export default function Services() {

    return (
        <div className="bg-slate-950 text-white min-h-screen px-6 py-24">
            <div className="max-w-7xl mx-auto text-center">

                {/* Page Heading */}
                <h1 className="text-6xl font-semibold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                    Our Services
                </h1>
                <p className="text-slate-300 mb-16">
                    We provide a wide range of services to help your business succeed online.
                </p>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-900 hover:bg-gradient-to-br hover:from-gray-950 to-gray-1000 hover:border-[0.1px] rounded-3xl p-8 shadow-lg hover:shadow-indigo-500/50 transition transform hover:-translate-y-2"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h2 className="text-2xl font-semibold text-indigo-400 mb-2">
                                {service.title}
                            </h2>
                            <p className="text-slate-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
