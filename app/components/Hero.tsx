import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { ThemeToggle } from "../dashboard/ThemeToggle";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/Hero.png";

export function Hero() {
  return (
    <>
      
      <section className="relative flex items-center justify-center">
        <div className="relative items-center w-full py-12 lg:py-20">
          <div className="text-center">
            <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
              Ultimate Notes SaaS for People
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-none">
              Setup your Notes{" "}
              
              <span className="block text-primary">Easily!</span>
            </h1>

            <p className="max-w-xl mx-auto mt-4 text-base font-light lg:text-lg text-muted-foreground tracking-tighter">
              Setting up your Notes is hard and time consuming. We make it easy
              for you to create a Notes in Seconds
            </p>
            <div className="flex items-center gap-x-5 w-full justify-center mt-5 ">
              <LoginLink>
                <Button variant="secondary">Sign in</Button>
              </LoginLink>
              <RegisterLink>
                <Button>Try for free</Button>
              </RegisterLink>
            </div>
          </div>

          <div className="relative items-center w-full py-12 mx-auto mt-12">
            <svg
              className="absolute -mt-24 blur-3xl"
              fill="none"
              viewBox="0 0 400 400"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                 
                </g>
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="720.666"
                  id="filter0_f_10_20"
                  width="720.666"
                  x="-160.333"
                  y="-160.333"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_10_20"
                    stdDeviation="80.1666"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>

            <Image
              src={HeroImage}
              alt="Hero image"
              priority
              className="relative object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Hero; 