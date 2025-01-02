import { Form, Formik } from "formik";
import UiAccountLayout from "../uikit/ui-account-layout";
import UiAccountForm from "../uikit/form/ui-account-form";
import UiButton from "../uikit/ui-button";
import { createResumeFields, createResumeInitialValues } from "./model/constants";

const CreateResume = () => {
    return (
        <UiAccountLayout title="Создание резюме">
            <Formik
                initialValues={createResumeInitialValues}
                onSubmit={(values, submitProps) => {
                    console.log('Отправка формы create resume')
                }}
                //validate={}
            > 
                {(values) => (
                    <Form className="form create-resume__form">
                        <UiAccountForm
                            fields={createResumeFields}
                            btn={<UiButton text="Создать" values={values} />}
                        />
                    </Form>
                )}
            </Formik>
        </UiAccountLayout>
    )
}

export default CreateResume;