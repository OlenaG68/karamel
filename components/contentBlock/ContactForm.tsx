import React from "react";

const ContactForm = () => {
    return (
        <section className="py-[100px] container flex flex-col  items-center justify-center">
            <h1 className="text-center text-2xl font-semibold">
                Хочеш забронювати свято? Напиши нам!
            </h1>
            <form className="mt-20 flex flex-col lg:flex-row gap-5 w-10/12">
                <div className="mb-6 w-full md:w-1/2">
                    <label
                        htmlFor="default-input"
                        className="block mb-2 text-md font-semibold text-gray-900 "
                    >
                        Ім&apos;я
                    </label>
                    <input
                        type="text"
                        id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
                    />
                </div>
                <div className="mb-6 w-full">
                    <label
                        htmlFor="default-input"
                        className="block mb-2 text-md font-medium text-gray-900 "
                    >
                        Номер телефону
                    </label>
                    <input
                        type="text"
                        id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
                    />
                </div>
            </form>
            <div className="flex justify-center mt-16">
                <button className=" py-3 px-8 bg-purple-700 rounded-3xl text-white">
                    Забронювати столик
                </button>
            </div>
        </section>
    );
};

export default ContactForm;
