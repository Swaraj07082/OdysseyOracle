"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
import { Avatar } from "@mui/material";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Something Went Wrong!");
  }

  return data;
};
export const dynamic = 'force-dynamic'

export default function CommentBox({ postSlug }) {
  console.log(postSlug);
  const { status } = useSession();
  // to fetch in use client , use useSWR
  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };
  return (
    <>
      <div className="flex flex-col gap-y-[70px]">
        <div className="flex justify-left gap-x-10">
          {status === "authenticated" ? (
            <>
              <textarea
                className="w-[80%] h-[120px]"
                placeholder="Write a Comment"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>

              <button
                className="bg-[green] h-[50px] w-[80px]  self-center "
                onClick={handleSubmit}
              >
                {" "}
                Send{" "}
              </button>
            </>
          ) : (
            <Link href={"/login"}> Login to Write a Comment</Link>
          )}
        </div>

        <div className="flex gap-y-[60px] flex-col">
          {isLoading
            ? "loading"
            : data.map((item) => (
                <div key={item.img} className="flex  gap-x-3">
                  <Avatar sx={{ width: 40, height: 40 }} />

                  <div className="flex flex-col">
                    <p className="text-[15px]">Swaraj Mali</p>
                    <p className="text-[15px]">8th February , 2023</p>
                    <div>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
