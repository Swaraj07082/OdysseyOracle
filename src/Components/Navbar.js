'use client'

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import CustomizedSwitches from "./ui/switch";

import React from "react";

import ToggleMenu from "./ToggleMenu";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";


export default function Navbar() {

  const {status} = useSession();

  return (
    <>
      <div class="flex items-center justify-between h-[80px] ">
        <ul class=" logos flex flex-[1.6] gap-x-8">
          {/* flex-[1.6] is customised tailwind css and is equal to flex:1.6 means we have divided the parent flexed container in such a way that logos take 1.6 part , OdyssseyOracle takes 1 part by using flex-[1] and links also take 1 part  , when the parent container is flexed we can use flex:2 for child items and divide the amount of space each child item gets , therefore here logos take 1.6 part name take 1 part and links take 1 part*/}

          <li>
            <FaFacebook />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaTwitter />
          </li>

          <li>
            <AiFillInstagram />
          </li>
        </ul>
<div class="odyssey flex-[1] items-center box-border pl-[75px]">
        <h2 >OdysseyOracle</h2>

</div>

        <ul class="links flex	flex-[1] gap-x-6">
          <li>
            <CustomizedSwitches />{" "}
          </li>
         
{/*           
          <Link href='/login'>
          <li class="login">Login</li> */}


          
          {/* </Link> */}


          {status === "unauthenticated" ? (
             <>
             <Link href={'/login'}>
             
             <li class="login hover:cursor-pointer" >Login</li>
             </Link>
           </>
          ) : (
            <>
            <Link href={'/write'}>
            
              <li class="Write hover:cursor-pointer">Write</li>
            </Link>
             <li class="login" onClick={signOut}>Logout</li>

            </>
          )}
          <li class="homepage">Homepage</li>
          <li class="contact">Contact</li>

          {/* {status === "notauthenticated" ? (
             <>
             <li class="Write">Login</li>
           </>
          ) : (
            <>
              <li class="Write">Write</li>
            </>
          )} */}

          <li class="about">About</li>

          <li class="togglemenu">
            <ToggleMenu />
          </li>
        </ul>
      </div>
    </>
  );
}
