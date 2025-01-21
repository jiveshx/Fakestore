
import Carousel from "../components/Carousel";
import ShopSlide from "../components/ShopSlide";
import InfoSection from "../components/InfoSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <Carousel/>
      <ShopSlide/>
      <InfoSection/>
      <ShopSlide/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default Home;
