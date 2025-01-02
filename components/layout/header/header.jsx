import Image from "next/image";
import Link from "next/link";

import logoSrc from "./img/logo.svg";
import profileSrc from "./img/profile.svg"

const isAuth = false;

const Header = ({burger}) => {
    return (
        <header className="header">
            <div className="container">
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
            </div>

            {burger}
        </header>
    )
}

export default Header;