import UiAccountLayout from "../uikit/ui-account-layout";
import UiButton from "../uikit/ui-button";
import UiAccountForm from "../uikit/form/ui-account-form";
import { createVacancyFields, createVacancyInitialValues } from "./model/constants";
import { Form, Formik } from "formik";

const CreateVacancy = () => {
    return (
        <UiAccountLayout title="Создание вакансии">
            <Formik
                initialValues={createVacancyInitialValues}
                onSubmit={(values, submitProps) => {
                    console.log('Отправка формы create vacancy')
                }}
                //validate={}
            > 
                {(values) => (
                    <Form className="form">
                        <UiAccountForm
                            fields={createVacancyFields}
                            btn={<UiButton text="Создать" values={values} />}
                        />
                    </Form>
                )}
            </Formik>
        </UiAccountLayout>
    )
}

export default CreateVacancy;