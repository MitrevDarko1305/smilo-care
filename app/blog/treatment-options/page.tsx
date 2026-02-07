
"use client";

import Navbar from "@/app/Navbar/Navbar";

import Footer from "@/app/Footer/FooterBasic";
import BlogArticle from "@/app/BlogSection/BlogComponent1";
import PartnerCTA from "@/app/CTASection/CTA";

export default function Page() {
  return (
    <>
     <Navbar/>
     <BlogArticle/>
     <PartnerCTA/>
     <Footer/>
    </>
  );
}