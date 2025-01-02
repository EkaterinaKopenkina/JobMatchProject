import UiField from "../../uikit/form/ui/ui-field";

export const loginFields = [
    <UiField key={1}
        type="email"
        id="login_email"
        name="email"
        placeholder="Введите почту"
        label="Почта:"
    />,
    <UiField key={2}
        type="password"
        id="login_pass"
        name="password"
        placeholder="Введите пароль"
        label="Пароль:"
    />,
];

export const loginInitialValues = {
    email: "", 
    password: "",
}