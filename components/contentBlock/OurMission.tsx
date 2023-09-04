import React from "react";
import Image from "next/image";
const OurMission = () => {
    return (
        <section className="container flex flex-col lg:flex-row gap-16 items-center py-[100px] justify-around">
            <div className=" basis-1/2">
                <h1 className="text-center text-2xl font-semibold">
                    Наша місія
                </h1>
                <p className=" mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
            <div>
                {" "}
                <Image
                    src="/images/first-block.jpg"
                    width={500}
                    height={200}
                    alt="kids"
                    className="rounded-tl-[50px]  rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] m-auto max-w-[700px]"
                />
            </div>
        </section>
    );
};

export default OurMission;
