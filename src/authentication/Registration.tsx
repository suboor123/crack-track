import { UserForm } from '../domain/user/model/user';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Validation } from '../library/validation/Validation';
import FormField from '../components/Form/Field';
import Button from '../components/Button/Button.component';
import { AuthModel } from './model/auth.model';

const Registration = () => {

  const initialValues: UserForm = {
    username: 'user',
    experience: '2',
    programmingLanguages: 'angular, react',
    email: 'user@gmail.com',
    password: '123456789',
    aboutMe: 'SD2'
  }

  const validationSchema = Yup.object().shape({
    username: Validation.requiredString,
    email: Validation.email,
    password: Validation.password
  })

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
                      <h2 className="title">Register</h2>
                    </div>
                    {/* Section Title End */}
                    <div className="login-register-form">
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(
                          values: UserForm,
                          { setSubmitting, submitForm }: FormikHelpers<UserForm>
                        ) => {
                          AuthModel.createUser(values)
                        }}
                      >
                        {(formik) => (
                          <Form>
                            <div className="single-form">
                              <FormField type='text' name="username" formik={formik} />
                            </div>
                            <div className="single-form">
                              <Field type="number" name="experience" className="form-control" placeholder="Enter your experience years " />
                            </div>
                            <div className="single-form">
                              <Field type="text" name="programmingLanguages" className="form-control" placeholder="programmingLanguages you know " />
                            </div>
                            <div className="single-form">
                              <FormField type='text' name="email" formik={formik} />
                            </div>
                            <div className="single-form">
                              <FormField type='text' name="password" formik={formik} />
                            </div>
                            <div className="single-form">
                              <Field type="text" name="aboutMe" className="form-control" placeholder="Enter about you " />
                            </div>

                            <div className="single-form">
                              <Button type='button' onSubmit={() => formik.submitForm()}>Register</Button>
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
        {/* Login & Register End */}</>
      )
}

      export default Registration