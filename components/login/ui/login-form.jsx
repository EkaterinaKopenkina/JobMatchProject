import { onClickRegBtn } from "../model/ui-functions";

const LoginForm = ({fields, btn, setIsOpen}) => {
    return (
        <>
            <div className="auth__fields">{fields}</div>
        
            <div className="auth__reg">
                Еще нет аккаунта? 
                <button onClick={(e) => {onClickRegBtn(e, setIsOpen)}} className="auth__reg-btn">Зарегистрирутейсь</button>
            </div>

            <div className="auth__btn">{btn}</div>
        </>
    )
}

export default LoginForm;