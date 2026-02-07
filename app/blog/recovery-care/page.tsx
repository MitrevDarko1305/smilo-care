
"use client";

import Navbar from "@/app/Navbar/Navbar";
import Footer from "@/app/Footer/FooterBasic";
import BlogArticleClarity from "@/app/BlogSection/BlogComponent2";
import PartnerCTA from "@/app/CTASection/CTA";

export default function Page() {
  return (
    <>
     <Navbar/>
     <BlogArticleClarity/>
     <PartnerCTA/>
     <Footer/>
    </>
  );
}