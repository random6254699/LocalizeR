
import NavBar from "../../components/MainWebsite/NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import ContactPage from "./ContactPage";
import ProductPage from "./ProductPage";
import LoginPage from "./LoginPage";
import Footer from "../../components/MainWebsite/Footer";
import { useEffect, useState } from "react";
import RegisterPage from "./RegisterPage";

const MainWebsite = () => {
    const [localStorageData, setLocalStorageData] = useState();
    const [sessionStorageData, setSessionStorageData] = useState();
    useEffect(() => {
        setLocalStorageData(localStorage.getItem("user-type"))
        setSessionStorageData(sessionStorage.getItem("token"))
    }, [])
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactPage />} />
                <Route path="/products/:name" element={<ProductPage />} />
                {localStorageData ?
                   <>   
                    <Route path="/sign-in" element={"404 Error"} />
                    <Route path="/sign-up" element={"404 Error"} />
                   </>
                    :
                    <>
                    <Route path="/sign-in" element={<LoginPage />} />
                    <Route path="/sign-up" element={<RegisterPage />} />
                    </>
                }

            </Routes>
            <Footer />
        </>
    )
}
export default MainWebsite;