import Image from "next/image";
import React from "react";

import { featureList } from "@/public/assets/data/featureList";

const FeaturesComponent = () => {
  return (
    <section className="bg-shark-50">
      <div className="flex flex-col items-center max-w-screen-2xl m-auto p-12">
        <h1 className="text-6xl text-center font-bold w-fit mb-7">Features</h1>
        <div className="flex flex-col gap-7">
          {featureList.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row rounded-xl w-3/5 overflow-hidden even:ml-auto h-52"
              >
                <div className="flex justify-center items-center min-w-max max-w-fit overflow-hidden">
                  <Image
                    className="w-full h-auto max-w-xs"
                    src={item.image}
                    alt="Feature Hero"
                    width={200}
                    height={140}
                  />
                </div>
                <div className="flex flex-col justify-center p-5">
                  <h3 className="text-2xl mb-2 font-semibold border-b border-b-flush-orange-500 w-fit">
                    {item.name}
                  </h3>
                  <p className="feature-body text-sm">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
