import UiField from "../../uikit/form/ui/ui-field";

const DATA_ACCOUNT = {
    name: "Александр",
    lastname: "Рыжиков",
    patronymic: "Владимирович",
    email: "alex@gmail.com",
    phone: "88005553535",
    password: "12345678"
}

export const accountInitialValues = {
    name: DATA_ACCOUNT.name,
    lastname: DATA_ACCOUNT.lastname,
    patronymic: DATA_ACCOUNT.patronymic,
    email: DATA_ACCOUNT.email,
    phone: DATA_ACCOUNT.phone,
    password: DATA_ACCOUNT.password
}

export const accountFields = [
    <UiField key={1}
        type="text"
        id="account_lastname"
        name="lastname"
        label="Фамилия:"
        placeholder="Введите название Вашей фирмы"
    />,
    <UiField key={2}
        type="email"
        id="account_email"
        name="email"
        label="Почта:"
        placeholder="Введите Вашу почту"
    />,
    <UiField key={3}
        type="lastname"
        id="account_lastname"
        name="lastname"
        label="Имя:"
        placeholder="Введите адрес Вашей фирмы"
    />,
    <UiField key={4}
        type="tel"
        id="account_phone"
        name="phone"
        label="Телефон:"
        placeholder="Введите Ваш пароль"
    />,
    <UiField key={5}
        type="text"
        id="account_patronymic"
        name="patronymic"
        label="Отчество:"
        placeholder="Введите Ваш пароль"
    />,
    <UiField key={6}
        type="password"
        id="account_pass"
        name="password"
        label="Пароль:"
        placeholder="Введите Ваш пароль"
    />,
]