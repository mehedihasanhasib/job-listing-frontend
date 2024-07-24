import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";


function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
