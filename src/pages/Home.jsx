import Carousel from "../components/Carousel";
import SearchHome from "../components/SearchHome";
import Category from "../components/Category";
import JobList from "../components/JobList";
import { useEffect } from "react";

const Home = () => {
  useEffect(()=>{
    console.log("rendered");
  }, [])
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
