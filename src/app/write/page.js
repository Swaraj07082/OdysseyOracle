"use client";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
  listAll,
} from "firebase/storage";
import Loader from "@/Components/Loader";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Plus from "../../../public/Plus.png";
import Photo from "../../../public/Photo.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app, storage } from "@/utils/firebase";
import { v4 } from "uuid";
export const dynamic = 'force-dynamic'

export default function Page() {
  const [open, setopen] = useState(false);
  const [value, setvalue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setcategory] = useState("");
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState([]);

  useEffect(() => {
    listAll(ref(storage, "files")).then((imgs) => {
      console.log(imgs);
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    });
  }, []);

  const handleClick = () => {
    {
    }
    if (img !== null) {
      const imgRef = ref(storage, `files/${v4()}`);
      alert("Image is being Uploaded");
      uploadBytes(imgRef, img).then((value) => {
        console.log(value);

        {
        }
        alert("Image Uploaded");
        getDownloadURL(value.ref).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    }
  };

  var media = "";

  img === "" ? (media = "/noimage.jpg") : (media = imgUrl[imgUrl.length - 1]);

  const router = useRouter();

  const { status } = useSession();

  // console.log(data,status);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),

        catslug: category || "culture",
      }),
    });

    console.log(res);

    if (res.status === 200) {
      const data = await res.json();

      router.push(`/posts/${data.slug}`);
    }
  };

  const handleChange = (event) => {
    setcategory(event.target.value);
  };

  return (
    <>
      <div className="h-[570px] flex items-left flex-col justify-around ">
        <div className="">
          <input
            type="text"
            placeholder="Title"
            className="h-[50px] md:w-[100px] text-5xl italic bg-transparent outline-none "
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="">
          <button onClick={() => setopen(!open)}>
            {" "}
            <Image
             alt="Image Not Found"
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
                   alt="Image Not Found"
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
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </button>
            </>
          )}
        </div>
        <div className="ml-3">
          <button
            className="  text-[20px] sm:self-center bg-[green] w-[180px] rounded-md text-center text-[#b3b3b1]"
            onClick={handleClick}
          >
            Upload Image
          </button>
        </div>
        <div className=" ">
          <ReactQuill
            theme="snow"
            placeholder="Tell Your Story..."
            value={value}
            onChange={setvalue}
          />
        </div>
        <div>
          <FormControl className="w-[105px] bg-white rounded-md">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="fashion">Fashion</MenuItem>
              <MenuItem value="travel">Travel</MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="culture">Culture</MenuItem>
              <MenuItem value="coding">Coding</MenuItem>
              <MenuItem value="style">Style</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="text-[20px] sm:self-center self-end bg-[green] w-[100px] rounded-md text-center text-[#b3b3b1]">
          <button onClick={handleSubmit}>Publish</button>
        </div>
      </div>
    </>
  );
}
