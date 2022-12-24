import React, { useState } from 'react';
import { Validation } from '../../../../../library/validation/Validation';
import * as Yup from 'yup';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import FormField from '../../../../../components/Form/Field';
import Button from '../../../../../components/Button/Button.component';
import TagField from '../../../../../components/Tags/TagInput.component';
import { Toastr } from '../../../../../library/notifier/toastr';
import { IQuestionForm } from '../../../model/Question';
import { connect } from 'react-redux';
import { TopicState } from '../../../../topics/redux/reducer/topic.reducer';
import { Topic } from '../../../../topics/model/topic';
import { TopicModel } from '../../../../topics/model/topic.model';

interface Props {
    onSubmission: (values: IQuestionForm) => void;
    formValues: IQuestionForm;

    topics?: Topic[];
}

function QuestionForm(props: Props) {
    const isPrefilled = Object.keys(props.formValues).length !== 0;

    let tags = [] as any[];
    if (isPrefilled) {
        tags = props.formValues.tags;
    }

    const [selectedTags, setSelectedTags] = useState(tags as []);

    const getInitialValues = () => {
        if (isPrefilled) {
            return props.formValues;
        }
        return initialValues;
    };

    const initialValues = {
        title: '',
        topicId: '',
    } as IQuestionForm;

    const validationSchema = Yup.object().shape({
        title: Validation.requiredString,
        topicId: Validation.requiredString,
    });

    const handleSelectTag = (tagIds: string[]) => {
        setSelectedTags(tagIds as []);
    };

    React.useEffect(() => {
        TopicModel.makeTopicCollection();
    }, []);

    React.useEffect(() => {
        if (props.topics && props.topics.length && props.topics.length > 0) {
            const defaultId = props.topics[0].uid;
            setValue('topicId', defaultId);
        }
    }, [props.topics?.length]);

    let setValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
    ) => void | undefined;

    return (
        <Formik
            initialValues={getInitialValues()}
            validationSchema={validationSchema}
            onSubmit={async (
                values: IQuestionForm,
                formikHelpers: FormikHelpers<any>
            ) => {
                if (selectedTags.length === 0) {
                    Toastr.fire(`No tags selected`).error();
                    return;
                }

                values['tags'] = selectedTags;
                props.onSubmission(values);
            }}
        >
            {(formik) => {
                setValue = formik.setFieldValue;
                return (
                    <Form>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">
                                        Related to{' '}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-icon position-relative">
                                        <Field
                                            as="select"
                                            name="topicId"
                                            className="form-control"
                                        >
                                            {props.topics &&
                                                props.topics.map(
                                                    (topic, key) => (
                                                        <option
                                                            key={key}
                                                            value={topic.uid!}
                                                        >
                                                            {topic.title}
                                                        </option>
                                                    )
                                                )}
                                        </Field>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">
                                        Question one line title{' '}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-icon position-relative">
                                        <FormField
                                            type="text"
                                            name="title"
                                            placeholder="eg: What is memoization?"
                                            formik={formik}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <div className="form-icon position-relative">
                                        <TagField
                                            data={
                                                isPrefilled
                                                    ? props.formValues.tags
                                                    : []
                                            }
                                            onSelectTag={handleSelectTag}
                                        ></TagField>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 mb-0">
                                <div className="d-grid">
                                    <Button
                                        size="md"
                                        onClick={() => formik.submitForm()}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

const mapStateToProps = (state: { topics: TopicState }) => ({
    topics: state.topics.topicList,
});

const mapDispatcherToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatcherToProps)(QuestionForm);
