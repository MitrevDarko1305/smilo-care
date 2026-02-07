"use client";


import Navbar from "../Navbar/Navbar";
import FaqImage from "../FrequentlyAskedQuestionsSection/FAQImage";
import ColumnPosts from "../BlogSection/PremiumBlog";
import Footer from "../Footer/FooterBasic";

export default function Page() {
  return (
    <>
      <Navbar />
      <ColumnPosts />
       <FaqImage/>
       <Footer/>
    </>
  );
}
