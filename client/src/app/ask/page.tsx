"use client";

import Image from "next/image";
import ballImage from "@/images/placeholder-ball.png";
import { useState } from "react";
import { useInterval } from "usehooks-ts";

export default function Page() {
  const quotes = [
    "Patience is a virtue ",
    "Rome wasn't built in a day ",
    "We must learn to walk before we can run ",
    "Patience is bitter, but its fruit is sweet.",
    "He that can have patience can have what he will",
    "A man who is a master of patience is master of everything else.",
    "To lose patience is to lose the battle.",
    "Waiting is one of life’s hardships.",
    "Time brings everything, to those who can wait for it.",
    "All things come to those who wait.",
    "He who waits shall live to see.",
    "A life of almost, is a life of never",
    "Those who can’t dance blame the floor. ",
    "The deadliest poison is overconfidence. ",
    "Failure is only the opportunity to begin again.",
    "Fortune favors the prepared over the bold. ",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  useInterval(() => {
    setQuote("blabla");
  }, 5000);

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="flex flex-col gap-8 mt-[-18rem] items-start">
        <Image src={ballImage} alt="Magic 8 Ball" width={420} />
        <h1>{quote}</h1>
      </div>
    </main>
  );
}
