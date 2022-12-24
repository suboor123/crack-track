import React from 'react';
import { IQuestionForm } from '../../../model/Question';

interface Props {
    ref: any;
    onPublishClick: () => void;
    onDiscardClick: () => void;
    formValues: IQuestionForm;
}

export default function QuestionPreview(props: Props) {
    return (
        <div {...props} ref={props.ref}>
            <section className="bg-home bg-light d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="text-center">
                                <div
                                    className="icon d-flex align-items-center justify-content-center bg-soft-primary rounded-circle mx-auto"
                                    style={{ height: 90, width: 90 }}
                                >
                                    <i className="uil uil-thumbs-up align-middle h1 mb-0" />
                                </div>
                                <h1 className="my-4 fw-bold">Great Job!</h1>
                                <p className="text-muted mb-5 para-desc mx-auto">
                                    Great work till now! you are just one step
                                    away to publish your question which may help
                                    thousands of people for their preparation.
                                    <br />
                                    Hit publish button
                                </p>
                                <a
                                    onClick={props.onPublishClick}
                                    className="btn btn-soft-info  mx-4 mt-3"
                                >
                                    Publish
                                </a>
                                <a className="btn btn-soft-primary  mx-4 mt-3">
                                    Preview
                                </a>
                                <a
                                    onClick={props.onDiscardClick}
                                    className="btn btn-soft-danger mx-4 mt-3"
                                >
                                    Discard
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
