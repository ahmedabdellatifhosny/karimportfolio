"use client";
import Menu from "@/components/menu/Menu";
import Hero from "@/components/hero/Hero";
import QualityService from "@/components/quality-service/QualityService";
import RecentWork from "@/components/recent-work/RecentWork";
import Education from "@/components/education/Education";
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Loader from "@/components/loader/Loader";
import ScrollTop from "@/components/scrollTop/ScrollTop";
import Languages from "@/components/languages/languages";
import { useState, useEffect } from "react";
import 'aos/dist/aos.css';
import "../../src/app/sass-globals/globals.css";

import '../i18n'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Menu />
          <Hero />
          <QualityService />
          <RecentWork />
          <Education />
          <Skills />
          <Contact />
          <Footer />
          <ScrollTop />
          <Languages/>
        </>
      )}
    </>
  );
}
