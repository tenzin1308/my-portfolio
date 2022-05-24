import React from "react";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#d6d3d1" }} className="h-screen w-screen">
      <article>
        <section className="relative flex justify-center pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-black-100 font-bold cursive leading-none lg:leading-snug home-name">
            Hello, Welcome to my Portfolio.
          </h1>
        </section>
      </article>
    </main>
  );
}