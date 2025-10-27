"use client";

import { useState, type ChangeEvent } from "react";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  const increase = () => setCount(c => c + step);
  const decrease = () => {
    if (count - step >= 0) setCount(c => c - step);
  };
  const reset = () => setCount(initialCount);

  const handleStepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setStep(value > 0 ? Math.floor(value) : 1);
  };

   return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <label htmlFor="step" className="block text-sm font-medium text-gray-700">
            Step
          </label>
          <input
            id="step"
            type="number"
            min="1"
            value={step}
            onChange={handleStepChange}
            className="mt-1 w-24 rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div aria-live="polite" className="text-right">
          <p className="text-sm text-gray-500">Current Count</p>
          <h2 className="text-4xl font-semibold count-value">{count}</h2>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={increase}
          className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 active:scale-95"
        >
          +{step}
        </button>

        <button
          onClick={decrease}
          disabled={count - step < 0}
          className={`rounded-md px-4 py-2 border transition ${
            count - step < 0
              ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
              : "border-gray-300 bg-white hover:bg-gray-50"
          }`}
        >
          -{step}
        </button>

        <button
          onClick={reset}
          className="ml-auto rounded-md border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50 active:scale-95"
        >
          Reset
        </button>
      </div>
    </div>
  );
}