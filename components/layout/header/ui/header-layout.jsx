const HeaderLayout = ({children, burger}) => {
    return (
        <header className="header">
            <div className="container">{children}</div>
            {burger}
        </header>
    )
}

export default HeaderLayout;