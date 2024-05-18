import Header from "./Header.js";
import Footer from "./Footer";
import Slide  from "./Slider.js";
import Available from "./Available";
import Instagram from "./Instagram";
import Subscribe from "./Subscribe";

function Home() {
  return (
    <>
      <Header />
      <Slide/>
      <Subscribe/>
      <Instagram/>
      <Available/>
      <Footer />
    </>
  );
}

export default Home;
