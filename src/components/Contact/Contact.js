import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import ContactForm from "./ContactForm";

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
                                                className="hover:text-indigo-400 transition-all duration-300"
                                                style={{border: 'none'}}
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
                                                href="https://www.facebook.com/thanuja.priyadarshana.14"
                                                className="text-indigo-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 border-none"
                                                aria-label="Facebook"
                                                target="_blank"
                                            >
                                                <FaFacebookF/>
                                            </a>
                                            <a
                                                href="https://wa.me/+94767274497"
                                                className="text-green-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 border-none"
                                                aria-label="WhatsApp"
                                                target="_blank"
                                            >
                                                <FaWhatsapp/>
                                            </a>
                                            <a
                                                href="https://www.instagram.com/_thanuja10_/profilecard/?igsh=MWIxZGI0aHVjNnloaQ%3D%3D"
                                                className="text-purple-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 border-none"
                                                aria-label="Instagram"
                                                target="_blank"
                                            >
                                                <FaInstagram/>
                                            </a>
                                        </div>
                                    </li>
                                </ul>


                                <div className="mt-6 text-center">
                                    <a
                                        href="mailto:thanujapriyadarshane26@gmail.com?subject=Hii%20Thanuja%2C%20Can%20you%20do%20me%20a%20favour%3F"
                                        className="text-3xl md-text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-indigo-400 transition-all duration-300"
                                    >
                                        &lt;Hire Me!/&gt;
                                    </a>
                                </div>
                            </div>


                            <div className="space-y-6 sm:col-span-1">
                                <ContactForm />
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
