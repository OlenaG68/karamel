import Image from "next/image";
import React from "react";

const Services = () => {
    const services = [
        {
            title: "Безлімітні розваги",
            id: 1,
            color: "#67A3D9",
            img: "/icons/bezlim.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            title: "Святкування дня народження",
            id: 2,
            color: "#F6D2E0",
            img: "/icons/birth.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            title: "Випускні",
            id: 3,
            color: " #C8E7F5",
            img: "/icons/grads.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            title: "Групові візити",
            id: 4,
            color: "#F8B7CD",
            img: "/icons/group.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
    ];
    return (
        <section className="py-[100px] container">
            <h1 className="text-center text-2xl font-semibold">Наші послуги</h1>
            <div className="flex flex-col px-3 md:px-0 lg:flex-row  gap-[75px]  lg:gap-5 mt-24 justify-around">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`text-center drop-shadow-md flex flex-col items-center justify-around rounded-lg px-6 py-6`}
                        style={{ background: service.color }}
                    >
                        <Image
                            width={100}
                            height={70}
                            alt="icon"
                            src={service.img}
                        />

                        <div>
                            {" "}
                            <h3 className="text-lg font-medium  mt-5 ">
                                {service.title}
                            </h3>
                            <p className="mt-5 text-sm leading-6 self-center">
                                {service.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
