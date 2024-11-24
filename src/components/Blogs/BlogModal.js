import React, { useState } from "react";

const blogs = [
    {
        id: 1,
        title: "Introduction to Microservices Architecture",
        description: "Learn about the core principles and benefits of Microservices Architecture.",
        date: "November 20, 2024",
        image: "https://miro.medium.com/v2/resize:fit:1200/1*1hBwhZ--xEVY35z5owT1Qw.jpeg",
        link: "microservices-architecture",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "Introduction to DevOps with AWS",
        description: "Explore the integration of DevOps practices with AWS to streamline development and operations.",
        date: "October 25, 2024",
        image: "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7bsd9pw99e76jhhx5ep5.png",
        link: "devops-with-aws",
        readTime: "7 min read",
    },
    {
        id: 3,
        title: "How to Use JWT Tokens for User Authentication",
        description: "Understand the process of implementing JWT tokens for secure user authentication.",
        date: "September 15, 2024",
        image: "https://avatao.com/media/JWT-blogpost.png",
        link: "jwt-authentication",
        readTime: "6 min read",
    },
    {
        id: 4,
        title: "Exploring Terraform for Infrastructure as Code (IaC)",
        description: "Get familiar with Terraform, an essential tool for automating infrastructure management.",
        date: "August 10, 2024",
        image: "https://media.licdn.com/dms/image/D4D12AQFpZvy4vNgw0g/article-cover_image-shrink_720_1280/0/1685209134985?e=2147483647&v=beta&t=fK86QvKJQiA_bYw9sIXzsauKS0H3hCPHZjoPh2ui0lw",
        link: "terraform-iac",
        readTime: "5 min read",
    },
    {
        id: 5,
        title: "Docker Essentials for Beginners",
        description: "A beginner’s guide to mastering Docker for containerized application development.",
        date: "October 25, 2024",
        image: "https://blog.albrightlabs.com/wp-content/uploads/2023/04/albright-labs-docker-kubernetes.png",
        link: "docker-essentials",
        readTime: "7 min read",
    },
    {
        id: 6,
        title: "Reverse Proxy Script Practices for Nginx Server",
        description: "Learn how to configure reverse proxy scripts on your Nginx server.",
        date: "October 25, 2024",
        image: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
        link: "nginx-reverse-proxy",
        readTime: "7 min read",
    }
];

function BlogModal({ blog, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-lg max-w-5xl w-full h-5/6 p-6 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    ✖
                </button>

                <div className="h-full flex flex-col">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="rounded-lg w-full max-h-64 object-cover mb-4"
                    />
                    <div className="overflow-y-auto flex-grow pr-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h2>
                        <p className="text-gray-600 mb-6">{blog.description}</p>
                        <p className="text-gray-500 text-sm mb-4">
                            <strong>Published on:</strong> {blog.date}
                        </p>
                        <p className="text-gray-500 text-sm mb-4">
                            <strong>Read Time:</strong> {blog.readTime}
                        </p>

                        <div className="text-gray-700">
                            <p>
                                {/* Example large content */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                vehicula, sapien sit amet luctus facilisis, libero tortor dictum
                                ligula, ut tempor lorem enim a nulla. Quisque sed cursus erat.
                                Proin consectetur ultrices neque, ut vestibulum nulla gravida
                                sit amet. Maecenas venenatis volutpat mi, at varius turpis
                                dapibus id. Aliquam erat volutpat. Vestibulum eget est at neque
                                eleifend suscipit ac nec purus. Integer nec libero ut lacus
                                feugiat auctor. Morbi vel viverra orci.

                                {/* Example large content */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                vehicula, sapien sit amet luctus facilisis, libero tortor dictum
                                ligula, ut tempor lorem enim a nulla. Quisque sed cursus erat.
                                Proin consectetur ultrices neque, ut vestibulum nulla gravida
                                sit amet. Maecenas venenatis volutpat mi, at varius turpis
                                dapibus id. Aliquam erat volutpat. Vestibulum eget est at neque
                                eleifend suscipit ac nec purus. Integer nec libero ut lacus
                                feugiat auctor. Morbi vel viverra orci.
                            </p>
                            <p>
                                {/* Example large content */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                vehicula, sapien sit amet luctus facilisis, libero tortor dictum
                                ligula, ut tempor lorem enim a nulla. Quisque sed cursus erat.
                                Proin consectetur ultrices neque, ut vestibulum nulla gravida
                                sit amet. Maecenas venenatis volutpat mi, at varius turpis
                                dapibus id. Aliquam erat volutpat. Vestibulum eget est at neque
                                eleifend suscipit ac nec purus. Integer nec libero ut lacus
                                feugiat auctor. Morbi vel viverra orci.

                                {/* Example large content */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                vehicula, sapien sit amet luctus facilisis, libero tortor dictum
                                ligula, ut tempor lorem enim a nulla. Quisque sed cursus erat.
                                Proin consectetur ultrices neque, ut vestibulum nulla gravida
                                sit amet. Maecenas venenatis volutpat mi, at varius turpis
                                dapibus id. Aliquam erat volutpat. Vestibulum eget est at neque
                                eleifend suscipit ac nec purus. Integer nec libero ut lacus
                                feugiat auctor. Morbi vel viverra orci.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BlogSection() {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (blog) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedBlog(null);
        setIsModalOpen(false);
    };

    return (
        <section
            id="blogs"
            className="py-8 px-6 bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center"
        >
            <div className="text-center mb-12">
                <p className="text-lg md:text-xl text-gray-500">Dive into My</p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
                    Tech Blog
                </h1>
                <p className="mt-4 text-gray-500 text-lg">
                    Discover insights, tips, and tutorials on trending tech topics.
                </p>
            </div>

            <div
                className="flex overflow-x-auto space-x-6 max-w-full mx-2 scrollbar-hidden"
                style={{padding: "1rem"}}
            >
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className={`flex-none w-80 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-500 hover:scale-105 flex flex-col`}
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="rounded-t-lg w-full h-48 object-cover"
                            style={{ height: "12rem", padding: "1rem" }}
                        />
                        <div className="flex flex-col justify-between p-6 h-full">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600 mb-4 flex-grow">{blog.description}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                                <p>{blog.date}</p>
                                <p>{blog.readTime}</p>
                            </div>
                            <button
                                onClick={() => openModal(blog)}
                                className="inline-block mt-4 text-blue-500 font-semibold"
                            >
                                Read More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <BlogModal blog={selectedBlog} isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
}

export default BlogSection;
