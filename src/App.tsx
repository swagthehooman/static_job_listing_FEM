import JobTile from "./components/JobTile"
import FilterBox from "./components/FilterBox"
import jobs from "../public/data.json"
import { useEffect, useState } from "react"

function App() {

  const [filters, setFilters] = useState<string[]>([]);

  const handleFilterSelection = (value: string) => {
    setFilters((prev: string[]) => {
      prev.push(value)
      let newFilterSet = Array.from(new Set(prev))
      return newFilterSet;
    })
  }

  const handleFilterRemoval = (value: string) => {
    setFilters((prev: string[]) => {
      let newFilter: string[] = prev.filter(i => i !== value)
      return newFilter;
    })
  }

  useEffect(() => {
    console.log({ filters: filters })
  }, [filters])
  return <div className="relative">
    <picture>
      <source srcSet="./images/bg-header-desktop.svg" media="(min-width:600px)" />
      <img className="w-full bg-darkCyan object-contain" src="./images/bg-header-mobile.svg" alt="product-image" />
    </picture>
    <div className="grid place-content-center relative bg-lightGrayCyanBG">
      {filters.length > 0 && <div className="bg-white absolute -top-6 z-10 left-1/2 -translate-x-1/2 p-2 rounded-sm flex flex-wrap gap-4">
        <FilterBox props={filters} onClickCross={handleFilterRemoval} />
      </div>}
      {jobs.map(i => <JobTile jobtileProp={i} onClickButton={handleFilterSelection} />)}
    </div>
  </div>
}

export default App
