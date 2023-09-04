import React from "react";

const Services = () => {
    const services = [
        {
            title: "Безлімітні розваги",
            id: 1,
            bg: "/images/services/green.svg",
            img: "",
        },
        {
            title: "Святкування дня народження",
            id: 2,
            bg: "/images/services/red.svg",
            img: "",
        },
        {
            title: "Випускні",
            id: 3,
            bg: "/images/services/blue.svg",
            img: "",
        },
        {
            title: "Групові візити",
            id: 4,
            bg: "/images/services/pink.svg",
            img: "",
        },
    ];
    return (
        <section className="py-[100px] container">
            <h1 className="text-center text-2xl font-semibold">Наші послуги</h1>
            <div className="flex flex-col lg:flex-row  gap-[75px]  lg:gap-5 mt-16 justify-around">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="text-center flex flex-col items-center justify-center"
                    >
                        <div
                            className=" w-32 h-32 bg-contain bg-no-repeat"
                            style={{ backgroundImage: `url(${service.bg})` }}
                        ></div>
                        <h3 className="text-lg font-medium">{service.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
