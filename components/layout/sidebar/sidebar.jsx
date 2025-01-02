import Link from "next/link";
import clsx from 'clsx';

const Sidebar = ({navList, activeItem, burgerState}) => {
    const {isActive, setActive} = burgerState;

    return (
        <aside className={clsx("sidebar", {
            active: isActive
        })}>
            <nav className="sidebar__inner">
                {navList.map((item, i) => 
                    <SidebarItem 
                        isActive={i === activeItem} 
                        setActive={setActive}
                        item={item} 
                        key={i}
                    />
                )}
            </nav>
        </aside>
    )
}

const SidebarItem = ({item, isActive, setActive}) => {
    return (
        <div onClick={() => {setActive(false)}} className={clsx("sidebar__item-container", {
            "active": isActive
        })}>
            <Link href={item.href} className="sidebar__item">{item.name}</Link>
        </div>
    )
}

export default Sidebar;