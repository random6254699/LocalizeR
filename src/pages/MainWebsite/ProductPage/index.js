import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle } from "react-icons/fa";

import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";

const ProductPage = () => {
    const [prod, setProd] = useState();
    // modal code
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [dateTime, setDateTime] = useState();
    const [hireTime, setHireTime] = useState();
    const [message, setMessage] = useState();
    const [commentMessage, setCommentMsg] = useState();
    const params = useParams();
    useEffect(() => {
        getProd();
    }, [])

    async function getProd() {
        try {
            const fetch = await axios.get("/json/product.json");
            // comment this code and connet your api
            if (fetch) {
                var prodTemp;
                const getProd = fetch.data.map((v, i) => {
                    if (v.name === params.name) {
                        prodTemp = v
                    }
                    return prodTemp
                })
                setProd(prodTemp)
            }
        } catch (error) {
            console.log(error)
        }
    }

    function haldleSubmit() {
        if (dateTime === undefined || dateTime === null || dateTime === "") {
            toast.error('Date is required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (hireTime === undefined || hireTime === null || hireTime === "") {
            toast.error('Hire time is required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            makeHire();
        }
    }

    async function makeHire() {
        const id = toast.loading("Please wait...")
        try {
            const fetch = await axios.post("/json/product.json", {
                dateTime: dateTime,
                hireTime: hireTime,
                message: message,
                name: prod.name
            });
            if (fetch) {
                toast.update(id, { render: "Message Send", type: "success", autoClose: 5000, closeOnClick: true, isLoading: false });
            } else {
                toast.update(id, { render: "Something went wrong", type: "error", autoClose: 5000, closeOnClick: true, isLoading: false });
            }

        } catch (error) {
            toast.update(id, { render: error.response.statusText, type: "error", autoClose: 5000, closeOnClick: true, isLoading: false });

        }
    }

    if (prod) {
        return (<>
            <div id="product-main" className=" px-3 py-3">
                <div className="container mx-auto">
                    <div className="grid grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="prod-img">
                            <img alt={prod.name} src={prod.image} />
                        </div>
                        <div className="prod-details ">
                            <h3 className="font-bold text-2xl pb-2  text-gray-600 font-medium text-base">About the business :</h3>
                            <div className="prod-title font-bold text-2xl pb-2 text-gray-800">
                                <h1>{prod.name}</h1>
                            </div>
                            <div className="product-sub-desc">
                                <div className="prod-rating flex">
                                    <div className="flex items-center">
                                        {Array.from({ length: prod.avgRating }, (_, index) => (
                                            <div title={"Rating:" + prod.avgRating} key={index}>
                                                <div > <FaStar color={index < prod.avgRating ? "yellow" : ""} /></div>
                                            </div>
                                        ))}
                                    </div> |
                                </div>
                                <div className="prod-price mt-2">
                                    <div className="font-bold text-orange-400  mb-2">{prod.currency} {prod.price} {prod.priceType}</div>
                                </div>
                                <div className="add-details flex">
                                    <div className="type flex font-semibold	m-1"><MdOutlineHomeRepairService className="mt-1 mr-1" size={20} />{prod.serviceType}</div>
                                    | <div className="location flex font-semibold m-1"><FaLocationDot className="mt-1 mr-1" size={20} />{prod.information.location}</div>
                                    | <div className="contact flex font-semibold m-1 "><IoIosContact className="mt-1 mr-1" size={20} />{prod.information.contactNum}</div>
                                </div>
                            </div>


                            <div className="prod-desc">
                                <div className="prod-main-desc text-gray-600">
                                    {prod.description}
                                </div>
                            </div>

                            <div className="prod-buy mt-2">
                                <Button className="bg-orange-400 hover:bg-orange-700 " onClick={toggle}>
                                    Make Reservation
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="prod-comments mt-5">
                        <h1 className="font-semibold">User Comments</h1>
                        <div className="main-comments-section">


                            {
                                prod.comment.map((v, i) => {
                                    return (
                                        <>
                                            <div className="comment-container flex mt-3 mb-3">
                                                <div className="user-iocn">
                                                    <FaUserCircle size={60} />
                                                </div>



                                                <div className="user-details px-2 py-1">
                                                    <div className="user-name font-medium">
                                                        {v.userName}
                                                    </div>
                                                    <div className="prod-rating flex">
                                                        <div className="flex items-center">
                                                            {Array.from({ length: v.rating }, (_, index) => (
                                                                <div title={"Rating:" + v.rating} key={index}>
                                                                    <div > <FaStar color={index < v.rating ? "yellow" : ""} /></div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="user-comment">
                                                        {v.comment}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }




                        </div>
                    </div>


                    <div className="comment-box">
                        <h3 className="font-bold text-2xl pb-2  text-gray-600 font-medium text-base">Post Comment :</h3>
                        <form>
                            <div class="flex flex-wrap ">
                                <div class="w-1/2 px-3">
                                    <input type="number" min="1" max="5" required onChange={(e) => { setCommentMsg(e.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  placeholder="Rate The product" />

                                </div>
                            </div>
                            <div class="flex flex-wrap ">
                                <div class="w-1/2 px-3">
                                    <textarea required onChange={(e) => { setCommentMsg(e.target.value) }} rows="4" cols="50" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Message Subject" />

                                </div>
                            </div>
                            <button type="submit" className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>


            <Modal className="mt-6" style={{ zIndex: "999999" }} isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Make Reservation</ModalHeader>
                <ModalBody>
                    <form id="modelForm">

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Date & Time
                                </label>
                                <input onChange={(e) => { setDateTime(e.target.value) }} required type="datetime-local" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="******************" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Hire day or hr
                                </label>
                                <input onChange={(e) => { setHireTime(e.target.value) }} required min="1" type="number" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Number of day or hour hire" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Description (Optional)
                                </label>
                                <textarea onChange={(e) => { setMessage(e.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Additional Info" />
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button className="bg-orange-400 hover:bg-orange-700 " onClick={() => { haldleSubmit() }}>
                        Submit
                    </Button>{' '}
                    <Button className="bg-red-400 hover:bg-red-700 " onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            <ToastContainer />
        </>)
    }

}

export default ProductPage;