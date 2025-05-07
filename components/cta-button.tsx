import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTAButton( {text}: {text: string} ) {
  return (
    <Link href="https://cal.com/drew-levine-kkooiw/quiib-studio">
      <Button className="bg-gradient-to-br from-[#3691CA] to-[#79A496] text-white hover:opacity-90 hover:scale-105 transition-all duration-300 cursor-pointer border-t-[2px] border-white/33 p-3 ">
        {text}
      </Button>
    </Link>
  );
}
