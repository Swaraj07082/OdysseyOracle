import Footer from "@/Components/Footer";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex justify-center items-center h-[385px]">
        <div className="flex flex-col gap-y-[70px] justify-center items-center bg-[#24345a] h-[350px] w-[350px] ">
          <button className="bg-[red] w-[50%] h-[10%]">
            {" "}
            Sign in With Google
          </button>
          <button className="bg-[red] w-[50%] h-[10%]">
            {" "}
            Sign in With Github
          </button>
          <button className="bg-[red] w-[50%] h-[10%]">
            {" "}
            Sign in With Facebook
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
