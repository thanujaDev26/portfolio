import { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";


export default function ContactForm(props) {

    let[userInput, setUserInput] = useState({
        name : '', email : '', message : ''
    });

    let onChangeName = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                name: event.target.value
            }
        })
    }

    let onChangeEmail = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                email: event.target.value
            }
        })
    }

    let onChangeMessage = (event) =>{
        setUserInput((preve)=>{
            return{
                ...preve,
                message: event.target.value
            }
        })
    }

    let onSubmitHandler = async (e) => {
        e.preventDefault();
        let { name,email,message } = userInput
        let user = {
            name: name, email: email, message: message
        }
        const templateParams = {
            from_name : name,
            from_email : email,
            message : message
        }
        try {
            let user = {
                name : name, email : email,message : message,
            }
            // const response = await axios.post('http://localhost:3001/email-send-message',user)
            await emailjs.send(
                'service_1wwsie6',
                'template_ffplxha',
                templateParams,
                'ntfsFA_vEwleik9wC'
            )
            setUserInput({
                name : '', email : '', message : ''
            })

        }
        catch (error){
            alert("Failed to send your message. Please try again");
        }

    }

    return(
        <div>
            <div className="text-center">
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-lg">
                    &lt;Leave a Message/&gt;
                </h3>
                <p className="mt-2 text-lg font-medium bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse tracking-wide">
                    I'd love to hear from you!
                </p>
            </div>
            <form>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-white">Your
                            Name</label>
                        <input
                            id="username"
                            value={userInput.name}
                            onChange={onChangeName}
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
                            value={userInput.email}
                            onChange={onChangeEmail}
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
                            value={userInput.message}
                            onChange={onChangeMessage}
                            name="message"
                            rows={4}
                            className="block w-full max-h-32 rounded-lg border-2 border-gray-600 bg-white py-3 px-4 text-gray-800 placeholder-gray-400 shadow-xl focus:ring-2 focus:ring-black-500 sm:text-sm"
                            placeholder="Your Message"
                        />
                    </div>


                    <div className="flex justify-center">
                        <button
                            type="submit"
                            onClick={onSubmitHandler}
                            className="rounded-full border-2 border-black bg-transparent py-3 px-5 text-black font-semibold hover:bg-black hover:text-white hover:border-transparent transition-all"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}