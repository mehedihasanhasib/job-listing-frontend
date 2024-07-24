import Header from "../components/Header";
import FilterJob from "../components/FilterJob";
import JobList from "../components/JobList";

export default function Jobs(){
    return(
        <>
            <Header title={"Job List"}/>
            <FilterJob />
            <JobList />
        </>
    )
}