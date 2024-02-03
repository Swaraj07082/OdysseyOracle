import { Avatar } from '@mui/material'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <>
    
    <div className='flex mt-9 md:flex-col items-center'>



<div className='flex-1 flex-col'>

<div className='flex gap-x-4 '>

<Avatar/>
<p className='mt-[6px]'>
OdysseyOracle
</p>

</div>

<div className='mt-5'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eligendi! Impedit quaerat, quam magni necessitatibus temporibus vel ipsum ex. Numquam fuga non 
</div>



<ul className='flex gap-x-5 mt-5 text-[20px]'>
         
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


</div>





<div className='flex-1'>




<div className='footerlinks flex gap-x-[64px] justify-end lg:gap-x-[35px] md:gap-x-[75px] pt-7'>

<ul>
<li className='p-[5px]'>Links</li>
<li className='p-[5px]'>HomePage</li>
<li className='p-[5px]'>Blog</li>
<li className='p-[5px]'>About</li>
<li className='p-[5px]'>Contact</li>


</ul>


<ul>
<li className='p-[5px]'>Tags</li>
<li className='p-[5px]'>Style</li>
<li className='p-[5px]'>Fashion</li>
<li className='p-[5px]'>Coding</li>
<li className='p-[5px]'>Travel</li>


</ul>


<ul>
<li className='p-[5px]'>Social</li>
<li className='p-[5px]'>Facebook</li>
<li className='p-[5px]'>Instagram</li>
<li className='p-[5px]'>Twitter</li>
<li className='p-[5px]'>YouTube</li>


</ul>





</div>














</div>


    
    
    </div>
    
    </>
  )
}
