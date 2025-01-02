import Link from "next/link"

const UiRegistrationForm = ({fields, btn}) => {
    return (
        <>
            <div className="auth__fields">{fields}</div>
        
            <div className="auth__reg">
                После того, как зарегистрируетесь
                <Link href="/login" className="auth__reg-btn">Войдите</Link>
            </div>

            <div className="auth__btn">{btn}</div>
        </>
    )
}

export default UiRegistrationForm;