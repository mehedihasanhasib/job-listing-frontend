import Header from "../components/Header";
import FilterJob from "../components/Jobs/FilterJob";
import JobList from '../components/Jobs/JobList';

export default function Jobs(){
    return(
        <>
            <Header title={"Job List"}/>
            <FilterJob />
            <JobList />
        </>
    )
}