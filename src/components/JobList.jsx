
import FullTime from "./tabs/FullTime";
import Featured from "./tabs/Featured";
import PartTime from "./tabs/PrtTime";
import BrowseMore from "./BrowseMore";

const JobList = () => {
  return (
    <>
    
      <div className="container-xxl">
        <div className="container">
          {/* <h1 className="text-center mb-5" data-wow-delay="0.1s">
            Job Listing
          </h1> */}
          <div
            className="tab-className text-center"
            data-wow-delay="0.3s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  href="#featured"
                >
                  <h6 className="mt-n1 mb-0">Featured</h6>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  href="#full-time"
                >
                  <h6 className="mt-n1 mb-0">Full Time</h6>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  href="#part-time"
                >
                  <h6 className="mt-n1 mb-0">Part Time</h6>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <Featured />
              <FullTime />
              <PartTime />
              <BrowseMore />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobList;
