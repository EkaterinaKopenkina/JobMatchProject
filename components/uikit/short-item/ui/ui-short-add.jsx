import Link from "next/link";

const UiShortAdd = ({href, className}) => {
    return (
        <Link href={href} className={`${className} short-item__inner`}>
            <div className="short-item__info">
                <div className="short-item__add">+</div>
            </div>
        </Link>
    )
}

export default UiShortAdd;