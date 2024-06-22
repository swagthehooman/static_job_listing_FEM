import LanguagesButton from "./LanguagesButton"

const JobTile = ({ jobtileProp }: { jobtileProp: jobtile }) => {
    return (
        <div className="w-[90%] ml-4 relative mt-16 border-l-darkCyan border-l-8 p-4 pt-8 rounded-md shadow-md bg-white" key={jobtileProp.id}>
            <img src={jobtileProp.logo} alt="companyLogo" className="w-12 h-12 absolute -top-[10%]" />
            <div className="ml-auto flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                    <p className="text-darkCyan font-semibold">{jobtileProp.company}</p>
                    {jobtileProp.new && <p className="pt-1 pr-2 pl-2 rounded-full bg-darkCyan text-lightGrayCyanFilter text-sm font-semibold">NEW!</p>}
                    {jobtileProp.featured && <p className="pt-1  pr-2 pl-2 rounded-full bg-veryDarkGrayCyan text-lightGrayCyanFilter text-sm font-semibold">FEATURED</p>}
                </div>
                <p className="font-bold">{jobtileProp.position}</p>
                <div className="flex gap-2 text-darkGrayCyan">
                    <p>{jobtileProp.postedAt}</p>
                    <span>&#8226;</span>
                    <p>{jobtileProp.contract}</p>
                    <span>&#8226;</span>
                    <p>{jobtileProp.location}</p>
                </div>
                <hr className="hidden h-2 max-[600px]:block"></hr>
            </div>
            <div className="flex gap-2 flex-wrap">
                <LanguagesButton prop={jobtileProp.role} />
                <LanguagesButton prop={jobtileProp.level} />
                {jobtileProp.languages.map(i => <LanguagesButton prop={i} />)}
                {jobtileProp.tools.map(i => <LanguagesButton prop={i} />)}
            </div>
        </div>
    )
}

export default JobTile