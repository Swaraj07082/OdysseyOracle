import { Avatar } from "@mui/material";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex mt-9 md:flex-col items-center">
        <div className="flex-1 flex-col">
          <div className="flex gap-x-4 md:hidden">
            <Avatar src="blog.jpg" />
            <p className="mt-[6px] md:hidden">OdysseyOracle</p>
          </div>

          <div className="mt-5 cs:text-[15px] cs:text-center md:hidden pr-[100px]">
            Personal narratives shared with warmth and authenticity.
          </div>

          <ul className="flex gap-x-5 mt-5 text-[20px] cs:justify-center ">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <Link href="https://twitter.com/SwarajM07" target="_blank">
                <FaTwitter />
              </Link>
            </li>

            <li>
              <AiFillInstagram />
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <div className="footerlinks flex gap-x-[64px] justify-end sm:gap-x-[25px] lg:gap-x-[35px] md:gap-x-[75px] pt-7">
            <ul>
              <li className="p-[5px] hover:underline">Links</li>
              <Link href={"/"}>
                <li className="p-[5px]  hover:underline">HomePage</li>
              </Link>

              <li className="p-[5px]  hover:underline">Blog</li>
              <Link href={"/about"}>
                <li className="p-[5px]  hover:underline">About</li>
              </Link>

              <Link href={"/contact"}>
                <li className="p-[5px]  hover:underline">Contact</li>
              </Link>
            </ul>

            <ul>
              <li className="p-[5px]  hover:underline">Tags</li>
              <li className="p-[5px]  hover:underline">Style</li>
              <li className="p-[5px]  hover:underline">Fashion</li>
              <li className="p-[5px]  hover:underline">Coding</li>
              <li className="p-[5px]  hover:underline">Travel</li>
            </ul>

            <ul>
              <li className="p-[5px]  hover:underline">Social</li>
              <li className="p-[5px]  hover:underline">Facebook</li>
              <li className="p-[5px]  hover:underline">Instagram</li>
              <Link href={"https://twitter.com/SwarajM07"}>
                <li className="p-[5px]  hover:underline">Twitter</li>
              </Link>
              <li className="p-[5px]  hover:underline">YouTube</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
