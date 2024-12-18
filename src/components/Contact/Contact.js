import { FaLinkedin, FaGithub,FaInstagram,FaFacebook, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function ContactMe() {
    return (
        <section
    id="contact"
    className="flex flex-col items-center justify-center bg-black text-white py-12"
>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Section: Contact Details */}
            <div className="text-center md:text-left">
                <p className="text-lg text-green-300 uppercase tracking-wide mb-4">
                    Contact Me
                </p>
                <h1 className="text-5xl font-extrabold tracking-tight mb-6">
                    Let's create something <br /> amazing together
                </h1>

                {/* Get In Touch Button */}
                <a
                    href="mailto:thanujapriyadarshane26@gmail.com"
                    className="inline-block bg-green-400 hover:bg-green-500 text-black font-semibold rounded-full px-8 py-3 text-lg transition-transform duration-300 transform hover:scale-110"
                >
                    Get In Touch
                </a>

                {/* Social Media Links */}
                <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-8">
                    {/* LinkedIn */}
                    <FaLinkedin
                        className="w-8 h-8 cursor-pointer neon-icon transition-all duration-300 transform hover:scale-125 hover:text-[#0077B5]"
                        onClick={() => window.open("https://www.linkedin.com/in/thanuja-priyadarshane/", "_blank")}
                    />

                    {/* GitHub */}
                    <FaGithub
                        className="w-8 h-8 cursor-pointer neon-icon transition-all duration-300 transform hover:scale-125 hover:text-purple-600"
                        onClick={() => window.open("https://github.com/thanujaDev26", "_blank")}
                    />

                    {/* Instagram */}
                    <FaInstagram
                        className="w-8 h-8 cursor-pointer neon-icon transition-all duration-300 transform hover:scale-125 hover:text-[#E4405F]"
                        onClick={() => window.open("https://www.instagram.com/_thanuja10_/profilecard/?igsh=MWIxZGI0aHVjNnloaQ%3D%3D", "_blank")}
                    />

                    {/* Facebook */}
                    <FaFacebook
                        className="w-8 h-8 cursor-pointer neon-icon transition-all duration-300 transform hover:scale-125 hover:text-[#1877F2]"
                        onClick={() => window.open("https://www.facebook.com/thanuja.priyadarshana.14", "_blank")}
                    />

                    {/* WhatsApp */}
                    <FaWhatsapp
                        className="w-8 h-8 cursor-pointer neon-icon transition-all duration-300 transform hover:scale-125 hover:text-[#25D366]"
                        onClick={() => window.open("https://wa.me/94767274497", "_blank")}
                    />
                </div>
            </div>

            {/* Right Section: Contact Form */}
            <div>
                <ContactForm />
            </div>
        </div>
    </div>
</section>

    );
}
