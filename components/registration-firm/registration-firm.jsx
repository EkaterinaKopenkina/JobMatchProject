import { Form, Formik } from "formik";
import UiRegistrationForm from "../uikit/ui-registration-form";
import { regFields, regInitialValues } from "./model/constants";
import UiButton from "../uikit/ui-button";
import UiAuthLayout from "../uikit/ui-auth-layout";

const RegistrationFirm = () => {
    return (
        <UiAuthLayout title="Регистрация фирмы">
            <Formik
                initialValues={regInitialValues}
                onSubmit={(values, submitProps) => (
                    console.log('Отправка формы reg-firm')
                )}
            >
                {(values) => (
                    <Form className="form">
                        <UiRegistrationForm 
                            fields={regFields}
                            btn={<UiButton text="Регистрация" values={values} />} 
                        />
                    </Form>
                )}
            </Formik>
        </UiAuthLayout>
    )
}

export default RegistrationFirm;