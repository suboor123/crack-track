import React, { useEffect, useState } from 'react';
import { UserModel } from '../../../../../user/model/user.model';
import OfficialAccountIcon from '../../../../../user/view/profile/components/officialAccountIcon';
import { QuestionModel } from '../../../../model/question.model';
import RecentPost from './RecentPost';

interface Props {
    author: UserModel
}

export default function QuestionAuthor(props: Props) {
  const {
    author 
  } = props;

  const [recentQuestions, setRecentQuestions] = useState(undefined)

  useEffect(() => {
    fetchRecentQuestion()
  }, [])

  const fetchRecentQuestion = async () => {
    const questions = await QuestionModel.syncQuestionsByUserId(author.pluck('uid')!)
    const recentQuestions =  questions.slice(0, 3)
    setRecentQuestions(recentQuestions as any)
  }

  return (
    <div className="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
    <div className="card border-0 sidebar sticky-bar me-lg-4">
      <div className="card-body p-0">
        {/* Author */}
        <div className="text-center">
          <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
            Author
          </span>
          <div className="mt-4">
            <img src={author.pluck('image')} style={{objectFit: 'cover'}} className="img-fluid avatar avatar-medium rounded-pill shadow-md d-block mx-auto" />
            <a href="blog-about.html" className="text-primary h5 mt-4 mb-0 d-inline">{author.pluck('username')} </a> <span className='h6'><OfficialAccountIcon userModel={author}></OfficialAccountIcon></span>
            <small className="text-muted d-block">
            {author.pluck('aboutMe')}
              </small>
          </div>
        </div>
        {/* Author */}
        <RecentPost questions={recentQuestions} />
        {/* TAG CLOUDS */}
        <div className="widget mt-4">
          <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
            Tagclouds
          </span>
          <div className="tagcloud text-center mt-4">
            <a href="jvascript:void(0)" className="rounded">Business</a>
            <a href="jvascript:void(0)" className="rounded">Finance</a>
            <a href="jvascript:void(0)" className="rounded">Marketing</a>
            <a href="jvascript:void(0)" className="rounded">Fashion</a>
            <a href="jvascript:void(0)" className="rounded">Bride</a>
            <a href="jvascript:void(0)" className="rounded">Lifestyle</a>
            <a href="jvascript:void(0)" className="rounded">Travel</a>
            <a href="jvascript:void(0)" className="rounded">Beauty</a>
            <a href="jvascript:void(0)" className="rounded">Video</a>
            <a href="jvascript:void(0)" className="rounded">Audio</a>
          </div>
        </div>
        {/* TAG CLOUDS */}
        {/* SOCIAL */}
        <div className="widget mt-4">
          <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
            Social Media
          </span>
          <ul className="list-unstyled social-icon social text-center mb-0 mt-4">
            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook fea icon-sm fea-social"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a></li>
            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram fea icon-sm fea-social"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a></li>
            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter fea icon-sm fea-social"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a></li>
            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin fea icon-sm fea-social"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a></li>
            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github fea icon-sm fea-social"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></a></li>
            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube fea icon-sm fea-social"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg></a></li>
            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-gitlab fea icon-sm fea-social"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg></a></li>
          </ul>{/*end icon*/}
        </div>
      </div>
    </div>
  </div>
  )
}
