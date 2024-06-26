import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

import { pricingList } from "@/public/assets/data/pricingList";
import Link from "next/link";

const PricingComponent = () => {
  return (
    <section className="bg-shark-50">
      <div className="flex flex-col items-center max-w-screen-2xl m-auto p-12">
        <h1 className="text-6xl text-center font-bold border-b border-b-mantis-500 w-fit mb-7">
          Pricing
        </h1>
        <div className="flex md:flex-row flex-col gap-10">
          {pricingList.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start card w-full md:w-1/3 border rounded-xl p-10 bg-white"
              >
                <h2 className="text-xl uppercase tracking-widest mb-5 text-center w-full">
                  {item.name}
                </h2>
                <p className="text-sm text-zinc-400 mb-3">{item.subtitle}</p>
                <span className="text-3xl text-mantis-500 mb-3 text-center w-full">
                  {item.price}
                </span>
                <h3 className="text-xl bg-mantis-500 text-white rounded-lg w-full text-center py-2 mb-5">
                  {item.label}
                </h3>
                <ul className="flex flex-col gap-3">
                  {item.featuring.map((list, index) => {
                    return (
                      <li key={index} className="flex flex-row items-center">
                        <CheckCircleIcon className="w-5 h-5 min-w-max text-mantis-500 mr-2" />
                        <p className="text-sm text-zinc-500 leading-3">
                          {list}
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <Link href="/pricing" className="flex flex-row justify-center items-center p-4 py-2 mx-auto mt-5 rounded-xl text-mantis-500 hover:bg-mantis-500 hover:text-white">
                  Learn More
                  <ChevronRightIcon className="w-5 h-5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
