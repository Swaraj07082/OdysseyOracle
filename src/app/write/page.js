"use client";

import Footer from "@/Components/Footer";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import plus from "../../../public/plus.jpg";

import Plus from "../../../public/Plus.png";
import Photo from "../../../public/Photo.png";
import Upload from "../../../public/Upload.png";
import Video from "../../../public/Video.png";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
  const [file, setfile] = useState(null);
  const [open, setopen] = useState(false);
  const [value, setvalue] = useState("");

  const router = useRouter();

  const { status } = useSession();

  // console.log(data,status);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <>
      <div className=" absolute bottom-[500px] text-[20px] right-[200px] bg-[green] w-[100px] rounded-md text-center text-[#b3b3b1]">
        <button>Publish</button>
      </div>

      <div className="h-[570px] flex items-left flex-col justify-around ">
        <div className="">
          <input
            type="text"
            placeholder="Title"
            className="h-[50px] text-5xl italic bg-transparent outline-none "
          />
        </div>

        <div className="">
          <button onClick={() => setopen(!open)}>
            {" "}
            <Image
              className="mix-blend-multiply"
              src={Plus}
              height={50}
              width={50}
              style={{ borderRadius: "300px" }}
            />
          </button>
          {open && (
            <>
              <button>
                <label htmlFor="Photo">
                  <Image
                    className="mix-blend-multiply"
                    src={Photo}
                    height={50}
                    width={50}
                    style={{ borderRadius: "300px" }}
                  />
                </label>
                <input
                  type="file"
                  id="Photo"
                  className="hidden"
                  onChange={(e) => e.target.files[0]}
                />
              </button>
              <button>
                <Image
                  className="mix-blend-multiply"
                  src={Upload}
                  height={50}
                  width={50}
                  style={{ borderRadius: "300px" }}
                />
              </button>
              <button>
                <Image
                  className="mix-blend-multiply"
                  //  to remove white background from images
                  src={Video}
                  height={50}
                  width={50}
                  style={{ borderRadius: "300px" }}
                />
              </button>
            </>
          )}
        </div>
        <div className=" ">
          <ReactQuill
            theme="snow"
            placeholder="Tell Your Story..."
            value={value}
            onChange={setvalue}
          />
        </div>
      </div>
    </>
  );
}
