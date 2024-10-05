"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import HeroImage from "/public/Hero.png";

function HeroImageWithHover() {
  return (
    <div className="relative group overflow-hidden rounded-lg lg:rounded-2xl">
      <Image
        src={HeroImage}
        alt="Hero image"
        priority
        className="relative object-cover w-full transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:brightness-110"
      />
      
      <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out blur-2xl"></div>
    </div>
  );
}

export function Hero() {
  const phrases = ["Setup your Notes", "Organize your Ideas", "Boost Productivity", "Collaborate Seamlessly"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 500); 
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative flex items-center justify-center">
      <div className="relative items-center w-full py-12 lg:py-20">
        <div className="text-center">
          <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
            Ultimate Notes SaaS for People
          </span>
          <h1 className="mt-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black-600">
            <span className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {phrases[currentPhraseIndex]}
            </span>{" "}
            <span className="block text-primary">Easily!</span>
          </h1>
          
          <p className="max-w-xl mx-auto mt-4 text-base font-light lg:text-lg text-muted-foreground tracking-tighter">
            Setting up your Notes is hard and time consuming. We make it easy
            for you to create Notes in Seconds
          </p>
          <div className="flex items-center gap-x-5 w-full justify-center mt-5 ">
            <LoginLink>
              <Button variant="secondary" className="px-6 py-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">Sign in</Button>
            </LoginLink>
            <RegisterLink>
              <Button className="px-6 py-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">Try for free</Button>
            </RegisterLink>
          </div>
        </div>

        <div className="relative items-center w-full py-12 mx-auto mt-12">
          <HeroImageWithHover />
        </div>
      </div>
    </section>
  );
}

export default Hero;
