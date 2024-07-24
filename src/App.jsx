import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
