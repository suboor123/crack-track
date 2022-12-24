import { Link, useNavigate } from 'react-router-dom';
import { UserForm } from '../../../domain/user/model/user';
import { Validation } from '../../../library/validation/Validation';
import * as Yup from 'yup';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { UserModel } from '../../../domain/user/model/user.model';
import FormField from '../../../components/Form/Field';
import Button from '../../../components/Button/Button.component';
import { Toastr } from '../../../library/notifier/toastr';
import { AuthModel } from '../../model/auth.model';

export default function RegisterForm() {
    const initialValues: UserForm = {
        username: 'user',
        experience: '2',
        programmingLanguages: 'angular, react',
        email: 'user@gmail.com',
        password: '123456789',
        aboutMe: `Hey there! I am learning from crack track and It's awesome.`,
    };

    const validationSchema = Yup.object().shape({
        username: Validation.requiredString,
        email: Validation.email,
        password: Validation.password,
    });

    const navigate = useNavigate();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (
                values: UserForm,
                { setSubmitting, submitForm }: FormikHelpers<UserForm>
            ) => {
                const user = await AuthModel.createUser(values);
                if (user) {
                    Toastr.fire(
                        `Welcome ${user.username}`,
                        'Logged in'
                    ).success();
                    navigate('/');
                }
            }}
        >
            {(formik) => (
                <Form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">
                                    Full Name
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-icon position-relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-user fea icon-sm icons"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                    <FormField
                                        type="text"
                                        placeholder="Full Name"
                                        name="username"
                                        formik={formik}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">
                                    Experience{' '}
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-icon position-relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-user-check fea icon-sm icons"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="8.5" cy={7} r={4} />
                                        <polyline points="17 11 19 13 23 9" />
                                    </svg>
                                    <FormField
                                        placeholder="Years of experience"
                                        type="number"
                                        name="experience"
                                        formik={formik}
                                    />
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">
                                    Your Email{' '}
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-icon position-relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-mail fea icon-sm icons"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <FormField
                                        type="text"
                                        name="email"
                                        formik={formik}
                                    />
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">
                                    Password{' '}
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="form-icon position-relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-key fea icon-sm icons"
                                    >
                                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                                    </svg>
                                    <FormField
                                        type="password"
                                        name="password"
                                        formik={formik}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        I Accept{' '}
                                        <a
                                            href="auth-signup.html#"
                                            className="text-primary"
                                        >
                                            Terms And Condition
                                        </a>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-12">
                            <div className="d-grid">
                                <Button
                                    tooltipText="Success is the progressive realization of a worthy goal."
                                    onSubmit={() => formik.submitForm()}
                                >
                                    Register
                                </Button>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-12 mt-4 text-center">
                            <h6>Or Signup With</h6>
                            <div className="row">
                                <div className="col-6 mt-3">
                                    <div className="d-grid">
                                        <a className="btn btn-light">
                                            <i className="mdi mdi-facebook text-primary" />{' '}
                                            Facebook
                                        </a>
                                    </div>
                                </div>
                                {/*end col*/}
                                <div className="col-6 mt-3">
                                    <div className="d-grid">
                                        <a className="btn btn-light">
                                            <i className="mdi mdi-google text-danger" />{' '}
                                            Google
                                        </a>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="mx-auto">
                            <p className="mb-0 mt-3">
                                <small className="text-dark me-2">
                                    Already have an account ?
                                </small>
                                <Link to="/login" className="text-dark fw-bold">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
