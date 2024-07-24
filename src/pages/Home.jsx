import Carousel from "../components/Carousel";
import SearchHome from "../components/SearchHome";
import Category from "../components/Category";
import HomeAboutUs from "../components/HomeAboutUs";
import JobList from "../components/JobList";


const Home = () => {
  return (
    <>
      <Carousel />
      <SearchHome />
      <Category />
      <HomeAboutUs />
      <JobList />
    </>
  );
};

export default Home;
