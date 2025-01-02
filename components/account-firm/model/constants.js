import UiField from "../../uikit/form/ui/ui-field";

const DATA_ACCOUNT = {
    title: 'ООО "Энергосбыт"',
    email: 'energosbit@gmail.com',
    address: 'г.Ярославль, ул.Превомайская, д.2',
    password: '12345678',
}

export const accountInitialValues = {
    title: DATA_ACCOUNT.title,
    email: DATA_ACCOUNT.email,
    address: DATA_ACCOUNT.address,
    password: DATA_ACCOUNT.password,
}

export const accountFields = [
    <UiField key={1}
        type="text"
        id="account_title"
        name="title"
        label="Название:"
        placeholder="Введите название Вашей фирмы"
    />,
    <UiField key={2}
        type="text"
        id="account_email"
        name="email"
        label="Почта:"
        placeholder="Введите Вашу почту"
    />,
    <UiField key={3}
        type="text"
        id="account_address"
        name="address"
        label="Адрес:"
        placeholder="Введите адрес Вашей фирмы"
    />,
    <UiField key={4}
        type="password"
        id="account_password"
        name="password"
        label="Пароль:"
        placeholder="Введите Ваш пароль"
    />,
]