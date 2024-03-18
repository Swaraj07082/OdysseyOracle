import Image from "next/image";
import React from "react";
import blog from "../../public/blog.jpg";

export default function Featured() {
  return (
    <div>
      <div class=" title text-7xl text-center p-8 cs:text-[25px]">
        Personal narratives shared with warmth and authenticity.
      </div>

      <div class="flex flex-row pt-[40px] cs:pt-[20px]">
        <div className="image">
          <Image
          loading="eager"
            src={blog}
            height={500}
            width={500}
            className="object-cover "
          />
        </div>
        <div className="postitle overflow-hidden flex-1 pl-[25px] pr-[20px] text-left pt-[32px]">
          <p class="text-2xl pb-[20px] cs:text-[18px] cs:leading-[22px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            eaque?
          </p>

          <p class="pb-[20px] text-[#626262] cs:text-[15px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsa
            nihil accusantium illo at quia perferendis maxime.
            {/* dignissimos perferendis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cupiditate, officiis exercitationem praesentium
            reiciendis excepturi dicta nulla vel mollitia fugit adipisci. */}
          </p>

          <button className="bg-[#e2e2e2] text-black h-12 w-[110px] rounded-md cs:text-[14px] cs:h-8 cs:w-[85px]">
            Read More
          </button>
        </div>

        {/* <div className='description '>

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsa nihil accusantium illo at quia perferendis maxime. Omnis, dignissimos perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officiis exercitationem praesentium reiciendis excepturi dicta nulla vel mollitia fugit adipisci.

</div>  */}
      </div>
    </div>
  );
}