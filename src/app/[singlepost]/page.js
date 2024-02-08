import React from "react";
import SinglePostFeatured from "@/Components/SinglePostFeatured";

import SinglePostSideBar from "@/Components/SinglePostSideBar";
import Footer from "@/Components/Footer";

export default function page() {
  return (
    <>
      <SinglePostFeatured />
      <SinglePostSideBar />
      <Footer />
    </>
  );
}
