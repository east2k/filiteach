import Image from "next/image";
import React from "react";

const LearnMoreComponent = () => {
    return (
        <section className="bg-gradient-to-b">
            <div className="flex flex-row justify-between max-w-screen-2xl m-auto p-12">
                <h1></h1>
                <div className="w-1/2">
                    <h1 className="text-3xl w-full font-medium cap">
                        Learn more about us!
                    </h1>
                    <p className="py-7 w-1/2 text-slate-500">
                        Reach out to us with the provided link
                    </p>
                    <button className="bg-purple-500 hover:bg-purple-400 text-white px-5 py-3 rounded-lg">
                        Learn More
                    </button>
                </div>
                <div className="flex justify-center items-center w-1/3 h-auto overflow-hidden">
                    <Image
                        className="w-full h-auto"
                        src="/assets/svg/learn-more.svg"
                        alt="banner"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
};

export default LearnMoreComponent;
