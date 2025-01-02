import { Form, Formik } from "formik";
import UiAccountForm from "../uikit/form/ui-account-form";
import UiAccountLayout from "../uikit/ui-account-layout";
import UiButton from "../uikit/ui-button";
import { createResumeFields, editResumeInitialValues } from "./model/constants";

const EditResume = () => {
    return (
        <UiAccountLayout title={`Редактирование резюме "${editResumeInitialValues.vacancy}"`}>
            <Formik
                initialValues={editResumeInitialValues}
                onSubmit={(values, submitProps) => {
                    console.log('Отправка формы edit resume')
                }}
                //validate={}
            > 
                {(values) => (
                    <Form className="form create-resume__form">
                        <UiAccountForm
                            fields={createResumeFields}
                            btn={<UiButton text="Сохранить" values={values} />}
                        />
                    </Form>
                )}
            </Formik>
        </UiAccountLayout>
    )
}

export default EditResume;