import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Amila Abeysinghe",
        position: "Tutor - Combined Mathematics (A/L)",
        image: "https://yt3.googleusercontent.com/tq5CKUpOZ0jJ4cl9OvtZ8qlM0E-X9KNlBR0aQdGolqoGiC_p4_F_gD8nzfZ7GlJ_0CHyTy5jbA=s900-c-k-c0x00ffffff-no-rj",
        quote:
            "This service has exceeded all my expectations. The team is professional, dedicated, and extremely reliable.",
    },
    {
        id: 2,
        name: "Yeshani Tharushika",
        position: "Executive Sales and Marketing (IIHE)",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        quote:
            "Highly recommended! Their attention to detail and commitment to quality are truly outstanding.",
    },
    {
        id: 3,
        name: "Michael Johnson",
        position: "Freelance Developer",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        quote:
            "Absolutely incredible experience! The team went above and beyond to ensure our success.",
    },
];

function TestimonialSection() {
    return (
        <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-white mb-6 relative inline-block">
                        What My Clients Say
                        <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    </h2>
                    <p className="text-white text-xl opacity-80">
                        Discover why clients love working with me.
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="relative group"
                        >
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/10">
                                <Quote className="text-white/20 w-12 h-12 absolute -top-6 -left-6" />
                                <div className="flex flex-col items-center text-center mb-6">
                                    <div className="relative mb-4">
                                        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/20 transform transition-transform duration-300 group-hover:scale-110">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm text-white/60">
                                            {testimonial.position}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-white/80 text-lg leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;