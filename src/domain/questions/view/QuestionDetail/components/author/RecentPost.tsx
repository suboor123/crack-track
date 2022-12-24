import React from "react";
import { Link } from "react-router-dom";
import DateFormatPipe from "../../../../../../components/Pipes/DateFormatPipe";
import Datepipe from "../../../../../../components/Pipes/Datepipe.pipe";
import { PLACEHOLDER_IMAGE } from "../../../../../../library/constant/app.constant";
import { Question } from "../../../../model/Question";
import { QuestionModel } from "../../../../model/question.model";

interface Props {
    questions: QuestionModel[] | undefined
}

const imageStyle: React.CSSProperties = {
    width: '100px',
    objectFit: 'cover'
}

const RecentPost = (props: Props) => {

    const { questions } = props;

  return (
    <>
      {/* RECENT POST */}
      <div className="widget mt-4">
        <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
          Recent Post
        </span>
        <div className="mt-4">
          {questions && questions.map((question) => (
            <div className="d-flex align-items-center mt-3" key={question.pluck('uid')}> 
            <img

              src={question.pluck('topicImage') || PLACEHOLDER_IMAGE}
              className="avatar avatar-small rounded"
              style={imageStyle}
            />
            <div className="flex-1 ms-3">
              <Link to={`/question/${question.pluck('uid')}`} className="d-block title text-dark">
                {question.pluck('title')}
              </Link>
              <span className="text-muted">
                <DateFormatPipe date={question.pluck('createdAt')} />
              </span>
            </div>
          </div>
          ))}

        </div>
      </div>
      {/* RECENT POST */}
    </>
  );
};

export default RecentPost;
