import Image from "next/image";
import React from "react";
import about from "../../../public/about.jpg";

export default function page() {
  return (
    <>
      <div className="flex mt-18 ">
        <div className="text-[20px] leading-8">
          Welcome to our blog!
          <br />
          At Blog Name, we are passionate about creating a space where ideas
          flourish, creativity thrives, and knowledge is shared. Our mission is
          to inspire, educate, and entertain our readers through engaging
          content that spans a wide range of topics.
          <br />
          <Image
            src={about}
            height={400}
            width={400}
            className="float-right ml-8 mt-8 mb-8 md:hidden"
          />
          Founded on the belief that everyone has a story to tell and a unique
          perspective to share, we strive to be a platform that celebrates
          diversity, fosters in8clusivity, and encourages dialogue. Whether
          you're a seasoned expert or a curious enthusiast, there's something
          for everyone here.
          <br />
          Our team is comprised of dedicated writers, thinkers, and creators are
          committed to delivering high-quality, thought-provoking content that
          resonates with our audience. From insightful articles and in-depth
          analyses to captivating stories and helpful tutorials, we aim to spark
          inspiration and ignite curiosity in our readers.
          <br />
          But Blog Name is more than just a collection of words on a screen.
          It's a community—a place where like-minded individuals come together
          to connect, collaborate, and learn from one another. We value the
          relationships we've built with our readers and cherish the
          conversations that take place within our digital walls.
          <br />
          As we continue to evolve and grow, our commitment to excellence
          remains unwavering. We are constantly exploring new ideas,
          experimenting with different formats, and seeking out fresh
          perspectives to keep our content relevant, engaging, and impactful.
          <br />
        </div>
      </div>
    </>
  );
}
