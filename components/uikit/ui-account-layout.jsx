const UiAccountLayout = ({title, children}) => {
    return (
        <section className="account">
            <h1 className="account__title">{title}</h1>
            {children}
        </section>
    )
}

export default UiAccountLayout;