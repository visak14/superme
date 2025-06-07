"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa";
import { Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#F9FBFF] py-2 px-4 md:px-10 shadow-sm flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          src="/images/super.png"
          alt="Supreme Group Logo"
          width={120}
          height={120}
        />
      </div>

      <div className="flex items-center gap-4">
        <Button className="bg-[#00BFFF] rounded-full text-sm px-4 py-1 hover:bg-[#3ecbe5]">
          Contact Us
        </Button>

        <Link
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-black w-5 h-5" />
        </Link>

        <div className="flex items-center gap-1 text-black text-sm">
          <Globe className="w-4 h-4" />
          ENG
        </div>
      </div>
    </header>
  );
}
