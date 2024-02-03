
import Featured from "@/Components/Featured";
import CategoryList from "@/Components/CategoryList";
import RecentPosts from "@/Components/RecentPosts";
import PaginationDemo from "@/Components/Pagination";
import Footer from "@/Components/Footer";
import StyleBlog from "@/Components/StyleBlog";

export default function Home() {
  return (
    <>
      {/* <Featured /> */}
      {/* <CategoryList /> */}
      <StyleBlog/>
            <RecentPosts />
      <div className="mt-12">
        <PaginationDemo />
      </div>
      <Footer/>

    </>
  );
}
