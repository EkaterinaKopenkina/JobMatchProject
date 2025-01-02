import clsx from "clsx";

const UiFullInfo = ({title, value, isDescription}) => {
    return (
        <div className={clsx('full-item__info', {
            'full-item__info--description': isDescription
        })}>
            <span>{title}:</span> {value}
        </div>
    )
}

export default UiFullInfo;