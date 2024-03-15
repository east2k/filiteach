import React from "react";
import Image from "next/image";

const BannerComponent = () => {
    return (
        <section className="my-24 items-center flex">
            <div className="flex flex-col md:flex-row md:justify-between  items-center max-w-screen-2xl m-auto px-12 py-24 md:p-12">
                <div className="w-full md:w-1/2">
                    <h1 className="text-7xl w-full font-medium cap">
                        Discover <span className="text-mantis-500">Fun</span>{" "}
                        and <span className="text-mantis-500">Interactive</span>{" "}
                        Learning for Filipino Kids!
                    </h1>
                    <p className="py-7 w-1/2 text-slate-500">
                        Provides you with learning experience to grow up your
                        knowledge
                    </p>
                    <button className="bg-mantis-500 hover:bg-mantis-400 text-white px-5 py-3 rounded-lg">
                        Get Started!
                    </button>
                </div>
                <div className="flex justify-center items-center w-2/3 md:w-1/3 h-auto overflow-hidden">
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
