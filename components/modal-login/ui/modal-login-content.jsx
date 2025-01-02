import Link from "next/link";

const ModalLoginContent = ({btnFirm, btnApplicant}) => {
    return (
        <div className="auth__modal-content">
            <Link href="/registration-firm">{ btnFirm }</Link>
            <Link href="/registration-applicant">{ btnApplicant }</Link>
        </div>
    )
}

export default ModalLoginContent;