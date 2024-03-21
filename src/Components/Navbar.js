"use client";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import CustomizedSwitches from "./ui/Switch";

import React from "react";

import ToggleMenu from "./ToggleMenu";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();

  return (
    <>
      <div class="flex items-center justify-between h-[80px] sm:justify-center ">
        <ul class=" logos flex flex-[1.6] gap-x-8">
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
        <div class="odyssey flex-[1] items-center box-border pl-[75px] cs:pl-[0px] ">
          <Link href={"/"}>
            <h2>OdysseyOracle</h2>
          </Link>
        </div>

        <ul class="links flex	flex-[1] gap-x-6 sm:gap-x-3 cs:gap-x-2">
          <li>
            <CustomizedSwitches />{" "}
          </li>

          {status === "unauthenticated" ? (
            <>
              <Link href={"/login"}>
                <li class="login hover:cursor-pointer hover:underline">
                  Login
                </li>
              </Link>
            </>
          ) : (
            <>
              <Link href={"/write"}>
                <li class="Write hover:cursor-pointer sm:hidden hover:underline">
                  Write
                </li>
              </Link>
              <li class="login hover:underline" onClick={signOut}>
                Logout
              </li>
            </>
          )}
          <Link href={"/"}>
            <li class="homepage hover:underline">Homepage</li>
          </Link>
          <Link href={"/contact"}>
            <li class="contact hover:underline">Contact</li>
          </Link>

          <Link href={"/about"}>
            <li class="about hover:underline">About</li>
          </Link>

          <li class="togglemenu">
            <ToggleMenu />
          </li>
        </ul>
      </div>
    </>
  );
}
