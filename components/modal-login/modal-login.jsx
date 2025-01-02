import UiButton from "../uikit/ui-button";
import UiModalLayout from "../uikit/ui-modal-layout";
import ModalLoginContent from "./ui/modal-login-content";

const ModalLogin = ({isOpen, setIsOpen}) => {
    return (
        <UiModalLayout setIsOpen={setIsOpen} isOpen={isOpen} title="Выбор роли">
            <ModalLoginContent
                btnFirm={<UiButton text="Фирма" />}
                btnApplicant={<UiButton text="Соискатель" />}
            />
        </UiModalLayout>
    )
}

export default ModalLogin;