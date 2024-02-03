import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import CustomizedSwitches from "./ui/switch";


import React from 'react'


import ToggleMenu from "./ToggleMenu";




export default function Navbar() {
  return (
    <>
   
 <div
        class="flex items-center justify-between h-[80px] ">
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

        <h2 class="odyssey flex-[1]">OdysseyOracle</h2>

        <ul class="links flex	flex-[1] gap-x-6">
          <li><CustomizedSwitches /> </li>
          <li class="login">Login</li>
          <li class="homepage">Homepage</li>
          <li class="contact">Contact</li>
          <li class="about">About</li>
   
<li class='togglemenu'><ToggleMenu/></li>

     
       
          
          
        </ul>
      </div>  
    </>
  )
}






 