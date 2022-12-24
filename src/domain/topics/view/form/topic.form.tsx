import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Validation } from '../../../../library/validation/Validation';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import FormField from '../../../../components/Form/Field';
import Button from '../../../../components/Button/Button.component';
import { Topic, TopicFrom } from '../../model/topic';

interface Props {
  submitForm?: (values: TopicFrom, resetForm: () => void) => Promise<void>
}

export const TopicForm: React.FC<Props> = (props) => {

  const initialValues: TopicFrom = {
    title: '',
    description: '',
  }

  const validationSchema = Yup.object().shape({
    title: Validation.requiredString,
    description: Validation.requiredString
  })

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values: TopicFrom, formikHelpers: FormikHelpers<any>) => {
        if (props.submitForm) await props.submitForm(values, formikHelpers.resetForm)
      }}>
      {(formik) => (
        <Form>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Topic Name <span className="text-danger">*</span></label>
                <div className="form-icon position-relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user fea icon-sm icons"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                  <FormField type='text' name="title" placeholder='Enter topic name' formik={formik} />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">One line description <span className="text-danger">*</span></label>
                <div className="form-icon position-relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user fea icon-sm icons"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                  <FormField type='text' name="description" placeholder='One line description' formik={formik} />
                </div>
              </div>
            </div>

            <div className="col-lg-12 mb-0">
              <div className="d-grid">
                <Button
                  tooltipText="Success is the progressive realization of a worthy goal."
                  onSubmit={formik.submitForm}>Add Topic</Button>
              </div>
            </div>
          </div>
        </Form>
      )}

    </Formik>
  )
}
