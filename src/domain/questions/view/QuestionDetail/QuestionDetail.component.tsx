import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Tag, TagGroup } from "rsuite";
import SkeletonLoading from "../../../../components/Loaders/Skeleton/Skeleton.component";
import { User } from "../../../user/model/user";
import { UserModel } from "../../../user/model/user.model";
import { QuestionModel } from "../../model/question.model";
import AddComment from "./components/comments/AddComment";
import QuestionAuthor from "./components/author/QuestionAuthor";
import QuestionComments from "./components/comments/QuestionComments";
import DateFormatPipe from "../../../../components/Pipes/DateFormatPipe";

const loading = (
  <section className="bg-half-170 d-table w-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-7 order-1 order-md-2">
          <SkeletonLoading col={1} row={1} height={300}></SkeletonLoading>
          <SkeletonLoading col={1} row={1} height={100}></SkeletonLoading>
          <SkeletonLoading col={1} row={20} height={10}></SkeletonLoading>
        </div>
        <div className="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
          <SkeletonLoading col={1} row={1} height={700}></SkeletonLoading>
        </div>
      </div>
      {/*end row*/}
    </div>
  </section>
);

function QuestionDetail() {
  const { id } = useParams();

  const [questionModel, setQuestionModel] = useState(
    undefined as unknown as QuestionModel
  );

  useEffect(() => {
    fetchQuestion();
  }, [id]);

  const fetchQuestion = async () => {
    if (id) {
      const question = await QuestionModel.syncById(id);
      setQuestionModel(question as QuestionModel);
    }
  };

  return (
    <>
      {!questionModel && loading}
      {questionModel && (
        <section className="bg-half-170 d-table w-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7 order-1 order-md-2">
                <div className="card border-0 shadow rounded overflow-hidden">
                  <img
                    src={questionModel.pluck("topicImage")}
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <div className="text-center">
                      <TagGroup>
                        {questionModel.pluck("tags") &&
                          questionModel.pluck("tags").map((tag, index) => (
                            <Tag>
                              <>{tag}</>
                            </Tag>
                          ))}
                      </TagGroup>

                      <h4 className="mt-3">{questionModel.pluck("title")}</h4>
                      <ul className="list-unstyled mt-3">
                        <li className="list-inline-item user text-muted me-2">
                          <i className="mdi mdi-account" /> {questionModel.pluck('publishedBy')?.username}
                        </li>
                        <li className="list-inline-item date text-muted">
                          <i className="mdi mdi-calendar-check" /> 
                          <DateFormatPipe date={questionModel.pluck('createdAt')} />
                        </li>
                      </ul>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: questionModel.pluck("content"),
                      }}
                    />
                    <div className="post-meta mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <a
                            href="javascript:void(0)"
                            className="text-muted like"
                          >
                            <i className="uil uil-heart me-1" />
                            33
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="javascript:void(0)"
                            className="text-muted comments"
                          >
                            <i className="uil uil-comment me-1" />
                            {questionModel.pluck('comments')?.length || 0}
                          </a>
                        </li>
                      </ul>
                    </div>
                    </div>
                </div>
                <QuestionComments
                  comments={questionModel.pluck("comments") || []}
                  questionId={questionModel.pluck("uid")!}
                  refreshComments={fetchQuestion}
                />
                <AddComment
                  onAddComment={fetchQuestion}
                  questionId={questionModel.pluck("uid")!}
                />
           
                <div className="d-flex align-items-center justify-content-between mt-5">
                  <a
                    href="blog-left-sidebar-post.html"
                    className="bg-soft-primary px-2 rounded"
                  >
                    <i className="uil uil-arrow-left h5 mb-0 align-middle" />{" "}
                    Prev{" "}
                  </a>
                  <Link
                   to={`/interview-questions/${questionModel.pluck('topicId')}`}
                    className="btn btn-pills btn-icon btn-soft-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-home icons"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </Link>
                  <a
                    href="blog-left-sidebar-post.html"
                    className="bg-soft-primary px-2 rounded"
                  >
                    {" "}
                    Next{" "}
                    <i className="uil uil-arrow-right h5 mb-0 align-middle" />
                  </a>
                </div>
              </div>
              {/*end col*/}

              <QuestionAuthor
                author={UserModel.make(
                  questionModel.pluck("publishedBy") as User
                )}
              />
            </div>
            {/*end row*/}
          </div>
        </section>
      )}
    </>
  );
}

export default QuestionDetail;
