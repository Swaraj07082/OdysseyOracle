"use client";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loader from "@/Components/Loader";
import Footer from "@/Components/Footer";
import React, { useEffect, useState } from "react";
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
import { app } from "@/utils/firbase";
import { resolve } from "url";

const storage = getStorage(app);

export default function page() {
  const [open, setopen] = useState(false);
  const [file, setfile] = useState(null);
  const [value, setvalue] = useState("");
  const [media, setMedia] = useState("");
  const [title ,setTitle] = useState("")
 

  useEffect( ()=>{
    const upload =()=>{
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);

      // const storageRef = ref(storage, file.name);
      // cant use file.name cause suppose if we upload a same file twice it will have the same name so won't be able to differ between them that's why added a timestamp above by using Date().getTime


const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      // console.log('File available at', downloadURL);
      setMedia(downloadURL)
    });
  }
);
    }

    file && upload();
    }, [file])

  const router = useRouter();

  const { status } = useSession();
  

  // console.log(data,status);

  if (status === "loading") {
    // return <div>Loading...</div>;
    return <Loader/>
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

const handleSubmit =async()=>{
const res = await fetch('/api/posts' , 
{
  method : 'POST',
  body : JSON.stringify({

    title,
    desc :value,
    img: media,
    slug : slugify(title),
    catslug : "fashion"
    
  })
})

console.log(res)

if (res.status === 200) {
  const data = await res.json();
  // console.log(data)
  router.push(`/posts/${data.slug}`);
}

}   



  return (
    <>
      {/* <div className=" absolute bottom-[550px] text-[20px] right-[200px] bg-[green] w-[100px] rounded-md text-center text-[#b3b3b1]">
        <button onClick={handleSubmit}>Publish</button>
      </div> */}

      <div className="h-[570px] flex items-left flex-col justify-around ">
      

        <div className="">
          <input
            type="text"
            placeholder="Title"
            className="h-[50px] md:w-[100px] text-5xl italic bg-transparent outline-none "
            onChange={e=>setTitle(e.target.value)}
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
        <div className="  text-[20px] sm:self-center self-end bg-[green] w-[100px] rounded-md text-center text-[#b3b3b1]">
        <button onClick={handleSubmit}>Publish</button>
      </div>
      </div>
    </>
  );
}
