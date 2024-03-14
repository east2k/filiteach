import React from "react";
import Image from "next/image";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { homeTeachList } from "@/public/assets/data/homeTeachList";

const DiscoverComponent = () => {
  return (
    <section className="border-t bg-shark-50">
      <div className="flex flex-col items-center max-w-screen-2xl m-auto p-12">
        <h1 className="text-6xl text-center font-bold w-fit mb-7">
          What do we teach?
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          {homeTeachList.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full md:w-1/3 rounded-xl border  px-7 py-5 bg-white"
              >
                <div className="flex flex-row items-center mb-5">
                  <Image
                    className="bg-mantis-500 w-9 h-9 rounded-lg"
                    src={item.image}
                    alt="icon"
                    width={50}
                    height={50}
                  />
                  <h2 className="ml-5 text-xl font-semibold">{item.name}</h2>
                </div>
                <p className="mb-2">{item.content}</p>
                <button className="flex flex-row justify-center items-center p-4 py-2 ml-auto rounded-xl text-mantis-500">
                  Learn More
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiscoverComponent;
