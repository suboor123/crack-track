import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Validation } from '../../../library/validation/Validation';
import { useNavigate } from 'react-router-dom';
import { Form, Formik, FormikHelpers } from 'formik';
import FormField from '../../../components/Form/Field';
import Button from '../../../components/Button/Button.component';
import Tooltip from '../../../components/Tooltip/Tooltip.component';
import { AuthModel } from '../../model/auth.model';

interface Props {
    onSubmissionCompleted?: () => void;
}

const LoginForm = (props: Props) => {
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
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, formikHelpers: FormikHelpers<any>) => {
                const user = await AuthModel.authenticateUser(
                    values.email,
                    values.password
                );
                if (user) {
                    if (props.onSubmissionCompleted)
                        props.onSubmissionCompleted();
                    navigate('/');
                }
            }}
        >
            {(formik) => (
                <Form>
                    <div className="row">
                        <div className="col-lg-12">
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
                                        className="feather feather-user fea icon-sm icons"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
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
                        <div className="col-lg-12">
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
                        {/*end col*/}
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between">
                                <div className="mb-3">
                                    <div className="form-check">
                                        <Tooltip
                                            content={'Keep me logged in'}
                                            placement="left"
                                        >
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="flexCheckDefault"
                                            />
                                        </Tooltip>
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <p className="forgot-pass mb-0">
                                    <a
                                        href="auth-re-password.html"
                                        className="text-dark fw-bold"
                                    >
                                        Forgot password ?
                                    </a>
                                </p>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-12 mb-0">
                            <div className="d-grid">
                                <Button
                                    tooltipText="Success is the progressive realization of a worthy goal."
                                    onSubmit={() => formik.submitForm()}
                                >
                                    Sign in
                                </Button>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-12 mt-4 text-center">
                            <h6>Or Login With</h6>
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
                        <div className="col-12 text-center">
                            <p className="mb-0 mt-3">
                                <small className="text-dark me-2">
                                    Don't have an account ?
                                </small>{' '}
                                <Link
                                    to="/registration"
                                    className="text-dark fw-bold"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                        {/*end col*/}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
