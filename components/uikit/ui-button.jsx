const UiButton = ({text, values}) => {
    return (
        <button className="btn" disabled={values?.isSubmitting}>{text}</button>
    )
}

export default UiButton;