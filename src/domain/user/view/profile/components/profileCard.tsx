import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal.component';
import Tooltip from '../../../../../components/Tooltip/Tooltip.component';
import { UserModel } from '../../../model/user.model';
import { EditProfilePopup } from '../../form/edit-profile-popup.form';
import OfficialAccountIcon from './officialAccountIcon';
import ProfileImage from './profileImage';
import ProfileImageUploader from './profileImageUploader';

interface Props {
    userModel: UserModel;
}
const ProfileCard: React.FC<Props> = ({ userModel }) => {
    const [showModal, setShowModal] = useState(false);

    const handleEditProfileImage = () => {
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    return (
        <>
            <section className="bg-profile d-table w-100 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card public-profile border-0 rounded shadow">
                                <div className="card-body">
                                    <div className="row align-items-center py-3">
                                        <ProfileImage userModel={userModel}>
                                            <Tooltip content="Edit my profile picture">
                                                <span
                                                    className="mt-2"
                                                    onClick={
                                                        handleEditProfileImage
                                                    }
                                                    style={{
                                                        position: 'absolute',
                                                        fontSize: '15px',
                                                        left: '50%',
                                                        top: '107%',
                                                        color: '#2f55d4',
                                                        cursor: 'pointer',
                                                        transform:
                                                            'translate(-50%, -50%)',
                                                    }}
                                                >
                                                    <i className="uil uil-edit align-middle me-1"></i>{' '}
                                                    <span className="inline-block mt-5">
                                                        Edit
                                                    </span>
                                                </span>
                                            </Tooltip>
                                        </ProfileImage>
                                        <div className="col-lg-10 col-md-9">
                                            <div className="row align-items-end">
                                                <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                                                    <h3 className="title mb-0">
                                                        <div className="mr-2 d-inline-block">
                                                            {userModel.pluck(
                                                                'username'
                                                            )}{' '}
                                                            <OfficialAccountIcon
                                                                userModel={
                                                                    userModel
                                                                }
                                                            ></OfficialAccountIcon>
                                                        </div>
                                                        <span
                                                            style={{
                                                                zIndex: 1,
                                                            }}
                                                        ></span>
                                                    </h3>
                                                    <small className="text-muted h6 me-2">
                                                        {userModel.pluck(
                                                            'aboutMe'
                                                        )}
                                                    </small>
                                                    <br />{' '}
                                                    <EditProfilePopup className="text-primary pointer"></EditProfilePopup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                modalConfig={{
                    show: showModal,
                    onClose: closeModal,
                }}
            >
                <ProfileImageUploader
                    userModel={userModel}
                    afterUpload={closeModal}
                ></ProfileImageUploader>
            </Modal>
        </>
    );
};

export default ProfileCard;
