import Image from "next/image";
import React from "react";

export default function AboutUs() {
    return (
        <div className="mt-28">
            <section className="flex flex-col md:flex-row max-w-screen-2xl m-auto px-7 py-2 items-center">
                <div className="p-12">
                    <span className="uppercase text-zinc-400">About Us</span>
                    <h1 className="text-5xl text-mantis-500 font-medium mb-5">
                        Helping students with the aim on improving academic
                        performance
                    </h1>
                    <p className="text-base text-zinc-700">
                        Filiteach aims to solve academic challenges, empowering
                        students to enhance their performance and achieve their
                        full potential
                    </p>
                </div>
                <Image
                    className="min-h-max h-full w-1/2"
                    src="/assets/svg/about-us-banner.svg"
                    alt="Banner"
                    width={500}
                    height={500}
                />
            </section>
            <section className="flex flex-col md:flex-row bg-mantis-100 max-w-screen-2xl m-auto px-7 py-7">
                <h1 className="p-12 w-full md:w-1/2 text-4xl">
                    Chatbot integrated website e-learning something something
                </h1>
                <div className="flex flex-col gap-4 p-12 w-full md:w-1/2">
                    <p>
                        We believe in the power of video to foster human
                        connections and empower go-to-market professionals to
                        deliver trusted and productive buyer experiences.
                    </p>
                    <p>
                        We also believe in the power of AI to help unlock
                        creativity and connect with more prospects than ever
                        before.
                    </p>
                    <p>
                        We are committed to helping our customers grow their
                        revenue faster by unleashing the potential of video and
                        AI.
                    </p>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center max-w-screen-2xl m-auto px-7 py-7">
                <h1 className="text-4xl my-3 text-mantis-500 text-center md:text-left">
                    What do we aim to solve?
                </h1>
                <p className="w-1/2 text-center">
                    We aim to provide a solution for the SDG 4: Ensure inclusive
                    and equitable quality education and promote lifelong
                    learning opportunities for all
                </p>
                <Image
                    src="/assets/svg/about-us-solution.svg"
                    alt="Solutions"
                    width={400}
                    height={300}
                />
            </section>
            {/* <section className="flex flex-col items-center justify-center max-w-screen-2xl m-auto px-7 py-7">
                <h1 className="text-4xl my-3 text-mantis-500">
                    What do we offer?
                </h1>
                <p className="w-1/2 text-center">
                    We aim to provide a solution for the SDG 4: Ensure inclusive
                    and equitable quality education and promote lifelong
                    learning opportunities for all
                </p>
            </section> */}
        </div>
    );
}
