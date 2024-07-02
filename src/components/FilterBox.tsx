import LanguagesButton from "./LanguagesButton"

const FilterBox = ({ props, onClickCross }: { props: string[], onClickCross: (value: string) => void }) => {
    return (
        <>
            {props.map(i => <LanguagesButton prop={i} showCross={true} onClickCrossButton={onClickCross} />)}
        </>
    )
}

export default FilterBox