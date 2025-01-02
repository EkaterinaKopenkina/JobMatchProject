import Link from "next/link";

const UiShortItem = ({href, className, title, subtitle, rating, edit, close}) => {
    return (
        <Link href={href} className={`${className} short-item`}>
            <div className="short-item__inner">
                <div className="short-item__icons">
                    {rating}
                    {edit}
                    {close}
                </div>
                <div className="short-item__info">
                    <div className="short-item__title-container">
                        <h3 className="short-item__title">{title}</h3>
                    </div>
                    
                    <p className="short-item__subtitle">{subtitle}</p>
                </div>
            </div>
        </Link>
    )
}

export default UiShortItem;