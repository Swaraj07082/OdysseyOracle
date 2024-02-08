import Link from "next/link";
import React from "react";

export default function CommentBox() {
  const status = "authenticated";
  return (
    <>
      <div className="flex justify-left gap-x-10">
        {status === "authenticated" ? (
          <>
            <textarea
              className="w-[80%] h-[120px]"
              placeholder="Write a Comment"
            ></textarea>

            <button className="bg-[green] h-[50px] w-[80px]  self-center ">
              {" "}
              Send{" "}
            </button>
          </>
        ) : (
          <Link href={"/login"}> Login to Write a Comment</Link>
        )}
      </div>
    </>
  );
}
