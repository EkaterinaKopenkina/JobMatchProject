const UiShortItem = ({href, className, title, subtitle, rating, edit, close, router}) => {
    return (
        <div onClick={() => {router.push(href)}} className={`${className} short-item`}>
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
        </div>
    )
}

export default UiShortItem;