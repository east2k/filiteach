import React from "react";
import Image from "next/image";
import Link from "next/link";

import { instructorList } from "@/public/assets/data/instructorList";

const PartnerComponent = () => {
  return (
    <section className="bg-shark-50">
      <div className="flex flex-col justify-between max-w-screen-2xl m-auto p-12">
        <h1 className="text-6xl text-center font-bold border-b border-b-flush-orange-500 mb-7 mx-auto">
          In Partnership With
        </h1>
        <div className="flex flex-col">
          <Image
            className="w-full max-w-min mx-auto mb-5"
            src="/assets/images/uc-logo.png"
            alt="UC Logo"
            width={1000}
            height={50}
          />
          <div className="w-full">
            <h2 className="text-center text-3xl font-medium mb-3">
              Meet our Instructors
            </h2>
            <p className="text-center text-zinc-500 mb-10">
              We reached out to teachers with years of teaching experience
            </p>
            <div className="flex flex-row w-full flex-nowrap basis-1/4 gap-2">
              {instructorList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center w-1/4 border px-4 py-7 bg-white"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        className="w-full h-full min-h-fit"
                        src={item.image}
                        alt="Profile"
                        width={75}
                        height={75}
                      />
                    </div>
                    <h2 className="text-xl font-medium text-center">
                      {item.name}
                    </h2>
                    <p className="text-flush-orange-500 mb-3 text-center leading-5">
                      Focus in: <br />
                      {item.focusList}
                    </p>
                    <p className="text-zinc-500 mb-3 text-center">
                      {item.experience} years of experience
                    </p>
                    <div className="flex flex-row">
                      <Link
                        className="text-zinc-500 hover:text-zinc-700"
                        href={item.twitterLink}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                          />
                        </svg>
                      </Link>
                      <Link
                        className="text-zinc-500 hover:text-zinc-700"
                        href={item.facebookLink}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerComponent;
