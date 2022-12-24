import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import SkeletonLoading from '../../../../components/Loaders/Skeleton/Skeleton.component';
import Pagination from '../../../../components/Pagination/Pagination.component';
import { Firebase } from '../../../../core/firebase/firebase';
import { QuestionModel } from '../../model/question.model';
import QuestionFilter from './filters/questionFilter';
import Question from './question';
import QuestionsOnPage from './QuestionsOnPage';
interface Props {

}

const Questions: React.FC<Props> = (props) => {

  const { id } = useParams();

  const [questions, setQuestions] = useState([])

  const [showLoading, setShowLoading] = useState(false)


  useEffect(() => {
    fetchQuestions();
  }, [id]);

  const fetchQuestions = async () => {
    setQuestions([])
    setShowLoading(true)
    if (id) {
      const questionList = await QuestionModel.syncQuestionsByTopicId(id);
      setQuestions(questionList as [])
    }
    setShowLoading(false)
  }

  return (
    <div>
      <div className="position-relative">
        <div className="shape overflow-hidden text-color-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <section className="section">

        <div className="container mt-5 mt-sm-0">
          <div className="row">
            <QuestionFilter></QuestionFilter>
            <div className="col-lg-8 col-md-6 col-12">
              <QuestionsOnPage></QuestionsOnPage>
              <div className="row mt-3">
                {(showLoading && questions.length === 0) && <SkeletonLoading row={5} col={1} height={100} />}
                {questions && questions.map((question, index) => (
                  <span key={index}>
                  <Question questionModel={question}></Question>
                  </span>
                ))}
                {questions && questions.length > 0 && <Pagination></Pagination>}
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Questions;

