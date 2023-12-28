import Image from "next/image";
import React from "react";

const Services = () => {
    const services = [
        {
            title: "Безлімітні розваги",
            id: 1,
            color: "#67A3D9",
            img: "/icons/bezlim.png",
            desc: "Ідеальний варіант зробити дитину щасливою на всі сто - дати їй можливість бавитись стільки часу - скільки вона хоче. Хочемо, щоб кожна дитина насолоджувалась щасливим дитинством, щоб прийшовши до нас одного разу, вам захотілось завітати ще і ще!",
        },
        {
            title: "Святкування дня народження",
            id: 2,
            color: "#F6D2E0",
            img: "/icons/birth.png",
            desc: "В нас є все для ідеального дитячого свята: аніматори в костюмах улюблених героїв, безліч шоу, майстер-класів, стильні тематичні кімнати, святкове  меню, піньята та топові безлімітні розваги. А для іменинника - подарунковий сертифікат на наступне безкоштовне відвідування!",
        },
        {
            title: "Випускні",
            id: 3,
            color: " #C8E7F5",
            img: "/icons/grads.png",
            desc: "Для маленьких випускників ми підготували яскраві шоу-програми, різноманітні конкурси, безлімітні розваги, святкове меню, запальну дискотеку, та незабутні враження! Ви обираєте тематику свята - ми створюємо фантастичне святкування!",
        },
        {
            title: "Групові візити",
            id: 4,
            color: "#F8B7CD",
            img: "/icons/group.png",
            desc: "Для груп дітей від 15 осіб даруємо у будні знижку 30% Для того щоб весело провести час з друзями,однокласниками потрібно зарезервувати дату візиту  не пізніше ніж, за 1 день. Кожні 10 дітей обов'язково мають супроводжуватись мінімум одним дорослим. Акція не розповсюджується на святкування днів народжень та випускних.",
        },
    ];
    return (
        <section id="services" className="py-[100px] container">
            <h1 className="text-center text-3xl lg:text-5xl font-semibold">
                Наші послуги
            </h1>
            <div className=" grid grid-cols-1 px-3 md:px-0 md:grid-cols-2 xl:grid-cols-4  gap-[75px]  lg:gap-5 mt-24 justify-around">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`text-center drop-shadow-md  rounded-lg px-6 py-6`}
                        style={{ background: service.color }}
                    >
                        <div>
                            <Image
                                width={100}
                                height={70}
                                alt="icon"
                                src={service.img}
                                className="m-auto"
                            />
                        </div>

                        <div>
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
