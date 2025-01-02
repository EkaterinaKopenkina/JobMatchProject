import { buttons } from "./model/constants";

const UiFullItem = ({rating, name, info, phone, btns}) => {
    return (
        <div className="full-item">
            <div className="full-item__content">
                <div className="full-item__container">
                    {!rating ?? <div className="full-item__rating">{rating}</div>}
                    
                    <div className="full-item__name-container">
                        <h2 className="full-item__name">{name}</h2>
                    </div>

                    {info}

                    <div className="full-item__phone">{phone}</div>
                </div>
            </div>

            <div className="full-item__btns">
                {btns.map(btn => buttons[btn])}
            </div>
        </div>
    )
}

export default UiFullItem;