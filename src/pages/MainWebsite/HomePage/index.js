import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";

import Card from "../../../components/MainWebsite/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const HomePage = () => {
    return (
        <>
            <HeroContent />
            <ServiceContent />
        </>
    )
}


const HeroContent = () => {
    return (
        <>
            <div id={`${styles.home}`} style={{
                padding: "5%",
                backgroundImage: `url("/images/homeImg1.jpg")`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100vh",
            }}>
                <Slider {...sliderSettings}  >
                    <div className="slider-item">
                        <div className="slider-content px-28 py-32">
                            <h3 className={`${styles.mainText}   mb-2 text-white font-bold`}>
                                Welcome to
                                <br /> LocalizeR
                            </h3>
                            <p className="text-40 mb-8  text-gray-200 font-semibold">
                                One Easy Junction For The Best
                            </p>
                            <button className=" bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-sm font-semibold">
                                Explore
                            </button>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="slider-content px-28 py-32">
                            <h3 className={`${styles.mainText}   mb-2 text-white font-bold`}>
                                Find The Best
                                <br /> Local Services
                            </h3>
                            <p className="text-40 mb-8  text-gray-200 font-semibold">
                                Compare service providers to your benifit
                            </p>
                            <button className=" bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-sm font-semibold">
                                Explore
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

const ServiceContent = () => {
    const [services, setService] = useState();
    async function getService() {
        try {
            const fetch = await axios.get("/json/product.json");
            if (fetch) {
                setService(fetch.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getService();
    }, []);
    if (services) {
        return (
            <>
                <div className={`${styles.mainContainer}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {
                            services.map((v, i) => {
                                return (
                                    <div key={i}>
                                       
                                       <Card key={i}  title={v.name} desc={v.description} price={v.currency + " " + v.price + " " + v.priceType} type={v.serviceType} img={v.image} rating={v.avgRating} />

                                    </div>
                                )
                                
                            })
                        }
                         
                         
                    </div>

                </div>
            </>
        )
    }


}

export default HomePage;