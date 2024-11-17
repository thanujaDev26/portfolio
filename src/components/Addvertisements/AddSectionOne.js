import React, { useState } from "react";
import axios from 'axios';
function AdsSection() {
    const adsAvailable = false;
    const [email, setEmail] = useState("");
    const [isNotified, setIsNotified] = useState(false);

    const handleEmailChange = () => {
        setEmail((prevState)=>{
            return{
                ...prevState,
                email: email
            }
        })
    };

    const handleNotifySubmit = async (e) => {
        e.preventDefault();
        const message = `Hello Thanuja, I would like to display an advertisement on your blog site, can you notify me when they are available?`;
        if (email) {
            try {
                const response = await axios.post('http://localhost:5000/api/send-email', {
                    email: email,
                    message: message,
                });

                if (response.data.success) {
                    setIsNotified(true);
                } else {
                    alert('Something went wrong. Please try again later.');
                }
            } catch (error) {
                alert('Error sending email. Please try again later.');
            }
        }
    };



    return (

        <section className="py-8 md:py-16 " id="ads">

            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <h2 className="text-5xl md:text-5xl font-extrabold text-center text-gray-800 mb-8 md:mb-12">
                    Sponsored Ads and Promotions
                </h2>
                {adsAvailable ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {/* Ad 1 */}
                        <div
                            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-500 hover:ring-4 hover:ring-cyan-500">
                            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://via.placeholder.com/400x300"
                                    alt="Ad 1"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-cyan-500">
                                        Buy Our Services
                                    </h3>
                                    <p className="text-gray-600 mt-2">Check out our amazing services and get discounts
                                        today!</p>
                                </div>
                            </a>
                        </div>

                        {/* Ad 2 */}
                        <div
                            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-500 hover:ring-4 hover:ring-cyan-500">
                            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://via.placeholder.com/400x300"
                                    alt="Ad 2"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-cyan-500">
                                        Exclusive Offers
                                    </h3>
                                    <p className="text-gray-600 mt-2">Limited-time offers just for you. Don’t miss
                                        out!</p>
                                </div>
                            </a>
                        </div>


                        <div
                            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-500 hover:ring-4 hover:ring-cyan-500">
                            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://via.placeholder.com/400x300"
                                    alt="Ad 3"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-cyan-500">
                                        Explore Our Products
                                    </h3>
                                    <p className="text-gray-600 mt-2">Browse our high-quality products and grab the best
                                        deals!</p>
                                </div>
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-600">Coming Soon! Stay tuned for upcoming ads and
                            promotions.</p>
                        <div className="mt-8">
                            <p className="text-lg text-gray-600 mb-4">Get notified when the ads are available:</p>
                            {isNotified ? (
                                <p className="text-green-500">Thanks for signing up! We'll notify you soon.</p>
                            ) : (
                                <form onSubmit={handleNotifySubmit}
                                      className="flex justify-center items-center space-x-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        placeholder="Enter your email"
                                        className="px-4 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-72"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="neon-hover text-md border-2 border-black hover:border-cyan-500 rounded-full px-4 py-2 hover:text-cyan-500 transition-all duration-300 ease-in-out"
                                    >
                                        Get Notified
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>

                )}
            </div>

        </section>
    );
}

export default AdsSection;
