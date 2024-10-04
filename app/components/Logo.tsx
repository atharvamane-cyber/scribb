import Image from "next/image";


import Apple from "/public/Apple.svg";
import Netflix from "/public/Netflix.svg"
import Amex from "/public/Amex.svg"
import Atom from "/public/Atom.svg"

export function Logos() {
  return (
    <div className="py-10">
      <h2 className="text-center text-lg font-semibold leading-7">
        Trusted by the best companies in the world
      </h2>
      <div className="mt-10 grid max-w-lg mx-auto grid-cols-2 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5 gap-x-8 gap-y-10 items-center">
        <Image
          src={Atom}
          alt="Atom Logo"
          className="max-h-12 w-full object-contain dark:invert"
        />
        <Image
          src={Apple}
          alt="Apple Logo"
          className="max-h-28 w-full object-contain dark:invert"
        />
         <Image
          src={Netflix}
          alt="Netflix Logo"
          className="max-h-30 w-full object-contain dark:invert"
        />
           <Image
          src={Amex}
          alt="Amex  Logo"
          className="max-h-15 w-full object-contain dark:invert"
        />
        


      <Image
          src={Atom}
          alt="Atom  Logo"
          className="max-h-15 w-full object-contain dark:invert"
        />
      </div>
    </div>
  );
}
