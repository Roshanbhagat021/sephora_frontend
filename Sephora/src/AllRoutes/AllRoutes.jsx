import Navbar from "../Components/Navbar";
import Banner from "../HomePage/Banner";
import Home from "../HomePage/Home";
import { Beauty } from "../HomePage/Beauty";
import { Poster } from "../HomePage/Poster";
import { Selling } from "../HomePage/Selling";
import { Rewards } from "../HomePage/Rewards";
import Featured from "../HomePage/Featured";
import Guidance from "../HomePage/Guidance";
import { Poster2 } from "../HomePage/Poster2";
import Footer from "../HomePage/Footer";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Home heading="Chosen For You" />
      <Home heading="New Arrivals" linkText="Show more" />
      <Beauty />
      <Poster />
      <Selling heading="Selling Fast" />
      <Rewards />
      <Featured title="Featured Categories" para="Shop what’s popular now." />
      <Guidance
        title="Need a Little Guidance?"
        para="Check out our quizzes and buying guides."
      />
      <Poster2 />
      <Footer />
    </>
  );
};

export default AllRoutes;
