"use client";
import React from "react";
import Image from "next/image";
import linkedin from "../../../public/linkedin.png";
import twitter from "../../../public/twitter.png";
import github from "../../../public/github.png";

import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="flex gap-x-20 items-center justify-center h-[500px]">
        <div>
          <Link href="https://www.linkedin.com/in/swaraj-mali-567070254/">
            <Image
              src={linkedin}
              height={150}
              width={150}
              className="mix-blend-multiply"
            />
          </Link>
        </div>

        <div>
          <Link href="https://twitter.com/SwarajM07">
            <Image
              src={twitter}
              height={150}
              width={150}
              className="mix-blend-multiply"
            />
          </Link>
        </div>

        <div>
          <Link href="https://github.com/Swaraj07082">
            <Image
              src={github}
              height={150}
              width={150}
              className="mix-blend-multiply"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
