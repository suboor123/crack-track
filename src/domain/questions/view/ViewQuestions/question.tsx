import { Link } from 'react-router-dom';
import Datepipe from '../../../../components/Pipes/Datepipe.pipe';
import { QuestionModel } from '../../model/question.model';

interface Props {
    questionModel: QuestionModel
}

export default function Question(props: Props) {

    const {
        questionModel
    } = props;

    return (
        <div className="col-12 mt-4 pt-2">
            <div className="job-box job-primary d-md-flex align-items-center border-0 shadow rounded p-4 position-relative">
                <img src={questionModel.pluck('topicImage')} className="avatar avatar-md-md" style={{
                    objectFit: 'cover'
                }} />
                <div className="ms-md-4 mt-4 mt-sm-0">
                    <Link to={`/question/${questionModel.pluck('uid')}`} className="title text-dark h5">{questionModel.pluck('title')}</Link>
                    <ul className="list-unstyled mb-0 mt-2">
                        <li className="d-lg-inline text-muted h6 mb-0 me-lg-2"><i className="uil uil-user icons" /> <a href="javascript:void(0)" className="text-dark">{questionModel.pluck('publishedBy')?.username}</a></li>
                        <li className="d-lg-inline text-muted h6 mb-0 me-lg-2"><i className="uil uil-clock icons" /> {Datepipe({date: questionModel.pluck('createdAt')})}</li>
                        <li className="d-lg-inline text-muted h6 mb-0"><i className="uil uil-eye icons" /> 30k</li>
                    </ul>
                    <div className="mt-2">
                        {questionModel.pluck('tags').map((tag: any) => (
                            <span className="badge bg-soft">{tag}</span>
                        ))}


                    </div>
                </div>
                <div className="position-absolute top-0 end-0 mt-3 me-3">
                    <a href="javascript:void(0)" className="btn btn-icon btn-pills btn-soft"><i className="uil uil-bookmark align-middle" /></a>
                </div>
            </div>
        </div>
    )
}
