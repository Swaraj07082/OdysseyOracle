import React from "react";
import Image from "next/image";
import blog from "../../public/blog.jpg";
import { Avatar } from "@mui/material";

export default function SinglePostFeatured({ title, name, createdAt, img }) {
  return (
    <>
      <div>
        <div class="flex flex-row pt-[40px]">
          <div className="postitle overflow-hidden flex-1  pr-[20px] text-left pt-[32px]">
            <p class="text-5xl leading-relaxed pb-[20px]">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
              {title}
            </p>

            <div className="flex  gap-x-3 lg:justify-center">
              <Avatar sx={{ width: 50, height: 50 }} />

              <div className="flex flex-col">
                <p>{name}</p>
                <p>{createdAt.slice(0, 10)}</p>
              </div>
            </div>
          </div>
          <div className="image">
            <Image
              src={img}
              alt="Image Not Found"
              height={500}
              width={500}
              className="object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
}
