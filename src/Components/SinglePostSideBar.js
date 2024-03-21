import Image from "next/image";
import blog from "../../public/blog.jpg";
import Link from "next/link";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import CommentBox from "./CommentBox";

export default function SinglePostSideBar({ postSlug, desc }) {
  return (
    <>
      <div className="flex ">
        <div className=" flex flex-[3] flex-col gap-y-[70px] mt-[5.2%]">
          <p>{desc}</p>

          <div>
            <p className="text-4xl mb-[4%]">Comments</p>
            <CommentBox postSlug={postSlug} />
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
            <div className="bg-[#57c4ff31] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center hover:underline">
              Style
            </div>
            <div className="bg-[#da85c731] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center hover:underline">
              Fashion
            </div>
            <div className="bg-[#7fb88133] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center hover:underline">
              Food
            </div>
            <div className="bg-[#ff795736] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center hover:underline">
              Travel
            </div>
            <div className="bg-[#ffb04f45] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center hover:underline">
              Culture
            </div>
            <div className="bg-[#5e4fff31] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center hover:underline">
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
    </>
  );
}
