import JobTile from "./components/JobTile"
import jobs from "../public/data.json"
function App() {
  return <>
    <picture>
      <source srcSet="./images/bg-header-desktop.svg" media="(min-width:600px)" />
      <img className="w-full bg-darkCyan object-contain" src="./images/bg-header-mobile.svg" alt="product-image" />
    </picture>
    <div className="grid place-content-center bg-lightGrayCyanBG">
      {jobs.map(i => <JobTile jobtileProp={i} />)}
    </div>
  </>
}

export default App
