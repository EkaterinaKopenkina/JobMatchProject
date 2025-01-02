import { Form, Formik } from "formik";
import LoginForm from "./ui/login-form";
import UiButton from "../uikit/ui-button";
import UiAuthLayout from "../uikit/ui-auth-layout";
import { loginFields, loginInitialValues } from "./model/constants";
import ModalLogin from "../modal-login/modal-login";
import { useState } from "react";

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <UiAuthLayout title="Вход">
                <Formik
                    initialValues={loginInitialValues}
                    onSubmit={(values, submitProps) => (
                        console.log('Отправка формы login')
                    )}
                >
                    {(values) => (
                        <Form className="form">
                            <LoginForm
                                setIsOpen={setIsOpen} 
                                fields={loginFields}
                                btn={<UiButton text="Вход" values={values} />} 
                            />
                        </Form>
                    )}
                </Formik>
            </UiAuthLayout>

            <ModalLogin setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
    )
}

export default Login;