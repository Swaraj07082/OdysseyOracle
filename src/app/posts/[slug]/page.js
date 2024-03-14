import React from "react";
import SinglePostFeatured from "@/Components/SinglePostFeatured";

import SinglePostSideBar from "@/Components/SinglePostSideBar";
import Footer from "@/Components/Footer";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
    // by default nextjs caches your request , we dont wanna do that cause it's just a project
  });

  if (!res.ok) {
    throw new Error("Failed");
  } else {
    return res.json();
  }
};

export default async function page({ params }) {
  // console.log(params.singlepost);
  // will print whatever written in the url , it should be params.dynamicfilename for it to work

  // const obj = { a: 1, b: 2 };
  // const { b , a } = obj;

  // console.log( b , a);
  // this works

  // const obj = { a: 1, b: 2 };
  // const { a, b } = obj;

  // console.log( a , b);
  // this also works

  // const obj = { a: 1, b: 2 };
  // const { c , b } = obj;

  // console.log( c , b);
  // this doesn't

  // console.log(params)
  const { slug } = params;
  //   console.log(slug)

  const data = await getData(slug);
  console.log(data);
  // const image = `/${data.post.img}`
  // console.log(image)

  return (
    <>
      <SinglePostFeatured
        title={data.post.title}
        img={data.post.img}
        name={data.post.user.name}
        createdAt={data.post.createdAt}
      />

      <SinglePostSideBar img={data.post.img} desc={data.post.desc.slice(3, -4)} postSlug={slug} />
      <Footer />
    </>
  );
}
