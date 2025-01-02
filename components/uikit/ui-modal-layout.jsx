import clsx from "clsx";
import CloseIcon from "./icons/close-icon";

const UiModalLayout = ({children, title, isOpen, setIsOpen}) => {
    return (
        <div onClick={() => {setIsOpen(false)}} className={clsx("modal", {
            "active": isOpen
        })}>
            <div onClick={(e) => {e.stopPropagation()}} className="modal__container">
                <button onClick={() => {setIsOpen(false)}} className="modal__close-btn">
                    <CloseIcon className="modal__close"  />
                </button>

                <h2 className="modal__title">{title}</h2>
                { children }
            </div>
        </div>
    )
}

export default UiModalLayout;