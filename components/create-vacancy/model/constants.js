import UiField from "../../uikit/form/ui/ui-field";

export const DATA_VACANCY = {
    vacancy: "Front-end разработчик",
    busyness: 'Гибкий график',
    experience_from: '1 год',
    experience_to: '3 года',
    salary_from: 60000,
    salary_to: 100000,
}

export const editVacancyInitialValues = {
    vacancy: DATA_VACANCY.vacancy,
    busyness: DATA_VACANCY.busyness,
    experience_from: DATA_VACANCY.experience_from,
    experience_to: DATA_VACANCY.experience_to,
    salary_from: DATA_VACANCY.salary_from,
    salary_to: DATA_VACANCY.salary_to
}

export const createVacancyInitialValues = {
    vacancy: '',
    busyness: '',
    experience_from: '',
    experience_to: '',
    salary_from: null,
    salary_to: null
}

export const createVacancyFields = [
    <UiField key={1}
        type="text"
        id="create-vacancy_vacancy"
        name="vacancy"
        label="Должность:"
        placeholder="Введите должность"
    />,
    <UiField key={2}
        type="text"
        id="create-vacancy_busyness"
        name="busyness"
        label="Занятость:"
        placeholder="Введите занятость"
    />,
    <UiField key={3}
        type="text"
        id="create-vacancy_experience-from"
        name="experience_from"
        label="Отпыт работы от:"
        placeholder="Введите минимальный опыт работы"
    />,
    <UiField key={4}
        type="number"
        id="create-vacancy_salary-from"
        name="salary_from"
        label="Оклад от:"
        placeholder="Введите минимальный оклад"
    />,
    <UiField key={5}
        type="text"
        id="create-vacancy_experience-to"
        name="experience_to"
        label="Опыт работы до:"
        placeholder="Введите максимальный опыт работы"
    />,
    <UiField key={6}
        type="numver"
        id="create-vacancy_salary-to"
        name="salary_to"
        label="Оклад до:"
        placeholder="Введите максимальный оклад"
    />,
]