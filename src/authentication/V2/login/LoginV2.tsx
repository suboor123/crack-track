import * as Yup from 'yup';
import { Validation } from '../../../library/validation/Validation';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginV2 = () => {
    return (
        <>
            <section className="bg-home d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <div className="me-lg-5">
                                <img
                                    src="assets/images/user/login.svg"
                                    className="img-fluid d-block mx-auto"
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="card login-page shadow rounded border-0">
                                <div className="card-body">
                                    <h4 className="card-title text-center">
                                        Login
                                    </h4>
                                    <LoginForm></LoginForm>
                                </div>
                            </div>
                            {/**/}
                        </div>{' '}
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>{' '}
                {/*end container*/}
            </section>
        </>
    );
};

export default LoginV2;
