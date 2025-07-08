"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function Home() {
  const name = "Swaraj";
  const halfIndex = Math.floor(name.length / 2); 

  useEffect(() => {
    gsap.from(gsap.utils.toArray(".g"), {
      y: 70,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
    });

    gsap.from(gsap.utils.toArray(".a"), {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      stagger: 0.3,
    });

    gsap.from(gsap.utils.toArray(".b"), {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      stagger: -0.3,
    });
  }, []);

  return (
    <div className="flex items-center min-h-screen justify-center text-center">
      <h1 className="text-7xl overflow-hidden flex space-x-2">
        {name.split("").map((char, index) => (
          <span
            className={`inline-block g ${index < halfIndex ? "a" : "b"}`}
            key={index}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
