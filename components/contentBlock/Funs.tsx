"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const Funs = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const funs = [
        {
            title: "Батутна арена",
            id: 1,
            border: "#C8E7F5",
            desc: "Наші батути допоможуть дітям відірватись по повній, дострибнути до стелі та відчути себе супергероєм. Вистрибати надлишок енергії, потренувати м'язи та рівновагу, а ще підняти настрій!",
            images: [
                "/images/mission/IMG_3876.jpg",
                "/images/mission/IMG_3877.jpg",
                "/images/mission/IMG_3880.jpg",
                "/images/mission/IMG_3894.jpg",
                "/images/mission/IMG_3895.jpg",
            ],
        },
        {
            title: "Just Dance",
            id: 2,
            border: "#F6D2E0",
            desc: "Це улюблений атракціон усіх фанатів танців та дискотек.	Збирайте команду, і починайте батл: за допомогою спеціальних датчиків танцювальний автомат відстежує кожен ваш рух і виставляє бали Переможе той, хто танцює краще за всіх! 	",

            images: [
                "/images/mission/IMG_3876.jpg",
                "/images/mission/IMG_3877.jpg",
                "/images/mission/IMG_3880.jpg",
                "/images/mission/IMG_3894.jpg",
                "/images/mission/IMG_3895.jpg",
            ],
        },
        {
            title: "Тарзанка",
            id: 3,
            border: "#C8E7F5",
            desc: "Улюблена локація усіх поціновувачів екстріму та пригод. Дарує стрімкий політ, море емоцій та сміху. ",
            images: [
                "/images/mission/IMG_3876.jpg",
                "/images/mission/IMG_3877.jpg",
                "/images/mission/IMG_3880.jpg",
                "/images/mission/IMG_3894.jpg",
                "/images/mission/IMG_3895.jpg",
            ],
        },
        {
            title: "Ніндзя парк",
            id: 4,
            border: "#F8B7CD",
            desc: "Поєднання екстриму та комфорту, безпеки та пригод забезпечує незабутні відчуття. Саме тут діти відчувають себе справжніми ніндзя. Долають перешкоди різної складності, тренуються і заряджаються позитивом та адреналіном",
            images: [
                "/images/mission/IMG_3876.jpg",
                "/images/mission/IMG_3877.jpg",
                "/images/mission/IMG_3880.jpg",
                "/images/mission/IMG_3894.jpg",
                "/images/mission/IMG_3895.jpg",
            ],
        },
        {
            title: "Лабіринт та басейн з кульками",
            id: 5,
            border: "#C8E7F5",
            desc: "Справжній рай  для істинних геймерів. Зручні крісло-мішки, джойстики, великі екрани, і безліч крутих відеоігор — одна з улюблених розваг підлітків і дорослих. Вмощуйтесь зручніше та вперед назустріч пригодам.",
            images: [
                "/images/mission/IMG_3876.jpg",
                "/images/mission/IMG_3877.jpg",
                "/images/mission/IMG_3880.jpg",
                "/images/mission/IMG_3894.jpg",
                "/images/mission/IMG_3895.jpg",
            ],
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: undefined,
        prevArrow: undefined,
    };
    const selectTab = (tab: number) => {
        setSelectedTab(tab);
    };
    return (
        <section id="funs" className="container px-3 md:px-0 py-[150px]">
            <h1 className="text-center text-3xl lg:text-5xl font-semibold ">
                Розваги в Карамельці
            </h1>
            <div className="mt-24 flex flex-col md:flex-row gap-14 px-3">
                <div className="flex gap-5 flex-col basis-1/2 w-full ">
                    {funs.map((fun) => (
                        <div
                            key={fun.id}
                            className={` drop-shadow-md w-full font-medium hover:scale-105 py-4 border-2 text-center rounded-lg ${
                                fun.id === selectedTab && " scale-105"
                            }`}
                            style={{
                                borderColor: `${
                                    fun.id === selectedTab
                                        ? "#67A3D9"
                                        : fun.border
                                }`,
                            }}
                            onClick={() => selectTab(fun.id)}
                        >
                            {fun.title}
                        </div>
                    ))}
                </div>

                <div className="basis-1/2">
                    {funs.map((fun) => (
                        <>
                            {fun.id === selectedTab && (
                                <div className="w-full">
                                    <div className="m-auto max-w-[300px] md:max-w-[520px]">
                                        <Slider {...settings}>
                                            {fun.images.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className="p-1"
                                                >
                                                    <Image
                                                        src={image}
                                                        width={250}
                                                        height={200}
                                                        alt="kids"
                                                        className="rounded-xl m-auto "
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                    <p className="text-center mt-5 text-lg font-medium">
                                        {fun.desc}
                                    </p>
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Funs;
