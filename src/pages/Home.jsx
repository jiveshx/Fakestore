// import React from "react";
import Carousel from "../components/Carousel";
import ShopSlide from "../components/ShopSlide";
import InfoSection from "../components/InfoSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Carousel/>
      <ShopSlide/>
      <InfoSection/>
      <ShopSlide slice={[5, 9]} />
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default Home;
