import Image from "next/image";
import blog from "../../public/blog.jpg";
import Link from "next/link";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";


// const getData = async (page) => {
//   const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
//     cache: "no-store",
//     // by default nextjs caches your request , we dont wanna do that cause it's just a project
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   } else {
//     return res.json();
//   }
// };

export default async function RecentPosts({page}) {
  // const data = await getData(page);
  return (
    <div className="flex ">
      <div className="flex-[3]">
        <div className="mt-[50px] text-2xl">Recent Posts</div>

        <div className="flex flex-col mt-[50px] gap-y-[55px]">
          <div className="flex">
            <Image
              src={blog}
              height={400}
              width={360}
              className="object-cover xl:hidden"
            />

            <div className="ml-[45px] xl:ml-[0px]">
              <span>02.02.2024</span>
              <span className="ml-[15px]">CULTURE</span>

              <p className="text-2xl mt-[25px] mb-[25px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <p className="mb-[25px] text-[#626262]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam ut rem ipsam quidem tempora magnam error eoseum
                dignissimos eveniet nostrum. Beatae voluptate voluptas ipsa
                officiis eligendi enim.
              </p>
              <Link href={"/"} className="underline">
                Read More
              </Link>
            </div>
          </div>

          <div className="flex">
            <Image
              src={blog}
              height={400}
              width={360}
              className="object-cover  xl:hidden"
            />

            <div className="ml-[45px] xl:ml-[0px]">
              <span>02.02.2024</span>
              <span className="ml-[15px]">CULTURE</span>

              <p className="text-2xl mt-[25px] mb-[25px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <p className="mb-[25px] text-[#626262]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam ut rem ipsam quidem tempora magnam error eoseum
                dignissimos eveniet nostrum. Beatae voluptate voluptas ipsa
                officiis eligendi enim.
              </p>
              <Link href={"/"} className="underline">
                Read More
              </Link>
            </div>
          </div>

          <div className="flex">
            <Image
              src={blog}
              height={400}
              width={360}
              className="object-cover  xl:hidden"
            />

            <div className="ml-[45px] xl:ml-[0px]">
              <span>02.02.2024</span>
              <span className="ml-[15px]">CULTURE</span>

              <p className="text-2xl mt-[25px] mb-[25px] ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <p className="mb-[25px]  text-[#626262]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam ut rem ipsam quidem tempora magnam error eoseum
                dignissimos eveniet nostrum. Beatae voluptate voluptas ipsa
                officiis eligendi enim.
              </p>
              <Link href={"/"} className="underline">
                Read More
              </Link>
            </div>
          </div>

          <div className="flex">
            <Image
              src={blog}
              height={400}
              width={360}
              className="object-cover  xl:hidden"
            />

            <div className="ml-[45px] xl:ml-[0px]">
              <span>02.02.2024</span>
              <span className="ml-[15px]">CULTURE</span>

              <p className="text-2xl mt-[25px] mb-[25px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <p className="mb-[25px] text-[#626262]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam ut rem ipsam quidem tempora magnam error eoseum
                dignissimos eveniet nostrum. Beatae voluptate voluptas ipsa
                officiis eligendi enim.
              </p>
              <Link href={"/"} className="underline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-[1.25] mt-[50px] lg:hidden ">
        <div className="ml-12">What's hot</div>

        <div className="flex flex-col gap-y-[25px] ml-12">
          <p className="text-2xl">Most Popular</p>

          <div>
            <Chip label="Travel" size="small" color="warning" />
            <div className="pt-[8px] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div className="text-[10px] pt-1"> Swaraj - 02.02.2024</div>
          </div>

          <div>
            <Chip label="Travel" size="small" color="warning" />
            <div className="pt-[8px] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div className="text-[10px]  pt-1"> Swaraj - 02.02.2024</div>
          </div>

          <div>
            <Chip label="Travel" size="small" color="warning" />
            <div className="pt-[8px] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div className="text-[10px]  pt-1"> Swaraj - 02.02.2024</div>
          </div>

          <div>
            <Chip label="Travel" size="small" color="warning" />
            <div className="pt-[8px] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div className="text-[10px]  pt-1"> Swaraj - 02.02.2024</div>
          </div>
        </div>

        <div className="mt-[60px] ml-[48px]">Discover By Topic!</div>

        <div className="mt-[0px] ml-[48px] text-2xl">Categories</div>

        <div className="grid ml-[48px] mt-7">
          <div className="bg-[#57c4ff31] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
            Style
          </div>
          <div className="bg-[#da85c731] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
            Fashion
          </div>
          <div className="bg-[#7fb88133] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
            Food
          </div>
          <div className="bg-[#ff795736] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
            Travel
          </div>
          <div className="bg-[#ffb04f45] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
            Culture
          </div>
          <div className="bg-[#5e4fff31] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
            Coding
          </div>
        </div>

        <div className="mt-[60px] ml-[48px]">Choosen by the Editor</div>
        <div className="mt-[0px] ml-[48px] text-2xl"> Editor's Pick</div>

        <div className="flex gap-x-3 ml-[48px] ">
          <div>
            <Avatar sx={{ width: 60, height: 60 }} className="mt-[50px]" />
          </div>

          <div>
            <Chip
              size="small"
              label="travel"
              color="warning"
              className="mt-8"
            />

            <p className="text-[15px] mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <p className="text-[10px] mt-1">Swaraj-02.02.2024</p>
          </div>
        </div>

        <div className="flex gap-x-3  ml-[48px]">
          <div>
            <Avatar sx={{ width: 60, height: 60 }} className="mt-[50px]" />
          </div>

          <div>
            <Chip
              size="small"
              label="travel"
              color="warning"
              className="mt-8"
            />

            <p className="text-[15px] mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <p className="text-[10px] mt-1">Swaraj-02.02.2024</p>
          </div>
        </div>
        <div className="flex gap-x-3  ml-[48px]">
          <div>
            <Avatar sx={{ width: 60, height: 60 }} className="mt-[50px]" />
          </div>

          <div>
            <Chip
              size="small"
              label="travel"
              color="warning"
              className="mt-8"
            />

            <p className="text-[15px] mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <p className="text-[10px] mt-1">Swaraj-02.02.2024</p>
          </div>
        </div>
        <div className="flex gap-x-3 ml-[48px] ">
          <div>
            <Avatar sx={{ width: 60, height: 60 }} className="mt-[50px]" />
          </div>

          <div>
            <Chip
              size="small"
              label="travel"
              color="warning"
              className="mt-8"
            />

            <p className="text-[15px] mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <p className="text-[10px] mt-1">Swaraj-02.02.2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
