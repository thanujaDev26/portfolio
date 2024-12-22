import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import "./Blogs.css";

function BlogSection() {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Introduction to Microservices Architecture",
            description: "Learn about the core principles and benefits of Microservices Architecture.",
            date: "November 20, 2024",
            image: "https://miro.medium.com/v2/resize:fit:1200/1*1hBwhZ--xEVY35z5owT1Qw.jpeg",
            link: "microservices-architecture",
            readTime: "10 min read",
        },
        {
            id: 2,
            title: "Build a CI/CD Pipeline using GitHub Actions",
            description: "Let's build a CI/CD Pipeline using GitHub Actions.",
            date: "December 22, 2024",
            image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            link: "ci-cd-github-actions",
            readTime: "30 min read",
        },
        
    ]);


    const [selectedBlog, setSelectedBlog] = useState(null); // To hold blog details
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
    const [isLoading, setIsLoading] = useState(false); // Loading spinner during fetch
    const navigate = useNavigate();

    // Open modal and fetch blog details from the backend
    const openModal = async (id) => {
        navigate(`blogs/${id}`);
        setIsLoading(true);
        setIsModalOpen(true);

        try {
            const response = await axios.get(`https://api.imthanuja.com/blogs/${id}`);
            const blog = response.data.data.blog; // Adjust structure if needed
            setSelectedBlog(blog);
        } catch (error) {
            console.error("Error fetching blog details:", error);
            setSelectedBlog(null);
        } finally {
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setSelectedBlog(null);
        setIsModalOpen(false);
    };

    return (
        <section id="blogs" className="py-8 px-6 bg-black flex flex-col items-center">
            {/* Section Title */}
            <div className="text-center mb-12">
                <p className="text-lg md:text-xl text-white">Discover My</p>
                <h1 className="text-green-400 font-medium mb-2 tracking-wider text-3xl">
                    BLOG INSIGHTS
                </h1>
            </div>

            {/* Blog Thumbnails */}
            <div className="flex overflow-x-auto space-x-6 max-w-full mx-2 scrollbar-hidden" style={{ padding: "1rem" }}>
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="flex-none w-80 bg-black border-2 border-white rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-500 hover:scale-105 flex flex-col"
                    >
                        {/* Thumbnail Image */}
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="rounded-t-lg w-full object-cover"
                            style={{ height: "12rem", padding: "1rem" }}
                        />

                        {/* Blog Details */}
                        <div className="flex flex-col justify-between p-6 h-full">
                            <h2 className="text-xl font-bold text-white mb-3">{blog.title}</h2>
                            <p className="text-lg text-white mb-4 flex-grow">{blog.description}</p>

                            <div className="flex justify-between items-center text-sm text-white mb-4">
                                <p>{blog.date}</p>
                                <p>{blog.readTime}</p>
                            </div>

                            {/* Read More Button */}
                            <button
                                className="text-lg border-2 border-white text-white rounded-full px-2 py-1 transition-all duration-300"
                                onClick={() => openModal(blog.id)}
                            >
                                Read More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Blog Details */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-5/6 p-8 relative overflow-auto transform scale-95 hover:scale-100 transition-all duration-300 ease-in-out"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {isLoading ? (
                            <Spinner /> // Loading indicator
                        ) : selectedBlog ? (
                            <>
                                {/* Blog Image */}
                                {selectedBlog.image && (
                                    <img
                                        src={selectedBlog.image}
                                        alt={selectedBlog.title}
                                        className="rounded-lg w-full max-h-64 object-cover mb-6 shadow-md"
                                    />
                                )}

                                {/* Blog Title */}
                                <h2 className="text-3xl font-semibold text-gray-900 mb-6">{selectedBlog.title}</h2>

                                {/* Blog Content */}
                                {selectedBlog.content &&
                                    selectedBlog.content.map((section) => (
                                        <div key={section.id} className="mb-8">
                                            <h3 className="text-2xl font-medium text-gray-800 mb-4">{section.title}</h3>
                                            {section.subsections ? (
                                                <div className="pl-6">
                                                    {section.subsections.map((subsection) => (
                                                        <div key={subsection.id} className="mb-6">
                                                            <h4 className="text-xl font-medium text-gray-700">
                                                                {subsection.title}
                                                            </h4>
                                                            <p className="text-gray-600">{subsection.content}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-gray-600">{section.content}</p>
                                            )}
                                        </div>
                                    ))}

                                {/* Action Buttons */}
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-8 items-center justify-center">
                                    {/* Download PDF */}
                                    {selectedBlog.pdf && (
                                        <>
                                            <button
                                                className="text-xl border-2 border-black text-black rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                                                onClick={() => document.getElementById("pdfDownloadLink").click()}
                                            >
                                                Download PDF
                                            </button>
                                            <a
                                                id="pdfDownloadLink"
                                                target="_blank"
                                                href={selectedBlog.pdf}
                                                download={`${selectedBlog.title}.pdf`}
                                                style={{ display: "none" }}
                                            >
                                                Download
                                            </a>
                                        </>
                                    )}

                                    {/* Close Modal */}
                                    <button
                                        className="text-xl border-2 border-black text-black rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </>
                        ) : (
                            <p className="text-center text-gray-500">Blog details not available.</p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default BlogSection;
