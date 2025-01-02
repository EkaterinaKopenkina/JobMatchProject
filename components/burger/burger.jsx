import clsx from "clsx";

const Burger = ({isActive, setActive}) => {
    return (
        <button 
            onClick={() => {setActive(!isActive)}}
            className={clsx("burger", {
                active: isActive
            })}
        >
            <div className="burger__item"></div>
        </button>
    )
}

export default Burger;