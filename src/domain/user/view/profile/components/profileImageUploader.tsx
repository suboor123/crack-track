import { useRef, useState } from 'react'
import UserButton from '../../../../../components/Button/UserButton.component';
import ProgressBar from '../../../../../components/Progress/ProgressBar.component';
import { Toastr } from '../../../../../library/notifier/toastr';
import { UserModel } from '../../../model/user.model'


interface Props {
    userModel: UserModel;
    afterUpload: () => void
}

export default function ProfileImageUploader(props: Props) {
    const { userModel } = props;

    const fileInput: any = useRef(null);

    const [imageFile, setImageFile] = useState(undefined);
    const [selectedFileUrl, setSelectedFileUrl] = useState('');
    const [disableUploadBtn, setDisableUploadBtn] = useState(false);

    const [uploadationProgress, setUploaddationProgress] = useState(0)

    const handleChooseFileBtnClick = () => {
        fileInput.current!.click();
    }

    const handleChooseFle = (e: any) => {
        const file = e.currentTarget.files[0];
        const tempUrl = window.URL.createObjectURL(file);

        setImageFile(file as any)
        setSelectedFileUrl(tempUrl);
    }

    const handleUpload = async () => {
        setDisableUploadBtn(true)
        userModel.uploadImage(imageFile as any,
            async ([percent, downloadedUrl]) => {
                setUploaddationProgress(percent)
                if (percent === 100 && downloadedUrl) {
                    await userModel.updateUserImage(downloadedUrl);
                    props.afterUpload()
                    setTimeout(() => {
                        setDisableUploadBtn(false);
                        Toastr.fire(`Looking good ${userModel.firstName}`, `Awesome!`).success();
                    }, 500)
                }
            })
    }

    return (
        <>
            <div className="text-center">
                <div className="mb-5">
                    {!userModel.hasProfileImage && (<h4 className='text-center'>
                        Great! {userModel.firstName} <br />
                        Let's upload a new profile picture
                    </h4>)}

                    {userModel.hasProfileImage && (<h4 className='text-center'>
                        Looks Good {userModel.firstName}!
                    </h4>)}
                </div>
                <div
                    className="icon d-flex align-items-center justify-content-center rounded-circle mx-auto"
                    style={{ height: 95 }}>

                    {/* IF USER HAS PROFILE IMAGE LET'S PREVIEW THAT */}
                    {userModel.hasProfileImage && <img src={selectedFileUrl ? selectedFileUrl : userModel.pluck('image')}
                        className="img-fluid rounded-circle border" alt=""
                        style={{ height: 150, width: 150, objectFit: 'cover' }} />}

                    {/* IF USER DOES NOT HAVE PROFILE IMAGE */}
                    {!userModel.hasProfileImage && !selectedFileUrl && <div
                        className="no-profile-image avatar avatar-large rounded-circle shadow d-block mx-auto">
                        <h3>{`${userModel.pluck('username')[0]}`}</h3></div>}
                    {!userModel.hasProfileImage && selectedFileUrl && <img src={selectedFileUrl}
                        className="img-fluid rounded-circle border" alt=""
                        style={{ height: 150, width: 150, objectFit: 'cover' }} />}
                </div>
            </div>
            <div className="mt-5 text-center">
                <UserButton
                    className='btn btn-pills btn-soft-dark d-block mx-auto'
                    onClick={handleChooseFileBtnClick}
                >

                    Change Profile Picture
                </UserButton>
                {selectedFileUrl && <UserButton
                    disabled={disableUploadBtn}
                    className='btn btn-pills btn-primary mt-3 d-block mx-auto'
                    onClick={handleUpload}>

                    <i className="uil uil-upload align-middle me-1 text-center"></i> Upload
                </UserButton>}

                <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg"
                    onChange={(e) => handleChooseFle(e)}
                    ref={fileInput} className='form-control d-none' />
                {disableUploadBtn && <ProgressBar title={'Uploading'} progress={uploadationProgress}></ProgressBar>}

            </div>
        </>

    )
}
