import React from "react";
import logo from "@/images/logos/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

const Logo = () => {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={logo}
            alt="logo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
