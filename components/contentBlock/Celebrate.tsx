import React from "react";

const Celebrate = () => {
    return (
        <section className=" bg-ads-bg  bg-cover  bg-center">
            <div className=" py-[150px] bg-purple-900 bg-opacity-75 w-full h-full">
                <div className="container text-center px-3">
                    <h1 className=" text-3xl lg:text-5xl  text-white font-bold leading-snug">
                        Святкуйте найважливіші дні своєї дитини в Карамельці!
                    </h1>
                    <p className=" text-lg text-white mt-16">
                        Як замовити свято? Залишіть заявку - ми перетелефонуємо
                        вам та дамо відповіді на всі ваші запитання: надішлемо
                        меню, допоможемо обрати анімаційну програму відповідно
                        до віку та зацікавлень ваших гостей. А також забронюємо
                        дату та розрахуємо вартість
                    </p>
                </div>
                <div className="flex justify-center mt-16">
                    <button className=" py-3 px-8 bg-teal-500 rounded-3xl text-white">
                        Забронювати столик
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Celebrate;
