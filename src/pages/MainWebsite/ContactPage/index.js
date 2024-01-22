import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
const ContactPage = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        submitMessage()
    }
    async function submitMessage() {
        const id = toast.loading("Please wait...")
       try {
        const fetch = await axios.post("/json/product.json",{
            firstName:firstName,
            lastName:lastName,
            subject:subject,
            message:message
        });
        if(fetch){
            toast.update(id, { render: "Message Send", type: "success",autoClose:5000, closeOnClick:true,isLoading: false });
        }else{
            toast.update(id, { render: "Something went wrong", type: "error",autoClose:5000, closeOnClick:true,isLoading: false });
        }
        
       } catch (error) {
        toast.update(id, { render: error.response.statusText, type: "error",autoClose:5000, closeOnClick:true,isLoading: false });
        
       }
    }
    return (
        <>
            <div className="w-full ">
                <div className="map w-full">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.479350066875!2d85.31781697423494!3d27.671575827070463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ce38ccd337%3A0x6abe2de758c1136!2sTechAxis!5e0!3m2!1sen!2snp!4v1703035167448!5m2!1sen!2snp" height="450" style={{ border: "0", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div id="contact-form " className="py-4">
                    <div className="grid grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                        <div className="message-form px-4">
                            <h1 className="font-bold mb-4">Contact Us</h1>
                            <form onSubmit={(e) => { handleSubmit(e) }}>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                            First Name
                                        </label>
                                        <input required onChange={(e) => { setFirstName(e.target.value) }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                            Last Name
                                        </label>
                                        <input required onChange={(e) => { setLastName(e.target.value) }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                    </div>
                                </div>

                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                            Subject
                                        </label>
                                        <input required onChange={(e) => { setSubject(e.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Message Subject" />

                                    </div>
                                </div>

                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                            Message
                                        </label>
                                        <textarea required onChange={(e) => { setMessage(e.target.value) }} rows="4" cols="50" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Message Subject" />

                                    </div>
                                </div>

                                <button type="submit" className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                    Send
                                </button>

                            </form>

                        </div>
                        <div className="contact-info">
                            <h1 className="font-bold mb-4">Contact Info</h1>
                            <ul className='px-3 py-2 text-gray-400 font-medium'>
                                <li className='flex py-2'>
                                    <FaLocationDot size={18} className='mr-2' /> Kathmandu,Nepal
                                </li>
                                <li className='flex py-2'>
                                    <MdOutlineEmail size={18} className='mr-2' /> info@localizeR
                                </li>
                                <li className='flex py-2'>
                                    <Link to="" className='px-2'>
                                        <FaFacebook size={18} />
                                    </Link>
                                    <Link to="" className='px-2'>
                                        <FaInstagram size={18} />
                                    </Link>
                                    <Link to="" className='px-2'>
                                        <FaSquareXTwitter size={18} />
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}


export default ContactPage;