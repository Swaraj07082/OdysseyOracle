"use client";

import Footer from "@/Components/Footer";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import plus from "../../../public/plus.jpg";
import Image from "next/image";

export default function page() {
  const [open, setopen] = useState(false);
  const [value, setvalue] = useState("");

  return (
    <>
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
              src={plus}
              height={50}
              width={50}
              style={{ borderRadius: "300px" }}
            />
          </button>
          {open && (
            <>
              <button>a</button>
              <button>b</button>
              <button>c</button>
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
