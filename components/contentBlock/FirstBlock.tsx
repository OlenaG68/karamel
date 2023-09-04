import Image from "next/image";
import React from "react";

const FirstBlock = () => {
    return (
        <section className="flex flex-col lg:flex-row container mt-20 items-center justify-center">
            <div className="">
                <h1 className="lg:text-5xl text-3xl font-extrabold -rotate-2 text-center">
                    Відкриття нової Карамельки у Червонограді!
                </h1>
                <p className="text-center mt-16 text-2xl font-medium">
                    23.09 о 15:00
                </p>
                <div className="flex justify-center mt-16">
                    <button className=" py-3 px-8 bg-purple-700 rounded-3xl text-white">
                        Забронювати столик
                    </button>
                </div>
            </div>
            <div className=" relative flex justify-end ">
                <div>
                    {" "}
                    <Image
                        src="/images/first-block-k.png"
                        width={500}
                        height={200}
                        alt="kids"
                        className="rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] m-auto max-w-[700px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default FirstBlock;
