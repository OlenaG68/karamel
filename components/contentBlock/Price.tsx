import React from "react";

const Price = () => {
    const allPrices = [
        {
            title: "Будні",
            prices: [
                { title: "1 година", id: 1, price: "120грн" },
                { title: "Безліміт", id: 2, price: "180грн" },
            ],
            id: 1,
        },
        {
            title: "Вихідні та святкові",
            prices: [
                { title: "1 година", id: 1, price: "150грн" },
                { title: "Безліміт", id: 2, price: "220грн" },
            ],
            id: 2,
        },
    ];

    return (
        <section id="price" className="container py-[100px] px-3 md:px-0">
            <h1 className="text-center text-3xl lg:text-5xl font-semibold ">
                Наші тарифи
            </h1>

            {allPrices.map((day) => (
                <div
                    key={day.id}
                    className="mt-20 drop-shadow-md border-[4px] py-10 rounded-lg border-[#F8B7CD]"
                >
                    <h2 className="text-center text-3xl font-semibold ">
                        {day.title}
                    </h2>
                    {day.prices.map((price) => (
                        <div
                            key={price.id}
                            className="flex justify-around mt-11"
                        >
                            <div className="text-2xl font-semibold">
                                {price.title}
                            </div>
                            <div className="text-2xl font-bold">
                                {price.price}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default Price;
