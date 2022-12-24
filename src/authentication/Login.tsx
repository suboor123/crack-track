import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Validation } from '../library/validation/Validation';
import FormField from '../components/Form/Field';
import { UserModel } from '../domain/user/model/user.model';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button.component';
import { AuthModel } from './model/auth.model';

const Login = () => {
    const initialValues = {
        email: 'user@gmail.com',
        password: '123456789',
    };

    const validationSchema = Yup.object().shape({
        email: Validation.email,
        password: Validation.password,
    });

    const navigate = useNavigate();

    return (
        <>
            {/* Login & Register Start */}
            <div className="section section-padding">
                <div className="container">
                    {/* Login & Register Wrapper Start */}
                    <div className="login-register-wrapper">
                        <div className="row gx-5">
                            <div className="col-lg-12">
                                {/* Login & Register Box Start */}
                                <div className="login-register-box">
                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        <h2 className="title">Login</h2>
                                    </div>
                                    {/* Section Title End */}
                                    <div className="login-register-form">
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={async (
                                                values,
                                                formikHelpers: FormikHelpers<any>
                                            ) => {
                                                await AuthModel.authenticateUser(
                                                    values.email,
                                                    values.password
                                                );
                                                navigate('/');
                                            }}
                                        >
                                            {(formik) => (
                                                <Form>
                                                    <div className="single-form">
                                                        <FormField
                                                            type="text"
                                                            name="email"
                                                            formik={formik}
                                                        />
                                                    </div>
                                                    <div className="single-form">
                                                        <FormField
                                                            type="password"
                                                            name="password"
                                                            formik={formik}
                                                        />
                                                    </div>
                                                    <div className="single-form">
                                                        <Button type="submit">
                                                            Login
                                                        </Button>
                                                    </div>
                                                    <div className="single-form">
                                                        <p>
                                                            <a href="login-register.html#">
                                                                Lost your
                                                                password?
                                                            </a>
                                                        </p>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                                {/* Login & Register Box End */}
                            </div>
                        </div>
                    </div>
                    {/* Login & Register Wrapper End */}
                </div>
            </div>
            {/* Login & Register End */}
        </>
    );
};

export default Login;
