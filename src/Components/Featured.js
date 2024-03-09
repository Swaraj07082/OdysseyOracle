import Image from "next/image";
import React from "react";
import blog from "../../public/blog.jpg";
import Link from "next/link";

export default function Featured() {
  return (
    <>
      {/* new ui */}
      <div className="flex  mt-14 ml-24 mr-24">
        <div className="">
          <Image height={600} width={680} objectFit="contain" src={blog} />
        </div>

        <div className=" border-solid border-black border-4 z-10 h-[400px] w-[650px] relative top-6 bg-white right-16 flex flex-col text-center justify-center gap-y-[30px] p-10">
          <p>FASHION</p>
          <p className=" font-grotesque text-[38px] font-bold">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <Link href="/" className=" underline">
            READ MORE
          </Link>
        </div>
      </div>

      <div>
        <div class=" title text-7xl text-center p-8 cs:text-[25px]">
          Personal narratives shared with warmth and authenticity.
        </div>

        <div class="flex flex-row pt-[40px] cs:pt-[20px]">
          <div className="image">
            <Image
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
    </>
  );
}
