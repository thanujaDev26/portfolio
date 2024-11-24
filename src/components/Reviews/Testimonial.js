import React from "react";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO at TechCorp",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        quote:
            "This service has exceeded all my expectations. The team is professional, dedicated, and extremely reliable.",
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "CTO at Innovate Ltd",
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
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 text-lg mb-12">
                    Discover why our clients love working with us.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
