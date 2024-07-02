import JobTile from "./components/JobTile"
import FilterBox from "./components/FilterBox"
import jobs from "../public/data.json"
import { useEffect, useState } from "react"

function App() {

  // state for filters
  const [filters, setFilters] = useState<string[]>([]);
  // state for job listings
  const [jobDetails, setJobDetails] = useState<jobtile[]>(jobs);

  // onselect of a filter condition, add to filter and filter the job
  const handleFilterSelection = (value: string) => {
    setFilters((prev: string[]) => {
      prev.push(value)
      let newFilterSet: string[] = Array.from(new Set(prev))
      return newFilterSet;
    })
    filterJobs(value)
  }

  // ondeselect of a filter condition, remove from filter and filter the job
  const handleFilterRemoval = (value: string) => {
    setFilters((prev: string[]) => {
      let newFilter: string[] = prev.filter(i => i !== value)
      setJobDetails(jobs)
      newFilter.map((i: string) => filterJobs(i))
      return newFilter;
    })
  }

  // filter current displayed jobs based on selected filters
  const filterJobs = (filter: string,) => {
    setJobDetails((prev: jobtile[]) => {
      let newFilteredJobs: jobtile[] = []
      prev.forEach((j: jobtile) => {
        if (j.role === filter && !newFilteredJobs.find((k: jobtile) => k.id === j.id)) {
          newFilteredJobs.push(j);
        }
        else if (j.level === filter && !newFilteredJobs.find((k: jobtile) => k.id === j.id)) {
          newFilteredJobs.push(j);
        }
        else if (j.languages.includes(filter) && !newFilteredJobs.find((k: jobtile) => k.id === j.id)) {
          newFilteredJobs.push(j);
        }
        else if (j.tools.includes(filter) && !newFilteredJobs.find((k: jobtile) => k.id === j.id)) {
          newFilteredJobs.push(j);
        }
      })
      return newFilteredJobs;
    })
  }


  return <div className="relative">
    <picture>
      <source srcSet="./images/bg-header-desktop.svg" media="(min-width:600px)" />
      <img className="w-full bg-darkCyan object-contain" src="./images/bg-header-mobile.svg" alt="product-image" />
    </picture>
    <div className="grid place-content-center relative bg-lightGrayCyanBG">
      {filters.length > 0 && <div className="bg-white absolute -top-6 z-10 left-1/2 -translate-x-1/2 p-2 rounded-sm flex flex-wrap gap-4 max-[600px]:w-[90%] max-[600px]:-top-20">
        <FilterBox props={filters} onClickCross={handleFilterRemoval} />
      </div>}
      {jobDetails.map(i => <JobTile key={i.id} jobtileProp={i} onClickButton={handleFilterSelection} />)}
    </div>
  </div>
}

export default App
