import React from "react";
import Head from "next/head";

export default function skills() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Nazmus Sadat Nuhin | Andriod Developer</title>
      </Head>
      <div className="mx-6 grid content-center min-h-screen">
        <div className="mt-12">
          <h1 className="text-5xl  text-gray-700 font-bold">SKILLS</h1>
        </div>
        <div>
          <div className="flex flex-wrap mt-6">
            <div className="w-full sm:w-5/12 md:w-5/12 lg:w-5/12 p-4">
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 text-bold text-2xl text-gray-600">
                  <h1>Android Development</h1>
                </div>
                <div className="col-span-2 text-2xl text-gray-400">
                  <h1>10 years</h1>
                </div>

                <div className="col-span-3 text-bold text-2xl text-gray-600">
                  <h1>Java</h1>
                </div>
                <div className="col-span-2 text-2xl text-gray-400">
                  <h1>10 years</h1>
                </div>
                <div className="col-span-3 text-bold text-2xl text-gray-600">
                  <h1>Kotlin</h1>
                </div>
                <div className="col-span-2 text-2xl text-gray-400">
                  <h1>5 years</h1>
                </div>
                <div className="col-span-3 text-bold text-2xl text-gray-600">
                  <h1>RxJava</h1>
                </div>
                <div className="col-span-2 text-2xl text-gray-400">
                  <h1>5 years</h1>
                </div>
                <div className="col-span-3 text-bold text-2xl text-gray-600">
                  <h1>MVVM</h1>
                </div>
                <div className="col-span-2 text-2xl text-gray-400">
                  <h1>5 years</h1>
                </div>
                <div className="col-span-3 text-bold text-2xl text-gray-600">
                  <h1>Coroutines</h1>
                </div>
                <div className="col-span-2 text-2xl text-gray-400">
                  <h1>4 years</h1>
                </div>
                <div className="col-span-3 text-bold text-2xl text-gray-600">
                  <h1>Jackpack Compose</h1>
                </div>
                <div className="col-span-2 text-2xl text-gray-400">
                  <h1>2 years</h1>
                </div>
                <div className="col-span-3 text-bold text-2xl text-gray-600">
                  <h1>Dart</h1>
                </div>
                <div className="col-span-2 text-2xl text-gray-400">
                  <h1>2 years</h1>
                </div>
                <div className="col-span-3 text-bold text-2xl text-gray-600">
                  <h1>Flutter</h1>
                </div>
                <div className="col-span-2 text-2xl text-gray-400">
                  <h1>2 years</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
