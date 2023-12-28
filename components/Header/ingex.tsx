"use client";
import { scrollElementToView } from "@/hooks/scrollElementToView";
import useClickOutside from "@/hooks/useClickOutside";
import React, { useEffect, useRef, useState } from "react";
import MobMenu from "../Icons/MobMenu";
import Close from "../Icons/Close";

const Header = () => {
    const [activeLink, setActiveLink] = useState(1);
    const [openMobMenu, setOpenMobMenu] = useState(false);
    const mobMenuRef = useRef<HTMLDivElement>(null);
    const [navBg, setNavBg] = useState(false);
    const navLink = [
        { title: "Головна", id: 1, slug: "home" },
        { title: "Наші послуги", id: 2, slug: "services" },
        { title: "Про нас", id: 3, slug: "about-us" },
        { title: "Розваги", id: 4, slug: "funs" },
        { title: "Тарифи", id: 4, slug: "price" },
    ];
    const changeNavBg = () => {
        window.scrollY >= 500 ? setNavBg(true) : setNavBg(false);
    };
    const chooseLink = (id: number, slug: string) => {
        setActiveLink(id);
        scrollElementToView(slug);
        setOpenMobMenu(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", changeNavBg);
        return () => {
            window.removeEventListener("scroll", changeNavBg);
        };
    }, []);
    useClickOutside(mobMenuRef, () => setOpenMobMenu(false));
    return (
        <nav
            className={` w-full text-black md:text-white bg-white md:bg-transparent  fixed top-0 px-5 z-50 transition ease-in-out ${
                navBg ? " text-black bg-white duration-500 " : ""
            }`}
        >
            <div className=" w-full py-4 justify-between items-center inline-flex ">
                <div className="">Логотип</div>
                <div className=" gap-[49px] justify-between items-center  hidden md:flex">
                    {navLink.map((link) => (
                        <div
                            key={link.id}
                            className=" text-lg font-semibold  leading-tight cursor-pointer"
                            onClick={() => chooseLink(link.id, link.slug)}
                        >
                            {link.title}
                        </div>
                    ))}
                </div>
                <div ref={mobMenuRef} className="block md:hidden">
                    <MobMenu onClick={() => setOpenMobMenu(true)} />
                    {openMobMenu && (
                        <div className="bg-white w-full h-fit flex items-center gap-8 py-8 flex-col absolute top-0 left-0">
                            <div className="absolute top-4 right-4">
                                <Close onClick={() => setOpenMobMenu(false)} />
                            </div>

                            {navLink.map((link) => (
                                <div
                                    key={link.id}
                                    className=" text-sm font-semibold text-black leading-tight cursor-pointer"
                                    onClick={() =>
                                        chooseLink(link.id, link.slug)
                                    }
                                >
                                    {link.title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
