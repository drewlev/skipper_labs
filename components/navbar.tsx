import Image from "next/image";

import { CTAButton } from "./cta-button";
export default function Navbar() {
  return (
    <div className="fixed bg-[#1D1E2180] top-0 left-0 right-0 flex justify-between items-center p-4 shadow-sm z-50 border-b-2 border-white/10 rounded-b-lg backdrop-blur-sm bg-opacity-25">
      <div className="flex items-center">
        <Image src="/skipperLogo.svg" alt="logo" width={100} height={32} />
      </div>
      {/* <div className="flex items-center text-white gap-4 ">
        <Link className="cursor-pointer hover:text-blue-500" href="/">
          Home
        </Link>
        <Link className="cursor-pointer hover:text-blue-500" href="/">
          About
        </Link>
        <Link className="cursor-pointer hover:text-blue-500" href="/">
          Services
        </Link>
        <Link className="cursor-pointer hover:text-blue-500" href="/">
          Contact
        </Link>
      </div> */}
      <div className="flex items-center">
        <CTAButton text="Let's Talk" />
      </div>
    </div>
  );
}
