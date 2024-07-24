import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
        >
          <h1 className="m-0 text-primary">JobEntry</h1>
        </NavLink>

        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="/jobs" className="nav-item nav-link">
              Jobs
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/login" className="nav-item nav-link">
              Login
            </NavLink>
            {/* <div className="nav-item dropdown">
              <a
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Jobs
              </a>
              <div className="dropdown-menu rounded-0 m-0">
                <a to="job-list.html" className="dropdown-item">
                  Job List
                </a>
                <a to="job-detail.html" className="dropdown-item">
                  Job Detail
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu rounded-0 m-0">
                <a to="category.html" className="dropdown-item">
                  Job Category
                </a>
                <a to="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a to="404.html" className="dropdown-item">
                  404
                </a>
              </div>
            </div> */}
            
          </div>
          <NavLink
            to="/login"
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            Login<i className="fa fa-arrow-right ms-3"></i>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
