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
  console.log(page);

  return (
    <>
      <Featured />

      <CategoryList />
      <RecentPosts page={page} />
      <Footer />
    </>
  );
}
