import "../assets/css/filter.css";

const FilterJob = () => {
  return (
    <>
      {/* <!-- Add filtering section --> */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="" style={{ borderRadius: "8px", margin:"0 20px" }}>
            <h4 className="filter-title">Find Your Perfect Job</h4>
            <form id="job-filter-form">
              <div className="row g-3">
                <div className="col-md-4 col-lg-3">
                  <div className="form-floating">
                    <select className="form-select" id="filter-location" defaultValue={""}>
                      <option value="" disabled>
                        Select Location
                      </option>
                      <option value="new-york">New York</option>
                      <option value="los-angeles">Los Angeles</option>
                      <option value="chicago">Chicago</option>
                      <option value="houston">Houston</option>
                      <option value="remote">Remote</option>
                    </select>
                    <label htmlFor="filter-location">
                      <i className="fas fa-map-marker-alt"></i> Location
                    </label>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="form-floating">
                    <select className="form-select" id="filter-salary" defaultValue={""}>
                      <option value="" disabled>
                        Select Salary Range
                      </option>
                      <option value="0-50000">$0 - $50,000</option>
                      <option value="50001-100000">$50,001 - $100,000</option>
                      <option value="100001-150000">$100,001 - $150,000</option>
                      <option value="150001+">$150,001+</option>
                    </select>
                    <label htmlFor="filter-salary">
                      <i className="fas fa-dollar-sign"></i> Salary Range
                    </label>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="filter-experience"
                      placeholder=""
                    />
                    <label htmlFor="filter-experience">
                      <i className="fas fa-briefcase"></i> Experience (years)
                    </label>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="form-floating">
                    <select className="form-select" id="filter-education" defaultValue={""}>
                      <option value="" disabled>
                        Select Education
                      </option>
                      <option value="high-school">High School</option>
                      <option value="associate">Associates Degree</option>
                      <option value="bachelor">Bachelors Degree</option>
                      <option value="master">Masters Degree</option>
                      <option value="doctorate">Doctorate</option>
                    </select>
                    <label htmlFor="filter-education">
                      <i className="fas fa-graduation-cap"></i> Education
                    </label>
                  </div>
                </div>
                <div className="col-md-8 col-lg-9">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="filter-keywords"
                      placeholder=""
                    />
                    <label htmlFor="filter-keywords">
                      <i className="fas fa-search"></i> Keywords
                    </label>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <button type="submit" className="btn btn-primary w-100 h-100">
                    <i className="fas fa-filter"></i> Apply Filters
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterJob;
