import Navbar from "@/Components/Navbar";
import styles from "../app/globals.css";
import Featured from "@/Components/Featured";
import CategoryList from "@/Components/CategoryList";
import RecentPosts from "@/Components/RecentPosts";
import PaginationDemo from "@/Components/Pagination";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Featured />
      <CategoryList />
      <RecentPosts />
      <div className="mt-12">
        <PaginationDemo />
      </div>
      <Footer/>

    </>
  );
}
