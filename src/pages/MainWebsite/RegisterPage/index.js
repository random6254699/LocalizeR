import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import axios from 'axios';

const RegisterPage = () => {
    const [userType, setUserType] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [service,setService] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        if (firstName === undefined || firstName === null || firstName === "") {
            toast.error('First name is required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (lastName === undefined || lastName === null || lastName === "") {
            toast.error('Last name is required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if(userType === undefined || userType === null || userType === ""){
            toast.error('User Type is required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } 
        else if (email === undefined || email === null || email === "") {
            toast.error('Email address is required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if(userType === "merchant" && service === undefined || service === null || service === ""){
            toast.error('Service  is required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } 
        else if (password === undefined || password === null || password === "") {
            toast.error('password is required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (passwordConfirm === undefined || passwordConfirm === null || passwordConfirm === "") {
            toast.error('Confirm password is required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (password != passwordConfirm) {
            toast.error('Pasword and confirm password didnot match.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            loginApi();
        }
    }

    // This is test api
    async function loginApi() {
        const id = toast.loading("Please wait...")
        try {

            const getUser = await axios.get("/json/user.json", {
                email
            });
            var user;
            const userData = getUser.data.map((v, i) => {
                if (v.email === email && v.password === password) {
                    user = v;
                }
            });
            if (user) {
                toast.update(id, { render: "Login Sucessful", type: "success", autoClose: 5000, closeOnClick: true, isLoading: false });
                localStorage.setItem("user-type", user.userType)
                sessionStorage.setItem("token", user.token)
            } else {
                toast.update(id, { render: "Incorrect user email or password", type: "error", autoClose: 5000, closeOnClick: true, isLoading: false });

            }

        } catch (error) {
            toast.update(id, { render: error.response.statusText, type: "error", autoClose: 5000, closeOnClick: true, isLoading: false });
        }
    }

    useEffect(()=>{
        
    },[userType])
    return (
        <>
            <div className="w-full bg-slate-200	">
                <div className="w-1/2 mx-auto py-5">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="font-semibold">Create your LocalizeR Account.</div>
                        <div className="loginForm px-2 py-4" >
                            <form onSubmit={(e) => { handleSubmit(e) }}>
                                <div className="mb-4">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        User Type
                                    </label>
                                    <div class="flex items-center mb-4">
                                        <input onChange={(e) => { console.log("hello");setUserType("buyer") }}  type="radio" value="buyer" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Buyer</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input onChange={(e) => { setUserType("merchant") }}  type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Merchant</label>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                            First Name
                                        </label>
                                        <input onChange={(e) => { setFirstName(e.target.value) }} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="grid-first-name" type="text" placeholder="First Name" />

                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block text-gray-700  text-sm font-bold mb-2" for="grid-last-name">
                                            Last Name
                                        </label>
                                        <input onChange={(e) => { setLastName(e.target.value) }} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="grid-last-name" type="text" placeholder="Last Name" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700  text-sm font-bold mb-2" for="username">
                                        Email
                                    </label>
                                    <input onChange={(e) => { setEmail(e.target.value) }} className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address" />
                                </div>

                                {
                                    userType === "merchant" ?
                                        <div className="mb-4">
                                            <label className="block text-gray-700  text-sm font-bold mb-2" for="username">
                                                Service
                                            </label>
                                            <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                                <option>Select Service</option>
                                                <option>Plumbing</option>
                                                <option>HVAC</option>
                                                <option>Cleasing</option>
                                                <option>Furniture</option>
                                                <option>Electronics</option>
                                                <option>Moving</option>
                                                <option>Contractors</option>
                                            </select>
                                        </div>
                                        :
                                        ""
                                }




                                <div class="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                        Password
                                    </label>
                                    <input onChange={(e) => { setPassword(e.target.value) }} className=" appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                </div>
                                <div class="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                        Confirm Password
                                    </label>
                                    <input onChange={(e) => { setPasswordConfirm(e.target.value) }} className=" appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button class="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Sign Up
                                    </button>

                                </div>
                            </form >
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </>
    )
}
export default RegisterPage;