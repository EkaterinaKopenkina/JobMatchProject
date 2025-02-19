import UiField from "../../uikit/form/ui/ui-field";

export const regFields = [
    <UiField key={1}
        type="text"
        id="reg-firm_name"
        name="name"
        placeholder="Введите название фирмы"
        label="Название фирмы:"
    />,
    <UiField key={2}
        type="email"
        id="reg-firm_email"
        name="email"
        placeholder="Введите почту"
        label="Почта:"
    />,
    <UiField key={3}
        type="text"
        id="reg-firm_address"
        name="email"
        placeholder="Введите адрес"
        label="Адрес:"
    />,
    <UiField key={4}
        type="password"
        id="reg-firm_pass"
        name="password"
        placeholder="Введите пароль"
        label="Пароль:"
    />,
];

export const regInitialValues = {
    name: "", 
    email: "", 
    address: "", 
    password: "",
}