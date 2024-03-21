import React from "react";
import SinglePostFeatured from "@/Components/SinglePostFeatured";

import SinglePostSideBar from "@/Components/SinglePostSideBar";
import Footer from "@/Components/Footer";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  } else {
    return res.json();
  }
};

export default async function page({ params }) {
  const { slug } = params;

  const data = await getData(slug);
  console.log(data);

  return (
    <>
      <SinglePostFeatured
        title={data.post.title}
        img={data.post.img}
        name={data.post.user.name}
        createdAt={data.post.createdAt}
      />

      <SinglePostSideBar
        img={data.post.img}
        desc={data.post.desc.slice(3, -4)}
        postSlug={slug}
      />
      <Footer />
    </>
  );
}
