import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import './Blogs.css'
import PDFViewer from "./PDFViewer";

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
    ]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if (selectedBlog) {
            console.log(selectedBlog);
        }
    }, [selectedBlog]);

    const openModal = async (id) => {
        navigate(`blogs/${id}`)
        setIsLoading(true)
        try{
            const response = await axios.get(`https://api.imthanuja.com/blogs/${id}`);
            // console.log(response.data);
            const blog = response.data.data.blog;
            console.log(blog);
            setSelectedBlog(blog)
            console.log(selectedBlog)
            setIsModalOpen(true)
        }
        catch(err){
            console.log(err);
        }
        finally {
            setIsLoading(false);
        }
    };

    const openPDF = (pdfUrl) => {
        window.open(pdfUrl, "_blank");
    };


    const closeModal = () => {
        setSelectedBlog(null);
        setIsModalOpen(false);
    };

    return (
        <section id="blogs" className="py-8 px-6 bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center">
            <div className="text-center mb-12">
                <p className="text-lg md:text-xl text-gray-500">Discover My</p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
                    Blog Insights
                </h1>
            </div>
            <div className="flex overflow-x-auto space-x-6 max-w-full mx-2 scrollbar-hidden" style={{padding: "1rem"}}>
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="flex-none w-80 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-500 hover:scale-105 flex flex-col"
                    >
                        <img src={blog.image} alt={blog.title} className="rounded-t-lg w-full h-48 object-cover"
                             style={{height: "12rem", padding: "1rem"}}/>
                        <div className="flex flex-col justify-between p-6 h-full">
                            <h2 className="text-xl font-bold text-gray-800 mb-3">{blog.title}</h2>
                            <p className="text-lg text-gray-600 mb-4 flex-grow">{blog.description}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                                <p>{blog.date}</p>
                                <p>{blog.readTime}</p>
                            </div>
                            <button
                                className="neon-hover text-lg border-2 border-black hover:border-cyan-500 rounded-full px-2 py-1 hover:text-cyan-500 transition-all duration-300 ease-in-out animate-pulse"
                                onClick={() => openModal(blog.id)}
                            >
                                Read More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/*{isModalOpen && selectedBlog && (*/}
            {/*    <div*/}
            {/*        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"*/}
            {/*        onClick={closeModal}*/}
            {/*    >*/}
            {/*        <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full h-5/6 p-6 relative overflow-hidden" onClick={(e) => e.stopPropagation()}>*/}
            {/*            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" onClick={closeModal}>✖</button>*/}
            {/*            <img src={selectedBlog.image} alt={selectedBlog.title} className="rounded-lg w-full max-h-64 object-cover mb-4" />*/}
            {/*            <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedBlog.title}</h2>*/}
            {/*            <p className="text-gray-600 mb-6">{selectedBlog.content}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}

            {isModalOpen && selectedBlog && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-300 ease-in-out"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-5/6 p-8 relative overflow-auto transition-all duration-300 ease-in-out transform scale-95 hover:scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <>
                                {selectedBlog.image && (
                                    <img
                                        src={selectedBlog.image}
                                        alt={selectedBlog.title}
                                        className="rounded-lg w-full max-h-64 object-cover mb-6 shadow-md"
                                    />
                                )}
                                <h2 className="text-3xl font-semibold text-gray-900 mb-6">{selectedBlog.title}</h2>

                                {/* Render content sections */}
                                {selectedBlog.content && selectedBlog.content.map((section) => (
                                    <div key={section.id} className="mb-8">
                                        <h3 className="text-2xl font-medium text-gray-800 mb-4">{section.title}</h3>
                                        {section.subsections ? (
                                            <div className="pl-6">
                                                {section.subsections.map((subsection) => (
                                                    <div key={subsection.id} className="mb-6">
                                                        <h4 className="text-xl font-medium text-gray-700">{subsection.title}</h4>
                                                        <p className="text-gray-600">{subsection.content}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-600">{section.content}</p>
                                        )}
                                    </div>
                                ))}
                                <div
                                    className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-8 items-center justify-center">
                                    <button
                                        className="text-xl border-2 border-black text-black rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                                        onClick={() => {
                                            document.getElementById("pdfDownloadLink").click();
                                        }}
                                    >
                                        Download PDF
                                    </button>

                                    <a
                                        id="pdfDownloadLink"
                                        target="_blank"
                                        href={selectedBlog.pdf}
                                        download={`${selectedBlog.title}.pdf`}
                                        style={{display: "none"}}
                                    >
                                        Download
                                    </a>

                                    <button
                                        className="text-xl border-2 border-black text-black rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}

        </section>
    );
}

export default BlogSection;
