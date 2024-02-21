import Navbar from "@/Components/Navbar";
import styles from "../app/globals.css";
import Featured from "@/Components/Featured";
import CategoryList from "@/Components/CategoryList";
import RecentPosts from "@/Components/RecentPosts";
import PaginationDemo from "@/Components/Pagination";
import Footer from "@/Components/Footer";
import { count } from "console";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  // console.log(searchParams)
  // console.log(page)
  // searchparams should be int so converting it to int

  // const POST_PER_PAGE = 2;
  // hasPrev = POST_PER_PAGE * (page - 1) > 0;
  // hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <>
      <Featured />
      <CategoryList />
      <RecentPosts page={page} />
      {/* <div className="mt-12">
        <PaginationDemo page={page}  />
      </div> */}
      <Footer />
    </>
  );
}
