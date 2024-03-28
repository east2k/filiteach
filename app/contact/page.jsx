import Link from "next/link";
import React from "react";

export default function Contact() {
    return (
        <div className="mt-28">
            <section className="flex flex-col max-w-screen-2xl m-auto px-7 py-2">
                <div className="border-b">
                    <h1 className="text-3xl">Contact</h1>
                </div>
                <ul className="p-5">
                    <li className="py-2">
                        Facebook:{" "}
                        <Link
                            href="https://www.facebook.com/filiteach/"
                            target="_blank"
                            className="border p-2 border-black rounded-md"
                        >
                            Click me to go to Facebook
                        </Link>
                    </li>
                    <li className="py-2">
                        Email: christian.estoque.dev@gmail.com{" "}
                    </li>
                    <li className="py-2">
                        Address: 9JG7+W23, Loakan Rd, Baguio, Benguet
                    </li>
                </ul>
            </section>
        </div>
    );
}
