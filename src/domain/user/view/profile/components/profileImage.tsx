import React from 'react'
import { UserModel } from '../../../model/user.model'
interface Props {
    userModel: UserModel;
    children?: JSX.Element | JSX.Element[]
}

const ProfileImage: React.FC<Props> = ({ userModel, children }) => {
    const profileImage = userModel.pluck('image');
    if (profileImage) {
        return (
            <div className="col-lg-2 col-md-3 text-md-start text-center">
                <img src={userModel.pluck('image') || "assets/images/client/05.jpg"} 
                className="avatar avatar-large border rounded-circle shadow d-block mx-auto" 
                style={{ objectFit: 'cover' }} />
                {children || null}
            </div>
        )
    }

    let profileText = `${userModel.pluck('username')[0]}`;
    return (
        <div className="col-lg-2 col-md-3 text-md-start text-center">
            <div className="no-profile-image avatar avatar-large rounded-circle shadow d-block mx-auto">
                <h3>{profileText.toUpperCase()}</h3>
                {children || null}
            </div>
        </div>
    )
}

export default ProfileImage