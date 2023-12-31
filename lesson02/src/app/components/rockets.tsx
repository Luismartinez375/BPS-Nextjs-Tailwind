import React from "react";
import Image from "next/image";
import RocketLaunch from "../../../public/img/rocketlaunch.png";
import RocketMan from "../../../public/img/rocketman.png";
import RocketRide from "../../../public/img/rocketride.png";

const Rockets = () => {
  const content = (
    <main className="mx-auto max-w-4xl p-4">
      <section
        id="rockets"
        className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
      >
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Our Rockets
        </h2>
        <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
            <Image
              className="mb-6 w-1/2"
              src={RocketMan}
              alt="Rocket Man"
            ></Image>
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">
              Explorer{" "}
            </h3>
            <p className="mt-2 hidden text-center text-3xl text-slate-500  dark:text-slate-400 sm:block">
              $
            </p>
            <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
              Affordable Exploration
            </p>
          </li>
          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
            <Image
              className="mb-6 w-1/2"
              src={RocketRide}
              alt="Rocket Ride"
            ></Image>
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">
              Adventurer{" "}
            </h3>
            <p className="mt-2 hidden text-center text-3xl text-slate-500  dark:text-slate-400 sm:block">
              $$
            </p>
            <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
              Best Selling Rocket!
            </p>
          </li>
          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
            <Image
              className="mb-6 w-1/2 "
              src={RocketLaunch}
              alt="Rocket Launch"
            ></Image>
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">
              Infinity
            </h3>
            <p className="mt-2 hidden text-center text-3xl text-slate-500  dark:text-slate-400 sm:block">
              $$$
            </p>
            <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
              Luxury Starship{" "}
            </p>
          </li>
        </ul>
      </section>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
    </main>
  );
  return content;
};

export default Rockets;
