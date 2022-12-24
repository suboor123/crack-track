import { EditUserForm, User } from '../../model/user';
import * as Yup from 'yup';
import { Validation } from '../../../../library/validation/Validation';
import { Form, Formik, FormikHelpers } from 'formik';
import FormField from '../../../../components/Form/Field';
import UserButton from '../../../../components/Button/UserButton.component';
import { UserModel } from '../../model/user.model';
import { connect } from 'react-redux';
import { UserState } from '../../redux/reducer/user.reducer';
import { Toastr } from '../../../../library/notifier/toastr';

interface Props {
    currentUserModel: UserModel;
    afterUpdate: () => void;
}

function ProfileForm({ currentUserModel, ...props }: Props) {

    const initialValues: Omit<EditUserForm, "password"> = {
        username: currentUserModel.pluck('username'),
        experience: currentUserModel.pluck('experience'),
        programmingLanguages: currentUserModel.pluck('programmingLanguages'),
        email: currentUserModel.pluck('email'),
        aboutMe: currentUserModel.pluck('aboutMe')
    }

    const validationSchema = Yup.object().shape({
        username: Validation.requiredString,
        email: Validation.email,
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (
                values: EditUserForm,
                { setSubmitting, submitForm }: FormikHelpers<EditUserForm>
            ) => {
                await currentUserModel.updateMe(values as Partial<User>);
                Toastr.fire('Profile updated successfully.').success()
                props.afterUpdate()
             }}
        >
            {(formik) => (
                <Form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Full Name<span className="text-danger">*</span></label>
                                <div className="form-icon position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user fea icon-sm icons"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                                    <FormField type='text' placeholder='Full Name' name="username" formik={formik} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                <div className="form-icon position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail fea icon-sm icons"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    <FormField disabled type='text' name="email" formik={formik} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Experience <span className="text-danger">*</span></label>
                                <div className="form-icon position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check fea icon-sm icons"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><polyline points="17 11 19 13 23 9" /></svg>
                                    <FormField placeholder='Years of experience' type='number' name="experience" formik={formik} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Skills </label>
                                <div className="form-icon position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check fea icon-sm icons"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><polyline points="17 11 19 13 23 9" /></svg>
                                    <FormField placeholder='Eg: React, Angular, Node etc.' type='text' name="programmingLanguages" formik={formik} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">About me</label>
                                <div className="form-icon position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail fea icon-sm icons"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    <FormField as="textarea" type='text' name="aboutMe" formik={formik} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="d-grid">

                                <UserButton tooltipText="Update my profile" includeTooltip={true}
                                    onSubmit={() => formik.submitForm()}>Update</UserButton>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

const mapStateToProps = (state: { user: UserState }) => ({
    currentUserModel: UserModel.make(state.user.currentUser!)
})

const mapDisaptcherToProps = (state: { user: UserState }) => ({

})

export default connect(mapStateToProps, mapDisaptcherToProps)(ProfileForm)