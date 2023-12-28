import Image from "next/image";
import React from "react";

const FirstBlock = () => {
    return (
        <section className="flex flex-col lg:flex-row relative h-screen items-center justify-center bg-first-block-bg bg-cover bg-center">
            <div className="absolute m-auto bg-purple-900 bg-opacity-50 max-w-[96%] max-h-[96%] md:max-w-[90%] md:max-h-[90%] w-full h-full" />
            <div className="container px-3 relative z-20">
                <h1 className="lg:text-[64px] leading-10 lg:leading-[80px] text-white text-3xl font-extrabold max-w-[840px] m-auto -rotate-2 text-center">
                    Улюблений простір розваг для дорослих та дітей
                </h1>
                <p className="text-white text-center mt-16 text-lg md:text-3xl font-medium">
                    Чекаємо щодня з 11:00-20:00
                </p>
                <div className="flex justify-center mt-16">
                    <button className=" py-3 px-8 bg-teal-500 rounded-3xl text-white">
                        Забронювати столик
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FirstBlock;
