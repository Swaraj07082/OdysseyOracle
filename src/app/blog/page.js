import Featured from "@/Components/Featured";
import CategoryList from "@/Components/CategoryList";
import RecentPosts from "@/Components/RecentPosts";
import PaginationDemo from "@/Components/Pagination";
import Footer from "@/Components/Footer";
import StyleBlog from "@/Components/StyleBlog";
import { useSearchParams } from "next/navigation";
import { Pagination } from "@/Components/ui/pagination";

export default function blog({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const cat = searchParams.cat;

  return (
    <>
      {/* <Featured /> */}
      {/* <CategoryList /> */}
      <StyleBlog />
      <RecentPosts page={page} cat={cat} />
      <div className="mt-12">
        <Pagination page={page} cat={cat} />
      </div>
      <Footer />
    </>
  );
}
