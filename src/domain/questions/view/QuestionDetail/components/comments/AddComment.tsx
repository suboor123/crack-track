import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Toastr } from '../../../../../../library/notifier/toastr';
import { User } from '../../../../../user/model/user';
import { UserState } from '../../../../../user/redux/reducer/user.reducer';
import { CommentModel } from '../../../../model/comment.model';
import { Comment } from '../../../../model/Question';

interface Props {
  currentUser: User | undefined;
  questionId: string;
  onAddComment: () => void;
}

const AddComment: React.FC<Props> = ({
  currentUser,
  questionId,
  onAddComment
}) => {

  const [commentInput, setCommentInput] = useState('');
  const [enableSubmitBtn, setEnableSubmitBtn] = useState(false)

  const handleCommentInput = (e: any) => {
    const val = e.target.value;
    if(val.trim() === '') {
      setEnableSubmitBtn(false);
      return;
    }

    setEnableSubmitBtn(true)
    setCommentInput(e.target.value);
  }

  const resetCommentField = () => {
    setCommentInput('')
  }

  const handleSubmit = async () => {
    if (commentInput.trim() === '') return;

    const comment: Comment = {
      commentedBy: currentUser!.uid!,
      content: commentInput,
      createdAt: new Date().toISOString()
    };

    await CommentModel.addComment(questionId, comment);
    Toastr.fire('Your comment added successfully.').success();
    resetCommentField();
    onAddComment();
  }

  return (
    <div className="card shadow rounded border-0 mt-4">
      <div className="card-body">
        <h5 className="card-title mb-0">Leave A Comment :</h5>
        <form className="mt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Your Comment</label>
                <div className="form-icon position-relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle fea icon-sm icons"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                  <textarea onChange={handleCommentInput} id="message" placeholder="Your Comment" rows={5} name="message" className="form-control ps-5" required value={commentInput} />
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="send d-grid">
                <button disabled={!enableSubmitBtn} type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state: { user: UserState }) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)