import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import axios from 'axios';

const LoginPage = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    function handleSubmit(e){
        e.preventDefault();
        if(email === undefined || email===null || email===""){
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
        }else if(password === undefined || password===null || password===""){
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
        }else{
            loginApi();
        }
    }

    // This is test api
    async function loginApi(){
        const id = toast.loading("Please wait...")
        try {
            
            const getUser = await axios.get("/json/user.json",{
                email
            });
            var user;
            const userData = getUser.data.map((v,i)=>{
                if(v.email === email && v.password === password){
                    user = v;
                }
            });
            if(user){
                toast.update(id, { render: "Login Sucessful", type: "success", autoClose: 5000, closeOnClick: true, isLoading: false });
                localStorage.setItem("user-type",user.userType)
                sessionStorage.setItem("token",user.token)
            }else{
                toast.update(id, { render: "Incorrect user email or password", type: "error", autoClose: 5000, closeOnClick: true, isLoading: false });
                
            }
           
        } catch (error) {
            toast.update(id, { render: error.response.statusText, type: "error", autoClose: 5000, closeOnClick: true, isLoading: false });
        }
    }
    return (
        <>
            <div className="w-full bg-slate-200	">
                <div className="w-1/2 mx-auto py-5">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="font-semibold">Welcome to LocalizeR! Please login.</div>
                        <div className="loginForm px-2 py-4" >
                            <form onSubmit={(e)=>{handleSubmit(e)}}>
                                <div className="mb-4">
                                    <label className="block text-gray-700  text-sm font-bold mb-2" for="username">
                                        Email
                                    </label>
                                    <input onChange={(e)=>{setEmail(e.target.value)}} required className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address" />
                                </div>
                                <div class="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                        Password
                                    </label>
                                    <input onChange={(e)=>{setPassword(e.target.value)}} className=" appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button  class="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Sign In
                                    </button>
                                    <a className="inline-block align-baseline font-bold text-sm text-orange-400 hover:text-orange-700" href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                            </form >
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer/>
        </>
    )
}
export default LoginPage;