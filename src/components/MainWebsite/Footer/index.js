import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook,FaInstagram  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <section id="footer" className="bg-gray-900">
            <div className='container mx-auto  w-full max-w-screen-xl p-4 py-6 lg:py-8'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
                    <div>
                        <Link tag={Link} to="/" className=' font-semibold text-2xl text-orange-400 hover:text-orange-700'>LocalizeR</Link>
                        <span className='text-white'>
                            <p>LocalizeR is an online platform that serves as a space for connecting users to service providers.</p>
                        </span>
                    </div>
                    <div className='quickLink  mb-6 text-sm font-semibold   text-white'>
                        <h3 className='uppercase'>Quick Link</h3>
                        <ul className='px-3 py-2 text-gray-400 font-medium'>
                            <li className='py-2'>
                                <Link to={"/about-us"}>About Us</Link>
                            </li>
                            <li className='py-2'>
                                <Link to={"/contact-us"}>Contact Us</Link>
                            </li>
                            <li className='py-2'>
                                <Link to={"/login"}>Login</Link>
                            </li>
                            <li className='py-2'>
                                <Link to={"/sign-up"}>Sign Up</Link>
                            </li>
                        </ul>
                    </div>

                    

                    <div className='quickLink  mb-6 text-sm font-semibold   text-white'>
                        <h3 className='uppercase'>Useful Link</h3>
                        <ul className='px-3 py-2 text-gray-400 font-medium'>
                            <li className='py-2'>
                                <Link to={"/about-us"}>Term & Conditions</Link>
                            </li>
                            <li className='py-2'>
                                <Link to={"/contact-us"}>Legal</Link>
                            </li>
                            
                        </ul>
                    </div>


                    <div className='quickLink  mb-6 text-sm font-semibold   text-white'>
                        <h3 className='uppercase'>Contact Info</h3>
                        <ul className='px-3 py-2 text-gray-400 font-medium'>
                            <li className='flex py-2'>
                                <FaLocationDot size={18} className='mr-2'/> Kathmandu,Nepal
                            </li>
                            <li className='flex py-2'>
                                <MdOutlineEmail size={18} className='mr-2'/> info@localizeR
                            </li>
                            <li className='flex py-2'>
                                <Link to="" className='px-2'>
                                    <FaFacebook size={18}/>
                                </Link>
                                <Link to="" className='px-2'>
                                    <FaInstagram size={18}/>
                                </Link>
                                <Link to="" className='px-2'>
                                    <FaSquareXTwitter size={18}/>
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;