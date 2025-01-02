const UiAccountForm = ({fields, btn}) => {
    return (
        <>
            <div className="account__fields">{fields}</div>
            <div className="account__btn">{btn}</div>
        </>
    )
}

export default UiAccountForm;