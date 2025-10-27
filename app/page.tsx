"use client";

import Image from "next/image";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Button Counter
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A simple button counter app.
          </p>
        </div>

       <section className="my-16 w-full max-w-sm"> 
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
           <h2 className="mb-3 text-xl font-semibold text-black dark:text-zinc-50">
              Default Counter
            </h2>
            <Counter />
        </div>
        <div>
          <h2 className="mb-3 text-xl font-semibold text-black dark:text-zinc-50">
              Custom Counter (starts at 5, step 2)
            </h2>
            <Counter initialCount={5} initialStep={2} />
        </div>
        </section>
      </main>
    </div>
  );
}

