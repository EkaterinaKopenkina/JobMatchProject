import Link from "next/link"
import Image from "next/image";

const HeaderInner = ({isAuth, logoSrc, profileSrc}) => {
    return (
        <div className="header__inner">
            <Link href="/">
                <Image className="header__logo" src={logoSrc} alt="Лого"/>
            </Link>

            <div className="header__company">JobMatch</div>
        
            <Link className="header__login" href="/login">
                <Image className="header__profile" src={profileSrc} alt="Аккаунт"/>
                { isAuth || "Вход" }
            </Link>
        </div>
    )
}

export default HeaderInner;