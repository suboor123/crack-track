import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserModel } from '../../../model/user.model';

interface Props {
    currentUserModel: UserModel;
}

export default function SidePanel({ currentUserModel }: Props) {
    const navigate = useNavigate();

    return (
        <>
            <div className="sidebar sticky-bar p-4 rounded shadow">
                <div className="widget">
                    <h5 className="widget-title">Followers :</h5>
                    <div className="row mt-4">
                        <div className="col-6 text-center">
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
                                className="feather feather-user-plus fea icon-ex-md text-primary mb-1"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="8.5" cy={7} r={4} />
                                <line x1={20} y1={8} x2={20} y2={14} />
                                <line x1={23} y1={11} x2={17} y2={11} />
                            </svg>
                            <h5 className="mb-0">2588</h5>
                            <p className="text-muted mb-0">Followers</p>
                        </div>
                        <div className="col-6 text-center">
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
                                className="feather feather-users fea icon-ex-md text-primary mb-1"
                            >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx={9} cy={7} r={4} />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <h5 className="mb-0">454</h5>
                            <p className="text-muted mb-0">Following</p>
                        </div>
                    </div>
                </div>
                <div className="widget mt-4 pt-2">
                    <h5 className="widget-title">Projects :</h5>
                    <div className="progress-box mt-4">
                        <h6 className="title text-muted">Progress</h6>
                        <div className="progress">
                            <div
                                className="progress-bar position-relative bg-primary"
                                style={{ width: '50%' }}
                            >
                                <div className="progress-value d-block text-muted h6">
                                    24 / 48
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end process box*/}
                </div>
                <div className="widget mt-4">
                    <ul
                        className="list-unstyled sidebar-nav mb-0"
                        id="navmenu-nav"
                    >
                        <li className="navbar-item account-menu px-0">
                            <NavLink
                                to={'/profile/'}
                                className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                            >
                                <span className="h4 mb-0">
                                    <i className="uil uil-dashboard" />
                                </span>
                                <h6 className="mb-0 ms-2">Profile</h6>
                            </NavLink>
                        </li>
                        {currentUserModel.isAdmin && (
                            <li className="navbar-item account-menu px-0 mt-2">
                                <NavLink
                                    to={'/profile/add-topic'}
                                    className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                                >
                                    <span className="h4 mb-0">
                                        <i className="uil uil-comment-add" />
                                    </span>
                                    <h6 className="mb-0 ms-2">Add Topic</h6>
                                </NavLink>
                            </li>
                        )}

                        <li className="navbar-item account-menu px-0 mt-2">
                            <a
                                onClick={() => {
                                    UserModel.logoutMe();
                                    navigate('/login');
                                }}
                                className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                            >
                                <span className="h4 mb-0">
                                    <i className="uil uil-power" />
                                </span>
                                <h6 className="mb-0 ms-2">Logout</h6>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
