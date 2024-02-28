'use client'

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { Avatar } from "@mui/material";

const fetcher = async (url) =>{

  const res = await fetch('url');

  const data = await res.json()

  if(!res.ok){
    throw new Error('Something Went Wrong!')
  }

  return data;

}


export default function CommentBox({postSlug}) {
  // const status= useSession()
  // this won't work 
  const {status} = useSession();

  const {data , isLoading} = useSWR(`http://localhost:3000/api/comments/postSlug=${postSlug}`, fetcher)
  console.log(data);
  return (
    <>

    <div className="flex flex-col gap-y-[70px]">

      <div className="flex justify-left gap-x-10">
        {status === "authenticated" ? (
          <>
            <textarea
              className="w-[80%] h-[120px]"
              placeholder="Write a Comment"
            ></textarea>

            <button className="bg-[green] h-[50px] w-[80px]  self-center ">
              {" "}
              Send{" "}
            </button>
          </>
        ) : (
          <Link href={"/login"}> Login to Write a Comment</Link>
          )}
      </div>



<div className="flex gap-y-[60px] flex-col">

{isLoading ? 'loading' : data.map(item=>(
 <div className="flex  gap-x-3">
 <Avatar sx={{ width: 40, height: 40 }} />

 <div className="flex flex-col">
   <p className="text-[15px]">Swaraj Mali</p>
   <p className="text-[15px]">8th February , 2023</p>
   <div>
     <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Obcaecati ipsa placeat ab cum adipisci architecto molestias
       sequi consectetur provident fugiat.
     </p>
   </div>
 </div>
</div>

))}  
      {/* <div className="flex  gap-x-3">
            <Avatar sx={{ width: 40, height: 40 }} />

            <div className="flex flex-col">
              <p className="text-[15px]">Swaraj Mali</p>
              <p className="text-[15px]">8th February , 2023</p>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati ipsa placeat ab cum adipisci architecto molestias
                  sequi consectetur provident fugiat.
                </p>
              </div>
            </div>
          </div> */}
         
</div>
          </div>
    </>
  );
}
