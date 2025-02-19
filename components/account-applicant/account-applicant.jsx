import { Form, Formik } from "formik";
import UiAccountLayout from "../uikit/ui-account-layout";
import { accountFields, accountInitialValues } from "./model/constants";
import UiButton from "../uikit/ui-button";
import UiAccountForm from "../uikit/form/ui-account-form";

const AccountApplicant = () => {
    return (
        <UiAccountLayout title="Личный кабинет">
            <Formik
                initialValues={accountInitialValues}
                onSubmit={(values, submitProps) => {
                    console.log('Отправка формы account')
                }}
                //validate={}
            > 
                {(values) => (
                    <Form className="form">
                        <UiAccountForm
                            fields={accountFields}
                            btn={<UiButton text="Сохранить" values={values} />}
                        />
                    </Form>
                )}
            </Formik>
        </UiAccountLayout>
    )
}

export default AccountApplicant;