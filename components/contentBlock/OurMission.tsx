"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const OurMission = () => {
    const images = [
        "/images/mission/IMG_3876.jpg",
        "/images/mission/IMG_3877.jpg",
        "/images/mission/IMG_3880.jpg",
        "/images/mission/IMG_3894.jpg",
        "/images/mission/IMG_3895.jpg",
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <section className=" bg-mission-bg bg-cover  bg-center relative">
            <div className="absolute  bg-purple-900 bg-opacity-75 w-full h-full" />
            <div className="container px-3 md:px-0 flex flex-col lg:flex-row gap-16 items-center py-[150px] justify-around">
                {" "}
                <div className="relative z-20 ">
                    <h1 className="text-center text-3xl text-white lg:text-5xl font-semibold">
                        Наша місія
                    </h1>
                    <p className="text-white text-xl mt-7 max-w-[600px]  ">
                        Придумавши дитячий центр розваг у Червонограді
                        «Карамель», ми хотіли створити простір, де діти можуть
                        займатись улюбленими справами: веселитись, вигадувати,
                        розвиватись, товаришувати! І ми поставили собі мету -
                        створити осередок радості та свята, щоб зробити дітей
                        щасливими! Карамель - це безліч тематичних вечірок,
                        майстер-класів, чемпіонатів та заходів для всієї родини.
                        Тут можна відсвяткувати незабутній день народження,
                        випускний та навіть хрестини.
                    </p>
                </div>
                <div className="max-w-[300px] md:max-w-[520px]">
                    {" "}
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <Image
                                    src={image}
                                    width={450}
                                    height={200}
                                    alt="kids"
                                    className="rounded-tl-[50px]  rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] m-auto "
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default OurMission;
