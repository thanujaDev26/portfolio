import { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";
import PopupModal from "./PopupModal";

export default function ContactForm(props) {

    let[userInput, setUserInput] = useState({
        name : '', email : '', message : ''
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        title: '',
        message: '',
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
        try {
            let user = {
                name : name, email : email,message : message,
            }
            await axios.post('https://api.imthanuja.com/send-email',user)
            setModalContent({
                title: 'Success',
                message: 'Email sent successfully!',
            });
            setModalOpen(true);

            setUserInput({
                name : '', email : '', message : ''
            })
        }
        catch (error){
            if (error.response) {
                const { status, data } = error.response;
                if (status === 429) {
                    setModalContent({
                        title: 'Too Many Requests',
                        message: data.message,
                    });
                } else {
                    setModalContent({
                        title: 'Error',
                        message: data.message || 'Something went wrong!',
                    });
                }
            } else {
                setModalContent({
                    title: 'Error',
                    message: 'Failed to send email. Please try again later.',
                });
            }
            setModalOpen(true);
            setUserInput({
                name : '', email : '', message : ''
            })
        }

    }

    return(
        <div className="text-white  flex flex-col items-center justify-center" style={{border:'1px solid gray', borderRadius : '2vh'}}>
            <div className="text-center mb-8">
                <p className="mt-2 text-lg font-medium">
                    I'd love to hear from you!
                </p>
            </div>
            <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-6 bg-black space-y-4 rounded-lg shadow-lg">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-white">Your Name</label>
                    <input
                        id="username"
                        value={userInput.name}
                        onChange={onChangeName}
                        name="username"
                        type="text"
                        className="block w-full rounded-full border-2 border-gray-600 bg-black text-white py-3 px-4 placeholder-gray-400 shadow-xl sm:text-sm"
                        placeholder="Your Name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                    <input
                        id="email"
                        value={userInput.email}
                        onChange={onChangeEmail}
                        name="email"
                        type="email"
                        className="block w-full rounded-full border-2 border-gray-600 bg-black text-white py-3 px-4 placeholder-gray-400 shadow-xl sm:text-sm"
                        placeholder="Your Email"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                    <textarea
                        id="message"
                        value={userInput.message}
                        onChange={onChangeMessage}
                        name="message"
                        rows={4}
                        className="block w-full rounded-lg border-2 border-gray-600 bg-black text-white py-3 px-4 placeholder-gray-400 shadow-xl sm:text-sm"
                        placeholder="Your Message"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="rounded-full border-2 border-white bg-transparent py-3 px-5 text-white font-semibold"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            <PopupModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title={modalContent.title}
                message={modalContent.message}
            />
        </div>
    )
}
