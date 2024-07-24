import Carousel from "../components/Carousel";
import SearchHome from "../components/SearchHome";
import Category from "../components/Category";
import JobList from "../components/JobList";

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
