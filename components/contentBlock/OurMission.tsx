import React from "react";
import Image from "next/image";
const OurMission = () => {
    return (
        <section className=" bg-mission-bg bg-cover  bg-center">
            <div className="container px-3 md:px-0 flex flex-col lg:flex-row gap-16 items-center py-[150px] justify-around">
                {" "}
                <div className=" ">
                    <h1 className="text-center text-3xl lg:text-5xl font-semibold">
                        Наша місія
                    </h1>
                    <p className=" mt-7 max-w-[600px] leading-loose font-medium">
                        Придумавши дитячий центр розваг у Червонограді
                        «Карамель», ми хотіли створити простір, де діти можуть
                        займатись улюбленими справами: веселитись, вигадувати,
                        розвиватись, товаришувати! І ми поставили собі мету -
                        створити осередок радості та свята, щоб зробити дітей
                        щасливими!
                    </p>
                </div>
                <Image
                    src="/images/first-block.jpg"
                    width={520}
                    height={200}
                    alt="kids"
                    className="rounded-tl-[50px]  rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] m-auto "
                />
            </div>
        </section>
    );
};

export default OurMission;
