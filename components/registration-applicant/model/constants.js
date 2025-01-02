import UiDropdownField from "../../uikit/form/ui/ui-dropdown-field";
import UiField from "../../uikit/form/ui/ui-field";

export const regFields = [
    <UiField key={1}
        type="text"
        id="reg-firm_lastname"
        name="lastname"
        placeholder="Введите фамилию"
        label="Фамилия:"
    />,
    <UiField key={2}
        type="email"
        id="reg-applicant_email"
        name="email"
        placeholder="Введите почту"
        label="Почта:"
    />,
    <UiField key={3}
        type="text"
        id="reg-applicant_name"
        name="name"
        placeholder="Введите имя"
        label="Имя:"
    />,
    <UiField key={4}
        type="password"
        id="reg-applicant_pass"
        name="password"
        placeholder="Введите пароль"
        label="Пароль:"
    />,
    <UiField key={5}
        type="text"
        id="reg-applicant_patronymic"
        name="patronymic"
        placeholder="Введите отчество"
        label="Отчество:"
    />,
    <UiField key={6}
        type="tel"
        id="reg-applicant_phone"
        name="phone"
        placeholder="Введите телефон"
        label="Телефон:"
    />,
    <UiDropdownField key={7}
        type="text"
        id="reg-applicant_gender"
        name="gender"
        placeholder="Выберите пол"
        label="Пол:"
        items={["м", "ж"]}
    />,
    
];

export const regInitialValues = {
    lastname: "", 
    patronymic: "", 
    name: "", 
    email: "", 
    phone: "", 
    password: "", 
    gender: "",
}