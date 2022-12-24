import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from './RegisterForm'

const RegisterV2 = () => {
    return (
        <>
            <section className="bg-auth-home d-table w-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <div className="me-lg-5">
                                <img src="assets/images/user/signup.svg" className="img-fluid d-block mx-auto" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="card shadow rounded border-0">
                                <div className="card-body">
                                    <h4 className="card-title text-center">Signup</h4>
                                        <RegisterForm></RegisterForm>
                                </div>
                            </div>
                        </div> {/*end col*/}
                    </div>{/*end row*/}
                </div> {/*end container*/}
            </section>

        </>
    )
}

export default RegisterV2