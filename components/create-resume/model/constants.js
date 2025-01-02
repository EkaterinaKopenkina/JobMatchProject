import UiField from "../../uikit/form/ui/ui-field"

const DATA_RESUME = {
    id: 1,
    vacancy: 'Front-end разработчик',
    busyness: 'Гибкий график',
    experience: '3 года',
    description: 'Возьмите меня на работу пожалуйста с:',
    salary: 'от 10 000 до 100 000',
}

export const editResumeInitialValues = {
    vacancy: DATA_RESUME.vacancy,
    busyness: DATA_RESUME.busyness,
    experience: DATA_RESUME.experience,
    description: DATA_RESUME.description,
    salary: DATA_RESUME.salary,
}

export const createResumeInitialValues = {
    vacancy: '',
    busyness: '',
    experience: '',
    description: '',
    salary: '',
}

export const createResumeFields = [
    <UiField key={1}
        type="text"
        id="create-resume_vacancy"
        name="vacancy"
        label="Должность:"
        placeholder="Введите должность"
    />,
    <UiField key={2}
        type="text"
        id="create-resume_busyness"
        name="busyness"
        label="Занятость:"
        placeholder="Введите занятость"
    />,
    <UiField key={3}
        type="text"
        id="create-resume_experience"
        name="experience"
        label="Опыт работы:"
        placeholder="Введите опыт работы"
    />,
    <UiField key={4}
        type="text"
        id="create-resume_salary"
        name="salary"
        label="Оклад:"
        placeholder="Введите оклад"
    />,
    <UiField key={5}
        type="description"
        id="create-resume_description"
        name="description"
        label="Описание:"
        placeholder="Введите описание"
        component="textarea"
    />,
]