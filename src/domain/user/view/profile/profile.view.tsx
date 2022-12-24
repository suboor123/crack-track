import { connect } from 'react-redux';
import React, { useState } from 'react';
import { UserState } from '../../redux/reducer/user.reducer';
import { UserModel } from '../../model/user.model';
import ProfileCard from './components/profileCard';
import { Outlet } from 'react-router-dom';
import SidePanel from './components/sidePanel';

interface Props {
    currentUserModel?: UserModel | undefined;
}

const UserProfile: React.FC<Props> = ({ currentUserModel }) => {
    return (
        <>
            <ProfileCard userModel={currentUserModel!} />

            <section id="profile-section" className="mt-100">
                <div className="container mt-lg-3">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 d-lg-block d-none">
                            <SidePanel
                                currentUserModel={currentUserModel!}
                            ></SidePanel>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="card border-0 rounded shadow">
                                <div className="card-body">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state: { user: UserState }) => {
    return {
        currentUserModel: state.user.currentUser
            ? UserModel.make(state.user.currentUser)
            : undefined,
    };
};
export default connect(mapStateToProps, null)(UserProfile);
