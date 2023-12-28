"use client";
import React, { useState } from "react";

const Funs = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const funs = [
        {
            title: "Батутна арена",
            id: 1,
            border: "#C8E7F5",
            desc: "Наші батути допоможуть дітям відірватись по повній, дострибнути до стелі та відчути себе супергероєм. Вистрибати надлишок енергії, потренувати м'язи та рівновагу, а ще підняти настрій!",
        },
        {
            title: "Just Dance",
            id: 2,
            border: "#F6D2E0",
            desc: "Це улюблений атракціон усіх фанатів танців та дискотек.	Збирайте команду, і починайте батл: за допомогою спеціальних датчиків танцювальний автомат відстежує кожен ваш рух і виставляє бали Переможе той, хто танцює краще за всіх! 	",
        },
        {
            title: "Тарзанка",
            id: 3,
            border: "#C8E7F5",
            desc: "Улюблена локація усіх поціновувачів екстріму та пригод. Дарує стрімкий політ, море емоцій та сміху. ",
        },
        {
            title: "Ніндзя парк",
            id: 4,
            border: "#F8B7CD",
            desc: "Поєднання екстриму та комфорту, безпеки та пригод забезпечує незабутні відчуття. Саме тут діти відчувають себе справжніми ніндзя. Долають перешкоди різної складності, тренуються і заряджаються позитивом та адреналіном",
        },
        {
            title: "Лабіринт та басейн з кульками",
            id: 5,
            border: "#C8E7F5",
            desc: "Справжній рай  для істинних геймерів. Зручні крісло-мішки, джойстики, великі екрани, і безліч крутих відеоігор — одна з улюблених розваг підлітків і дорослих. Вмощуйтесь зручніше та вперед назустріч пригодам.",
        },
        {
            title: "Аерохокей",
            id: 6,
            border: "#F6D2E0",
            desc: "Гра для всієї родини, у якій немає вікових обмежень! Швидка, рухлива,  азартна та нереально весела. І як круто грати з батьками, і перемагати.",
        },
        {
            title: "Баскетбол для дітей та дорослих.",
            id: 7,
            border: "#C8E7F5",
            desc: "Спортивна гра у міні-форматі. Берете м’яч, уявляєте себе професійним баскетболістом, кидаєте в кільце та перемагаєте!",
        },
    ];
    const selectTab = (tab: number) => {
        setSelectedTab(tab);
    };
    return (
        <section className="container px-3 md:px-0 py-[150px]">
            <h1 className="text-center text-3xl lg:text-5xl font-semibold ">
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
