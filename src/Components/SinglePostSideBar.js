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
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis praesentium cumque iste ipsa possimus provident rerum.
            Velit ipsa cum eligendi distinctio est quas. Reprehenderit quis,
            nostrum asperiores ad quae nisi nam quam! Aliquam sunt quasi totam
            adipisci cum, aut recusandae illum ullam nesciunt praesentium facere
            excepturi ipsum perferendis fuga quam enim magnam neque possimus
            est, sapiente, facilis ratione. Quidem repellat sunt laboriosam
            possimus laudantium ipsa et sit vitae commodi maxime, quod,
            recusandae eligendi! Sed nemo natus similique obcaecati, voluptatem
            sunt perferendis! Quae atque aut nisi natus nulla impedit doloribus,
            cumque repellendus nesciunt sit. Eum quis iure earum, reprehenderit
            ratione corrupti! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Corporis dolore, quia hic odit libero laudantium
            tempore? Laborum quisquam eum quae eveniet non repudiandae sequi
            deserunt. Quam repellat earum, voluptate fuga eligendi natus ipsa
            quo deleniti suscipit, velit dolor veniam sapiente illo
          necessitatibus dolorum, rem omnis nostrum quibusdam odio e7x illum.{" "} */}
            {desc}
          </p>

          <div>
            <p className="text-4xl mb-[4%]">Comments</p>
            <CommentBox postSlug={postSlug} />
          </div>

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
          </div>

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

          <div className="flex  gap-x-3 mb-">
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
    </>
  );
}
