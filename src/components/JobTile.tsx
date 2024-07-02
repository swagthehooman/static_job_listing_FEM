import LanguagesButton from "./LanguagesButton"

const JobTile = ({ jobtileProp, onClickButton }: { jobtileProp: jobtile, onClickButton: (value: string) => void }) => {
    return (
        <div className="w-[90%] ml-4 relative mt-16 border-l-darkCyan border-l-8 p-4 pt-8 rounded-md shadow-md bg-white min-[600px]:flex min-[600px]:w-auto min-[600px]:item-center min-[600px]:pt-4 min-[600px]:justify-between" key={jobtileProp.id}>
            <img src={jobtileProp.logo} alt="companyLogo" className="w-12 h-12 absolute -top-[10%] min-[600px]:top-1/2 min-[600px]:-translate-y-1/2 min-[600px]:w-20 min-[600px]:h-20" />
            <div className="flex flex-col gap-2 min-[600px]:justify-between min-[600px]:ml-24">
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
            <div className="flex gap-2 flex-wrap min-[600px]:flex-nowrap min-[600px]:items-center">
                <LanguagesButton prop={jobtileProp.role} onClickFilterButton={onClickButton} />
                <LanguagesButton prop={jobtileProp.level} onClickFilterButton={onClickButton} />
                {jobtileProp.languages.map(i => <LanguagesButton key={jobtileProp.id + i} prop={i} onClickFilterButton={onClickButton} />)}
                {jobtileProp.tools.map(i => <LanguagesButton key={jobtileProp.id + i} prop={i} onClickFilterButton={onClickButton} />)}
            </div>
        </div>
    )
}

export default JobTile