import Image from "next/image";
import blog from "../../public/blog.jpg";
import Link from "next/link";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import { redirect } from "next/navigation";

import PaginationDemo from "@/Components/Pagination";

// const router = useRouter();

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
      // by default nextjs caches your request , we dont wanna do that cause it's just a project
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  } else {
    return res.json();
  }
};

export default async function RecentPosts({ page, cat }) {
  // console.log(page)
  // console.log(cat)
  const { posts, count, popular } = await getData(page, cat);
  // const count= await getData(cat);

  let parseddata = Array.from(posts);
  console.log(parseddata);
  // console.log(parseddata[0].title)

  const POST_PER_PAGE = 4;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;

  // console.log(data);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <div className="flex ">
        <div className="flex-[3]">
          <div className="mt-[70px] text-2xl cs:mt-[35px] cs:text-[25px] cs:text-center ">
            Recent Posts
          </div>

          <div className="flex flex-col mt-[50px] gap-y-[55px]">
            {parseddata?.map((item) => (
              <div className="flex" key={item.title}>
                <Image
                  src={item.img}
                  // src={blog}
                  height={400}
                  width={360}
                  objectFit="cover"
                  className=" h-[280px] w-[400px] xl:hidden"
                />

                <div className="ml-[45px] xl:ml-[0px] ">
                  <span className="cs:text-[15px]">
                    {item.createdAt.substring(0, 10)}
                  </span>
                  <span className="ml-[15px] cs:text-[15px]">
                    {item.catslug.toUpperCase()}
                  </span>

                  <p className="text-2xl mt-[25px] mb-[25px] cs:text-[15px] cs:mt-[18px] cs:mb-[18px]">
                    {item.title}
                    {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. */}
                  </p>
                  <p className="mb-[25px] text-[#626262] cs:text-[12px] cs:mb-[18px]">
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam ut rem ipsam quidem tempora magnam error eoseum
                    dignissimos eveniet nostrum. Beatae voluptate voluptas ipsa
                    officiis eligendi enim. */}
                    {item.desc}
                  </p>
                  <Link href={`/posts/${item.title}`} className="underline">
                    Read More
                  </Link>
                </div>
              </div>
            ))}

            {/* <div className="flex">
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
            </div> */}
          </div>
        </div>

        <div className="flex-[1.25] mt-[50px] lg:hidden ">
          <div className="ml-12">What's hot</div>

          <div className="flex flex-col gap-y-[25px] ml-12">
            <p className="text-2xl">Most Popular</p>

            {popular.map((item) => (
              <Link href={`/posts/${item.title}`}>
                <div key={item.id}>
                  <Chip
                    label={capitalizeFirstLetter(item.catslug)}
                    size="small"
                    color="warning"
                  />
                  <div className="pt-[8px] text-[15px]">
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}

                    {item.title}
                  </div>

                  <div className="text-[10px] pt-1">
                    {item.createdAt.slice(0, 10)}
                  </div>
                </div>
              </Link>
            ))}
            {/* <div>
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
            </div> */}
          </div>

          <div className="mt-[60px] ml-[48px]">Discover By Topic!</div>

          <div className="mt-[0px] ml-[48px] text-2xl">Categories</div>

          <div className="grid ml-[48px] mt-7">
            <div className="bg-[#57c4ff31] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
              <Link href={`/blog?page=1&cat=style`}>Style</Link>
            </div>
            <div className="bg-[#da85c731] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
              <Link href={`/blog?page=1&cat=fashion`}>Fashion</Link>
            </div>
            <div className="bg-[#7fb88133] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
              <Link href={`/blog?page=1&cat=food`}>Food</Link>
            </div>
            <div className="bg-[#ff795736] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
              <Link href={`/blog?page=1&cat=travel`}>Travel</Link>
            </div>
            <div className="bg-[#ffb04f45] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
              <Link href={`/blog?page=1&cat=culture`}>Culture</Link>
            </div>
            <div className="bg-[#5e4fff31] text-center rounded-md h-[40px] w-[80px] flex items-center justify-center">
              <Link href={`/blog?page=1&cat=coding`}>Coding</Link>
            </div>
          </div>

          <div className="mt-[60px] ml-[48px]">Choosen by the Editor</div>
          <div className="mt-[0px] ml-[48px] text-2xl"> Editor's Pick</div>

          {popular.map((item) => (
            <Link href={`/posts/${item.title}`}>
              <div className="flex gap-x-3 ml-[48px] ">
                <div>
                  <Avatar
                    sx={{ width: 60, height: 60 }}
                    className="mt-[50px]"
                  />
                </div>

                <div>
                  <Chip
                    size="small"
                    label={capitalizeFirstLetter(item.catslug)}
                    color="warning"
                    className="mt-8"
                  />

                  <p className="text-[15px] mt-1">
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                    {item.title}
                  </p>

                  <p className="text-[10px] mt-1">
                    {item.createdAt.slice(0, 10)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          {/* <div className="flex gap-x-3 ml-[48px] ">
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
          </div> */}
        </div>
      </div>

      <PaginationDemo
        page={page}
        cat={cat}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
    </>
  );
}
