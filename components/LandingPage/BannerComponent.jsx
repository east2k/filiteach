import React from "react";
import Image from "next/image";

const BannerComponent = () => {
    return (
        <section className="bg-gradient-to-b from-white to-purple-50">
            <div className="flex flex-row justify-between max-w-screen-2xl m-auto p-12">
                <div className="w-1/2">
                    <h1 className="text-7xl w-full font-medium cap">
                        Discover <span className="text-purple-500">Fun</span>{" "}
                        and <span className="text-purple-500">Interactive</span>{" "}
                        Learning for Filipino Kids!
                    </h1>
                    <p className="py-7 w-1/2 text-slate-500">
                        Provides you with learning experience to grow up your
                        knowledge
                    </p>
                    <button className="bg-purple-500 hover:bg-purple-400 text-white px-5 py-3 rounded-lg">
                        Get Started!
                    </button>
                </div>
                <div className="flex justify-center items-center w-1/3 h-auto overflow-hidden">
                    <Image
                        className="w-full h-auto"
                        src="/assets/svg/banner.svg"
                        alt="banner"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
};

export default BannerComponent;
