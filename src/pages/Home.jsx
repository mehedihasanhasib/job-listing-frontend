import Category from "../components/Home/Category";
import Carousel from "../components/Home/Carousel";
import SearchHome from "../components/Home/SearchHome";
import JobList from "../components/Jobs/JobList";

const Home = () => {
  return (
    <>
      <Carousel />
      <SearchHome />
      <Category />
      <JobList />
    </>
  );
};

export default Home;
