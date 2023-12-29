import React from "react";
import Image from "next/image";
import Phone from "../Icons/Phone";
import Mail from "../Icons/Mail";
import Link from "next/link";
const Footer = () => {
    return (
        <div>
            <div className="container md:px-0 px-3 flex flex-wrap flex-col gap-20 md:gap-0 md:flex-row justify-between py-16">
                <div className="max-w-[313px]">
                    <div>Логотип</div>
                    <div className="mt-4  text-base font-normal">
                        Homeverse.io is a gated community with a great location.
                        Located downtown, you’re within walking distance of
                        Parks.
                    </div>
                </div>
                <div>
                    <div className=" text-2xl font-semibold">Контакти</div>
                    <div className="mt-4  text-opacity-80 text-base font-normal ">
                        м.Червоноград, вул. Б.Хмельницького,59 2-й поверх,
                    </div>
                    <div className="mt-4 flex gap-2 items-center text-opacity-80 text-base font-normal ">
                        <Phone /> <div>+380 97 475 4997</div>
                    </div>
                    <div className="mt-4 flex gap-2 items-center text-opacity-80 text-base font-normal ">
                        <Mail /> <div>karamelchg@gmail.com</div>
                    </div>
                </div>
                <div>
                    <div className=" text-2xl font-semibold">
                        Слідкуйте за нами
                    </div>
                    <div className="flex  gap-14 mt-4">
                        <Link
                            href="https://www.facebook.com/Karamel.DC"
                            target="_blank"
                        >
                            <Image
                                src="/icons/facebook.png"
                                width={36}
                                height={36}
                                alt="facebook"
                                className="cursor-pointer"
                            />
                        </Link>
                        <Link
                            href="https://www.instagram.com/karamel_chervonohrad/"
                            target="_blank"
                        >
                            <Image
                                src="/icons/instagram.png"
                                width={36}
                                height={36}
                                alt="instagram"
                                className="cursor-pointer"
                            />
                        </Link>
                        <Link
                            href="https://t.me/karamelChg_bot?start=651294089e87dace7a0f4940"
                            target="_blank"
                        >
                            <Image
                                src="/icons/telegram.png"
                                width={36}
                                height={36}
                                alt="telegram"
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="px-3 md:px-0 text-center pt-4 pb-4 border-t  border-purple-900 border-opacity-30">
                © 2023 WebDes | All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;
