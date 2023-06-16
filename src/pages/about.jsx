import React from "react";
import TopNav from "../component/Navbar";
import AboutPage from "../component/AboutPage";
import GridBerita from "../component/GridBerita";
import Banner from "../component/Banner";
import Team from "../component/Team";
import Footer from "../component/Footer";

function About() {
  return (
    <>
      <TopNav />
      <AboutPage />
      <GridBerita />
      <Banner />
      <Team />
      <Footer />
    </>
  );
}
export default About;
