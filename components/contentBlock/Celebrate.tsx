import React from "react";

const Celebrate = () => {
    return (
        <section className=" bg-ads-bg  bg-cover bg-center">
            <div className=" py-[150px] bg-black bg-opacity-50 w-full h-full">
                <div className="container text-center">
                    <h1 className=" text-4xl text-white font-bold">
                        Святкуйте найважливіші дні своєї дитини в Карамельці!
                    </h1>
                    <p className=" text-lg text-white mt-16">
                        Тут потрібно добавити якийсь текст можливо про умови
                        святкування, чи щось щоб спонукати людей залищати
                        контакти
                    </p>
                </div>
                <div className="flex justify-center mt-16">
                    <button className=" py-3 px-8 bg-[#0671B7] rounded-3xl text-white">
                        Забронювати столик
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Celebrate;
