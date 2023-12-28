import Image from "next/image";
import React from "react";

const FirstBlock = () => {
    return (
        <section className="flex flex-col lg:flex-row h-screen items-center justify-center bg-first-block-bg bg-cover bg-center">
            <div className="container px-3">
                <h1 className="lg:text-5xl text-3xl font-extrabold -rotate-2 text-center">
                    Улюблений простір розваг для дорослих та дітей
                </h1>
                <p className="text-center mt-16 text-2xl font-medium">
                    Чекаємо щодня з 11:00-20:00
                </p>
                <div className="flex justify-center mt-16">
                    <button className=" py-3 px-8 bg-purple-700 rounded-3xl text-white">
                        Забронювати столик
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FirstBlock;
