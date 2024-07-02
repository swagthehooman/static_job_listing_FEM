const LanguagesButton = ({ prop, showCross, onClickFilterButton, onClickCrossButton }: { prop: string, showCross?: null | boolean, onClickFilterButton?: (value: string) => void, onClickCrossButton?: (value: string) => void }) => {
    return (
        <div className="flex">
            <button className="text-darkCyan font-semibold bg-lightGrayCyanBG p-2 rounded-md" onClick={() => onClickFilterButton?.(prop)}>{prop}</button>
            {showCross && <button className="bg-darkCyan p-2 rounded-r-md" onClick={() => onClickCrossButton?.(prop)}><img src="./images/icon-remove.svg" /></button>}
        </div>
    )
}

export default LanguagesButton