import React from 'react';
import { UserModel } from '../../../../model/user.model';

interface Props {
    currentUserModel: UserModel;
}

export default function PersonalDetails({ currentUserModel }: Props) {
    return (
        <div className="border-bottom pb-4">
            <div className="row">
                <div className="col-md-6 mt-4">
                    <h5>Personal Details :</h5>
                    <div className="mt-4">
                        <div className="d-flex align-items-center">
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
                                className="feather feather-mail fea icon-ex-md text-muted me-3"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <div className="flex-1">
                                <h6 className="text-primary mb-0">Email :</h6>
                                <a className="text-muted">
                                    {currentUserModel.pluck('email')}
                                </a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
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
                                className="feather feather-bookmark fea icon-ex-md text-muted me-3"
                            >
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                            <div className="flex-1">
                                <h6 className="text-primary mb-0">Skills :</h6>
                                <a className="text-muted">html</a>,{' '}
                                <a className="text-muted">css</a>,{' '}
                                <a className="text-muted">js</a>,{' '}
                                <a className="text-muted">mysql</a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
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
                                className="feather feather-italic fea icon-ex-md text-muted me-3"
                            >
                                <line x1={19} y1={4} x2={10} y2={4} />
                                <line x1={14} y1={20} x2={5} y2={20} />
                                <line x1={15} y1={4} x2={9} y2={20} />
                            </svg>
                            <div className="flex-1">
                                <h6 className="text-primary mb-0">
                                    Language :
                                </h6>
                                <a className="text-muted">English</a>,{' '}
                                <a className="text-muted">Japanese</a>,{' '}
                                <a className="text-muted">Chinese</a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
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
                                className="feather feather-globe fea icon-ex-md text-muted me-3"
                            >
                                <circle cx={12} cy={12} r={10} />
                                <line x1={2} y1={12} x2={22} y2={12} />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <div className="flex-1">
                                <h6 className="text-primary mb-0">Website :</h6>
                                <a className="text-muted">
                                    www.kristajoseph.com
                                </a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
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
                                className="feather feather-gift fea icon-ex-md text-muted me-3"
                            >
                                <polyline points="20 12 20 22 4 22 4 12" />
                                <rect x={2} y={7} width={20} height={5} />
                                <line x1={12} y1={22} x2={12} y2={7} />
                                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                            </svg>
                            <div className="flex-1">
                                <h6 className="text-primary mb-0">
                                    Birthday :
                                </h6>
                                <p className="text-muted mb-0">
                                    2nd March, 1996
                                </p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
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
                                className="feather feather-map-pin fea icon-ex-md text-muted me-3"
                            >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx={12} cy={10} r={3} />
                            </svg>
                            <div className="flex-1">
                                <h6 className="text-primary mb-0">
                                    Location :
                                </h6>
                                <a className="text-muted">Beijing, China</a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
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
                                className="feather feather-phone fea icon-ex-md text-muted me-3"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <div className="flex-1">
                                <h6 className="text-primary mb-0">Cell No :</h6>
                                <a className="text-muted">(+12) 1254-56-4896</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end col*/}
                <div className="col-md-6 mt-4 pt-2 pt-sm-0">
                    <h5>Experience :</h5>
                    <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow mt-4">
                        <img
                            src="assets/images/job/Circleci.svg"
                            className="avatar avatar-ex-sm"
                        />
                        <div className="flex-1 content ms-3">
                            <h4 className="title mb-0">Senior Web Developer</h4>
                            <p className="text-muted mb-0">
                                3 Years Experience
                            </p>
                            <p className="text-muted mb-0">
                                <a className="read-more">CircleCi</a> @London,
                                UK
                            </p>
                        </div>
                    </div>
                    <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow mt-4">
                        <img
                            src="assets/images/job/Codepen.svg"
                            className="avatar avatar-ex-sm"
                        />
                        <div className="flex-1 content ms-3">
                            <h4 className="title mb-0">Web Designer</h4>
                            <p className="text-muted mb-0">
                                2 Years Experience
                            </p>
                            <p className="text-muted mb-0">
                                <a className="read-more">Codepen</a> @Washington
                                D.C, USA
                            </p>
                        </div>
                    </div>
                    <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow mt-4">
                        <img
                            src="assets/images/job/Gitlab.svg"
                            className="avatar avatar-ex-sm"
                        />
                        <div className="flex-1 content ms-3">
                            <h4 className="title mb-0">UI Designer</h4>
                            <p className="text-muted mb-0">
                                2 Years Experience
                            </p>
                            <p className="text-muted mb-0">
                                <a className="read-more">Gitlab</a> @Perth,
                                Australia
                            </p>
                        </div>
                    </div>
                </div>
                {/*end col*/}
            </div>
            {/*end row*/}
        </div>
    );
}
