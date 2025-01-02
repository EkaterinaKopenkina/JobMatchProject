import CloseIcon from "../../icons/close-icon";

const UiShortClose = () => {
    return (
        <button className="short-item__btn" onClick={(e) => {e.preventDefault()}}>
            <CloseIcon className="short-item__icon" />
        </button>
    )
}

export default UiShortClose;