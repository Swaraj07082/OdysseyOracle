import Image from "next/image";
import React from "react";
import Link from "next/link";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  } else {
    return res.json();
  }
};

const data = await getData();
const { popular } = data;
const item = popular[0];

export default function Featured() {
  return (
    <div>
      <div class=" title text-7xl text-center p-8 cs:text-[25px]">
        Personal narratives shared with warmth and authenticity.
      </div>

      <div class="flex flex-row pt-[40px] cs:pt-[20px]">
        <div className="image">
          <Image
          alt="Image Not Found"
            loading="eager"
            src={item.img}
            height={500}
            width={500}
            className="object-cover "
          />
        </div>
        <div className="postitle overflow-hidden flex-1 pl-[25px] pr-[20px] text-left pt-[32px]">
          <p class="text-2xl pb-[20px] cs:text-[18px] cs:leading-[22px]">
            {item.title}
          </p>

          <p class="pb-[20px] text-[#626262] cs:text-[15px]">{item.desc}</p>

          <button className="bg-[#e2e2e2] text-black h-12 w-[110px] rounded-md cs:text-[14px] cs:h-8 cs:w-[85px]">
            <Link href={`/posts/${item.title}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
