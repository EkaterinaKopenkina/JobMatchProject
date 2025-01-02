import StarIcon from "./icons/star-icon";

const Rating = ({className, rating}) => {
    return (
        <div className={`${className} rating`}>
            {rating.map((star, i) => <StarIcon key={i} className="rating__star"/>)}
        </div>
    )
}

export default Rating;