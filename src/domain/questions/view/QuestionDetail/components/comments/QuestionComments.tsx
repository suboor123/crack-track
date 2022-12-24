import React from "react";
import { connect } from "react-redux";
import DateFormatPipe from "../../../../../../components/Pipes/DateFormatPipe";
import { PLACEHOLDER_IMAGE } from "../../../../../../library/constant/app.constant";
import { User } from "../../../../../user/model/user";
import { UserModel } from "../../../../../user/model/user.model";
import { UserState } from "../../../../../user/redux/reducer/user.reducer";
import { CommentModel } from "../../../../model/comment.model";
import { Comment } from "../../../../model/Question";

interface Props {
  comments: Comment[];
  questionId: string;
  refreshComments: () => void;
  currentUser: User | undefined;
}

const QuestionComments: React.FC<Props> = ({
  comments,
  questionId,
  refreshComments,
  currentUser
}) => {
  return (
    <div className="card shadow rounded border-0 mt-4">
      {comments && comments.length !== 0 && (
        <div className="card-body">
          <h5 className="card-title mb-0">
            Comments :
          </h5>

          <ul className="media-list list-unstyled mb-0">
            {comments.map((comment, key) => {
              const commentModel = CommentModel.make(comment);
              const userModel = UserModel.make(comment.commentByUser!);
              return (
                <li className="mt-4" key={key}>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <a className="pe-3" href="blog-left-sidebar-post.html#">
                        <img
                          src={userModel.pluck("image") || PLACEHOLDER_IMAGE}
                          className="img-fluid avatar object-fit avatar-md-sm rounded-circle shadow"
                          alt="img"
                        />
                      </a>
                      <div className="commentor-detail">
                        <h6 className="mb-0">
                          <a
                            href="javascript:void(0)"
                            className="text-dark media-heading"
                          >
                            {userModel.pluck("username")}
                          </a>
                        </h6>
                        <small className="text-muted">
                         <DateFormatPipe includeTime={true} date={commentModel.pluck('createdAt')} />
                        </small>
                      </div>
                    </div>
                    {currentUser && currentUser.uid === comment.commentedBy && <a
                      className="text-muted"
                      onClick={async () => {
                        await CommentModel.deleteComment(
                          questionId,
                          comment.uid!
                        );
                        refreshComments();
                      }}
                    >
                      <i className="mdi mdi-reply" /> Delete
                    </a>}
                  </div>
                  <div className="mt-3">
                    <p className=" p-3 bg-light rounded">
                      {commentModel.pluck("content")}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: { user: UserState }) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComments);
