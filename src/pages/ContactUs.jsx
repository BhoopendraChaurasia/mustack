import { Link } from 'react-router-dom';

export default function ContactUs() {

    const links = [
        {
            title: 'GitHub',
            url: 'https://github.com/BhoopendraChaurasia'
        },
        {
            title: 'GitHub',
            url: '/'
        },
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/company/112393296'
        },
        {
            title: 'Twitter',
            url: '/'
        },
    ]

    return (
        <div className="bg-slate-950 text-white min-h-screen px-6 py-24">
            <div className="max-w-4xl mx-auto">

                {/* Page Heading */}
                <h1 className="text-6xl font-semibold text-center mb-8 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                    Contact Us
                </h1>
                <p className="text-center text-slate-300 mb-12">
                    Have a project in mind? Let's build something amazing together.
                    Fill out the form or reach us through our business info below.
                </p>

                {/* Contact Section */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Email</h2>
                            <p className="text-slate-300">abc@gmail.com</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Phone</h2>
                            <p className="text-slate-300">+91 8827975482</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Location</h2>
                            <p className="text-slate-300">Hyderabad, India</p>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Follow Us</h2>
                            <div className="flex gap-4">
                                {links.map(({title, url}) => <Link 
                                    key={url}
                                    to={url}
                                    className="px-4 py-2 bg-indigo-600 rounded-full hover:bg-indigo-500 transition"
                                >
                                    {title}
                                </Link>)}
                                
                                {/* <a
                                    href="#"
                                    className="px-4 py-2 bg-pink-600 rounded-full hover:bg-pink-500 transition"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="#"
                                    className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-500 transition"
                                >
                                    Twitter
                                </a> */}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-slate-800 rounded-2xl p-8 shadow-lg space-y-6">
                        <div>
                            <label className="block text-slate-300 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-indigo-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-indigo-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-1">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-indigo-400 focus:outline-none resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold hover:scale-105 transition"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}
