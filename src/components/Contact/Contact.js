import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function ContactMe() {
    return (
        <section id="contact">
            <form className="bg-white py-12 px-6 sm:px-10 lg:px-18">
                <div className="space-y-12 max-w-full sm:max-w-7xl mx-auto">
                    <div className="pb-12">
                        <h2 className="text-5xl font-extrabold text-black text-center tracking-tight">
                            Contact Me
                        </h2>
                        <p className="mt-6 text-lg text-black text-center max-w-3xl mx-auto font-light leading-relaxed">
                            Feel free to reach out to me with any inquiries or messages.
                            <span
                                className="block mt-4 text-gray-600 hover:text-black transition-all duration-300">
        I look forward to connecting with you!
    </span>
                        </p>


                        <div
                            className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">

                            <div
                                className="space-y-6 sm:col-span-1 border border-gray-800 rounded-3xl p-8 bg-gradient-to-br
    from-gray-800 via-gray-900 to-black shadow-xl shadow-gray-900/60">
                                <h3 className="text-3xl font-extrabold text-white tracking-wide uppercase">
                                    Contact card
                                </h3>
                                <p className="text-lg text-gray-400">Feel free to reach out anytime.</p>

                                <ul className="space-y-6">
                                    <li>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                                            Name
                                        </p>
                                        <p className="text-xl font-semibold text-white hover:text-indigo-400 transition-all duration-300">
                                            Thanuja Priyadarshane
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                                            Address
                                        </p>
                                        <p className="text-xl font-semibold text-white hover:text-indigo-400 transition-all duration-300">
                                            Maharagama, Colombo
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                                            Email
                                        </p>
                                        <p className="text-xl font-semibold text-white">
                                            <a
                                                href="mailto:thanujapriyadarshane26@gmail.com"
                                                className="hover:text-indigo-400 transition-all duration-300" style={{border: 'none'}}
                                            >
                                                thanujapriyadarshane26@gmail.com
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                                            Contact
                                        </p>
                                        <p className="text-xl font-semibold text-white hover:text-indigo-400 transition-all duration-300">
                                            +94 76 7274 497
                                        </p>
                                    </li>
                                    <li>
                                        <div className="flex justify-center gap-8 mt-4 text-4xl">
                                            <a
                                                href="#"
                                                className="text-indigo-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 border-none"
                                                aria-label="Facebook"
                                            >
                                                <FaFacebookF/>
                                            </a>
                                            <a
                                                href="https://wa.me/+94767274497"
                                                className="text-green-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 border-none"
                                                aria-label="WhatsApp"
                                            >
                                                <FaWhatsapp/>
                                            </a>
                                            <a
                                                href="#"
                                                className="text-purple-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 border-none"
                                                aria-label="Instagram"
                                            >
                                                <FaInstagram/>
                                            </a>
                                        </div>


                                    </li>
                                </ul>
                            </div>


                            <div className="space-y-6 sm:col-span-1">
                                <div>
                                    <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-lg">
                                        &lt;Leave a Message/&gt;
                                    </h3>
                                    <p className="mt-2 text-lg font-medium bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse tracking-wide">
                                        I'd love to hear from you!
                                    </p>
                                </div>


                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="username" className="block text-sm font-medium text-white">Your
                                            Name</label>
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            className="block w-full rounded-lg border-2 border-gray-600 bg-white py-3 px-4 text-gray-800 placeholder-gray-400 shadow-xl focus:ring-2 focus:ring-black-500 sm:text-sm"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email"
                                               className="block text-sm font-medium text-white">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="block w-full rounded-lg border-2 border-gray-600 bg-white py-3 px-4 text-gray-800 placeholder-gray-400 shadow-xl focus:ring-2 focus:ring-black-500 sm:text-sm"
                                            placeholder="Your Email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message"
                                               className="block text-sm font-medium text-white">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="block w-full max-h-32 rounded-lg border-2 border-gray-600 bg-white py-3 px-4 text-gray-800 placeholder-gray-400 shadow-xl focus:ring-2 focus:ring-black-500 sm:text-sm"
                                            placeholder="Your Message"
                                        />
                                    </div>


                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="rounded-full border-2 border-black bg-transparent py-3 px-5 text-black font-semibold hover:bg-black hover:text-white hover:border-transparent transition-all"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="flex justify-center items-center sm:col-span-1"
                            >
                                <img
                                    src={require("../../asserts/images/removebg.png")}
                                    alt="Your Photo"
                                    className="w-full h-full object-cover rounded-xl transition-all bg-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}