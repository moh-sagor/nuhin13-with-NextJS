import React from "react";
import Head from "next/head";

export default function education() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Nazmus Sadat Nuhin | Andriod Developer</title>
      </Head>
      <div className="mx-6">
        <div className="mt-12">
          <h1 className="text-5xl  text-gray-700 font-bold">EDUCATION</h1>
        </div>
        <div>
          <div className="flex flex-wrap mt-12">
            <div className="w-full lg:w-9/12">
              <h1 className="text-3xl  text-orange-700 font-medium">
                KHULNA UNIVERSITY
              </h1>
              <h1 className="text-3x text-gray-400 font-bold">
                FACULTY OF COMPUTER SCIENCE AND ENGINEERING
              </h1>
              <div className="mx-10 text-gray-700 font-normal text-1xl">
                <h1>Bachelor’s degree in Information Technologies</h1>
              </div>
            </div>
            <div className="w-full lg:w-3/12 text-gray-500 ">
              <h1 className="mt-2 text-2xl text-orange-700 font-normal">
                2022-2022
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap mt-12">
            <div className="w-full lg:w-9/12">
              <h1 className="text-3xl  text-orange-700 font-medium">
                KHULNA UNIVERSITY
              </h1>
              <h1 className="text-3x text-gray-400 font-bold">
                FACULTY OF COMPUTER SCIENCE AND ENGINEERING
              </h1>
              <div className="mx-10 text-gray-700 font-normal text-1xl">
                <h1>Bachelor’s degree in Information Technologies</h1>
              </div>
            </div>
            <div className="w-full lg:w-3/12 text-gray-500 ">
              <h1 className="mt-2 text-2xl text-orange-700 font-normal">
                2022-2022
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
