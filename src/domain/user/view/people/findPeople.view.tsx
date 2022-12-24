import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { User } from '../../model/user';
import { UserModel } from '../../model/user.model';
import { UserState } from '../../redux/reducer/user.reducer';
import OfficialAccountIcon from '../profile/components/officialAccountIcon';

interface Props {
    users: User[];
    currentUser: User | undefined;
}

const FindPeople: React.FC<Props> = ({ users, currentUser }) => {
    useEffect(() => {
        UserModel.syncAll();
    }, []);

    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tempora veritatis corrupti,{' '}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {users &&
                        users
                            .filter((user) => currentUser?.uid !== user.uid)
                            .map((user) => (
                                <div
                                    className="col-lg-3 col-md-6 mt-4 p-2 "
                                    key={user.uid}
                                >
                                    <div
                                        className="card border p-2  team-primary text-center"
                                        style={{
                                            minHeight: '400px',
                                            maxHeight: '400px',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <div className="position-relative">
                                            <img
                                                src={user.image}
                                                className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                                                style={{
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </div>
                                        <div className="card-body py-3 px-0 content">
                                            <h5 className="mb-0">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="name text-dark"
                                                >
                                                    {user.username}{' '}
                                                    <OfficialAccountIcon
                                                        userModel={UserModel.make(
                                                            user
                                                        )}
                                                    ></OfficialAccountIcon>
                                                </a>
                                            </h5>
                                            <small
                                                className="designation text-muted"
                                                style={{
                                                    minHeight: '200px',
                                                    maxHeight: '200px',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                {user.aboutMe}
                                            </small>
                                            <div className="p-3">
                                                <button
                                                    className="btn btn-md btn-primary rounded-0 w-100"
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: '0%',
                                                        left: '0%',
                                                    }}
                                                >
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state: { user: UserState }) => {
    return {
        currentUser: state.user.currentUser,
        users: state.user.users,
    };
};

const mapDispatcherToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatcherToProps)(FindPeople);
