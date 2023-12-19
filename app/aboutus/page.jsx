import Footer from "@/components/Footer";
import Aboutus from "@/components/Home/AboutUs";
import Hero from "@/components/aboutus/Hero";
import OutTeam from "@/components/aboutus/OutTeam";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-20">
      <Hero />
      <Aboutus />
      <OutTeam />
      <Footer />
    </div>
  );
};

export default AboutUs;
