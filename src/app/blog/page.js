import RecentPosts from "@/Components/RecentPosts";
import Footer from "@/Components/Footer";
import StyleBlog from "@/Components/StyleBlog";
import { Pagination } from "@/Components/ui/Pagination";

export default function blog({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const cat = searchParams.cat;

  return (
    <>
      <StyleBlog cat={cat} />
      <RecentPosts page={page} cat={cat} />
      <div className="mt-12">
        <Pagination page={page} cat={cat} />
      </div>
      <Footer />
    </>
  );
}
