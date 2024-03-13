import React from "react";
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default function StyleBlog({ cat }) {
  const capcat = capitalizeFirstLetter(cat);
  return (
    <div className="bg-[coral] font-semibold h-10 text-center text-[25px]">
      {capcat} Blog
    </div>
  );
}
