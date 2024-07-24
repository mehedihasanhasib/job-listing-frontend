
import Carousel from "./components/Carousel";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import SearchHome from "./components/SearchHome";


function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <Carousel />
      <SearchHome />
      <Category />
    </div>
  );
}

export default App;
