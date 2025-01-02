import Link from "next/link"
import EditIcon from "../../icons/edit-icon";

const UiShortEdit = ({href}) => {
    return (
        <Link href={href} className="short-item__btn">
            <EditIcon className="short-item__icon" />
        </Link>
    )
}

export default UiShortEdit;