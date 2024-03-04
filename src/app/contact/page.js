import { Avatar } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import linkedin from '../../../public/linkedin.png'
import twitter from '../../../public/twitter.png'
import github from '../../../public/github.png'


export default function page() {
  return (
    <>
<div className='flex flex-col gap-y-12'>
       














    <div>
<p>Contact Us</p>
    </div>
    
<div className='flex'>


<div>

    <Image src={linkedin}  className='mix-blend-multiply'/>
</div>

<div>
<Image src={twitter} className='mix-blend-multiply'/>


</div>

<div>

<Image src={github} className='mix-blend-multiply'/>

</div>

</div>























</div>
    </>
      
  )
}
