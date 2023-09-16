"use client";
import React, { useState } from "react";

const Funs = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const funs = [
        {
            title: "Батутна арена",
            id: 1,
            border: "#C8E7F5",
            desc: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Ніндзя парк",
            id: 2,
            border: "#F6D2E0",
            desc: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Зона Play Station",
            id: 3,
            border: "#C8E7F5",
            desc: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
            title: "Ще якась зона",
            id: 4,
            border: "#F8B7CD",
            desc: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
    ];
    const selectTab = (tab: number) => {
        setSelectedTab(tab);
    };
    return (
        <section className="container px-3 md:px-0 py-[100px]">
            <h1 className="text-center text-2xl font-semibold ">
                Розваги в Карамельці
            </h1>
            <div className="mt-24 flex flex-col md:flex-row gap-14">
                <div className="flex gap-5 flex-col basis-1/2 w-full">
                    {funs.map((fun) => (
                        <div
                            key={fun.id}
                            className={` drop-shadow-md w-full hover:scale-105 py-4 border-2 text-center rounded-lg ${
                                fun.id === selectedTab && " scale-105"
                            }`}
                            style={{
                                borderColor: `${
                                    fun.id === selectedTab
                                        ? "#67A3D9"
                                        : fun.border
                                }`,
                            }}
                            onClick={() => selectTab(fun.id)}
                        >
                            {fun.title}
                        </div>
                    ))}
                </div>

                <div className="basis-1/2">
                    {funs.map((fun) => (
                        <>
                            {fun.id === selectedTab && (
                                <p className="text-center">{fun.desc}</p>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Funs;
