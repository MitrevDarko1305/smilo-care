"use client";

import Navbar from "@/app/Navbar/Navbar";
import FaqImage from "@/app/FrequentlyAskedQuestionsSection/FAQImage";
import Footer from "@/app/Footer/FooterBasic";
import BlogArticleProcess from "@/app/BlogSection/BlogComponent3";
import PartnerCTA from "@/app/CTASection/CTA";


export default function Page() {
  return (
    <>
     <Navbar/>
     <BlogArticleProcess/>
     <PartnerCTA/>
     <Footer/>
    </>
  );
}