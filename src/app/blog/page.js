
import Featured from "@/Components/Featured";
import CategoryList from "@/Components/CategoryList";
import RecentPosts from "@/Components/RecentPosts";
import PaginationDemo from "@/Components/Pagination";
import Footer from "@/Components/Footer";
import StyleBlog from "@/Components/StyleBlog";

export default function Home({Searchparams}) {
  
const page = parseInt(Searchparams.page)|| 1;

// searchparams should be int so converting it to int

  return (
    <>
      {/* <Featured /> */}
      {/* <CategoryList /> */}
      <StyleBlog/>
            <RecentPosts page={page} />
      <div className="mt-12">
        <PaginationDemo />
      </div>
      <Footer/>

    </>
  );
}
