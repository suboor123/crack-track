import { useState } from 'react';
import Button from '../../../../components/Button/Button.component';
import { IQuestionForm } from '../../model/Question';
import QuestionContent from './form/content.form';
import QuestionForm from './form/question.form';
import { Animation } from 'rsuite';
import QuestionPreview from './form/preview';
import { QuestionModel } from '../../model/question.model';

enum CurrentForm {
    DetailForm,
    ContentForm,
    Preview,
}

type AnimationPlacement = 'top' | 'right' | 'bottom' | 'left';

const ANIMATION_PLACEMENT: AnimationPlacement = 'right';

export default function AddQuestion() {
    const [currentPage, setCurrentPage] = useState(CurrentForm.DetailForm);

    const [formValues, setFormValues] = useState({} as IQuestionForm);

    const onCompletingFirstForm = (values: IQuestionForm) => {
        setFormValues(values);
        setCurrentPage(CurrentForm.ContentForm);
    };

    const onContentSubmission = (content: string) => {
        setFormValues({ ...formValues, content });
        setCurrentPage(CurrentForm.Preview);
    };

    const resetProcess = () => {
        setCurrentPage(CurrentForm.DetailForm);
    };

    const handlePublishQuestion = async () => {
        QuestionModel.createQuestion(formValues);
    };

    return (
        <>
            <Animation.Slide
                in={currentPage === CurrentForm.DetailForm}
                placement={ANIMATION_PLACEMENT}
            >
                {(props, ref) => (
                    <>
                        {currentPage === CurrentForm.DetailForm && (
                            <div ref={ref} {...props}>
                                <section
                                    className="bg-home bg-animation-left dark-left d-flex align-items-center"
                                    id="home"
                                >
                                    <div
                                        className="container position-relative text-md-start text-center"
                                        style={{ zIndex: 1 }}
                                    >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card-body bg-white p-5">
                                                    <h4 className=" text-center">
                                                        Question
                                                    </h4>
                                                    <hr />
                                                    <QuestionForm
                                                        formValues={formValues}
                                                        onSubmission={
                                                            onCompletingFirstForm
                                                        }
                                                    ></QuestionForm>
                                                </div>
                                                <Button className="btn btn-primary mt-3">
                                                    Go Back
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                    </>
                )}
            </Animation.Slide>

            <Animation.Slide
                in={currentPage === CurrentForm.ContentForm}
                placement={ANIMATION_PLACEMENT}
            >
                {(props, ref) => (
                    <>
                        {currentPage === CurrentForm.ContentForm && (
                            <QuestionContent
                                {...props}
                                ref={ref}
                                prevFormValues={formValues}
                                onBackClick={() =>
                                    setCurrentPage(CurrentForm.DetailForm)
                                }
                                onDoneClick={onContentSubmission}
                            ></QuestionContent>
                        )}
                    </>
                )}
            </Animation.Slide>

            <Animation.Slide in={true} placement={ANIMATION_PLACEMENT}>
                {(props, ref) => (
                    <>
                        {' '}
                        {currentPage === CurrentForm.Preview && (
                            <QuestionPreview
                                {...props}
                                ref={ref}
                                onPublishClick={handlePublishQuestion}
                                onDiscardClick={resetProcess}
                                formValues={formValues}
                            ></QuestionPreview>
                        )}
                    </>
                )}
            </Animation.Slide>
        </>
    );
}
