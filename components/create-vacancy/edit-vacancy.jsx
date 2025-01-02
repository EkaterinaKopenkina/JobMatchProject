import UiAccountLayout from "../uikit/ui-account-layout";
import UiButton from "../uikit/ui-button";
import UiAccountForm from "../uikit/form/ui-account-form";
import { createVacancyFields, DATA_VACANCY, editVacancyInitialValues } from "./model/constants";
import { Form, Formik } from "formik";

const EditVacancy = () => {
    return (
        <UiAccountLayout title={`Редактирование вакансии "${DATA_VACANCY.vacancy}"`}>
            <Formik
                initialValues={editVacancyInitialValues}
                onSubmit={(values, submitProps) => {
                    console.log('Отправка формы edit vacancy')
                }}
                //validate={}
            > 
                {(values) => (
                    <Form className="form">
                        <UiAccountForm
                            fields={createVacancyFields}
                            btn={<UiButton text="Сохранить" values={values} />}
                        />
                    </Form>
                )}
            </Formik>
        </UiAccountLayout>
    )
}

export default EditVacancy;