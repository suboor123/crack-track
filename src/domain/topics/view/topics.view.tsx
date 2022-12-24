import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/Button/Button.component';
import SkeletonLoading from '../../../components/Loaders/Skeleton/Skeleton.component';
import { PLACEHOLDER_IMAGE } from '../../../library/constant/app.constant';
import { UserModel } from '../../user/model/user.model';
import { UserState } from '../../user/redux/reducer/user.reducer';
import { TopicModel } from '../model/topic.model';
import { TopicState } from '../redux/reducer/topic.reducer';

interface Props {
    currentUserModel?: UserModel;
    topicModels: TopicModel[];
}

const Topics: React.FC<Props> = (props) => {
    const { topicModels } = props;

    return (
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Featured Topics</h4>
                        <p className="text-muted para-desc mx-auto mb-0">
                            Start working with{' '}
                            <span className="text-primary fw-bold">
                                Landrick
                            </span>{' '}
                            that can provide everything you need to generate
                            awareness, drive traffic, connect.
                        </p>
                    </div>
                </div>
            </div>
            {/*end row*/}
            <div className="row">
                {topicModels.length === 0 && (
                    <>
                        <SkeletonLoading col={3} row={2}></SkeletonLoading>
                    </>
                )}
                {topicModels &&
                    topicModels.slice(0, 6).map((topic, key) => (
                        <div
                            className="col-lg-4 col-md-6 col-12 mt-4 pt-2"
                            key={key}
                        >
                            <a>
                                <div
                                    className="d-flex features feature-primary key-feature p-3  rounded shadow"
                                    style={{
                                        height: '150px',
                                        overflow: 'hidden',
                                        padding: '10px',
                                    }}
                                >
                                    <img
                                        src={topic.pluck(
                                            'imageUrl' || PLACEHOLDER_IMAGE
                                        )}
                                        className=""
                                        style={{
                                            height: '50px',
                                            width: '50px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div className="flex-1 ms-3">
                                        <h4 className="title mb-0 text-dark">
                                            {topic.pluck('title')}
                                        </h4>
                                        <p
                                            className="text-muted mb-0"
                                            style={{
                                                maxHeight: '40px',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {topic.pluck('description')}
                                        </p>
                                        <div
                                            style={{
                                                float: 'right',
                                            }}
                                        >
                                            <Button className="btn btn-soft-primary btn-sm mt-3 float-right">
                                                Enroll
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}

                <div className="col-12 text-center mt-4 pt-2">
                    <a href="job-list-one.html" className="btn btn-primary">
                        Explore{' '}
                        <i className="uil uil-angle-right-b align-middle" />
                    </a>
                </div>
            </div>
            {/*end row*/}
        </div>
    );
};

const mapStateToProps = (state: { user: UserState; topics: TopicState }) => {
    return {
        currentUserModel: state.user.currentUser
            ? UserModel.make(state.user.currentUser)
            : undefined,
        topicModels: state.topics.topicList.map((topic) =>
            TopicModel.make(topic)
        ),
    };
};

const mapDispatcherToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatcherToProps)(Topics);
