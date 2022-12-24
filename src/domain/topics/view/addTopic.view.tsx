import { useRef, useState } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../../../components/Progress/ProgressBar.component';
import { PLACEHOLDER_IMAGE } from '../../../library/constant/app.constant';
import { Toastr } from '../../../library/notifier/toastr';
import { UserModel } from '../../user/model/user.model';
import { UserState } from '../../user/redux/reducer/user.reducer';
import { Topic, TopicFrom } from '../model/topic';
import { TopicModel } from '../model/topic.model';
import { TopicForm } from './form/topic.form';

interface Props {
    currentUserModel: UserModel;
}

function AddTopic(props: Props) {
    const [imageFile, setImageFile] = useState(undefined);
    const [selectedImageUrl, setSelectedImageUrl] = useState(PLACEHOLDER_IMAGE);
    const fileInput: any = useRef(null);

    const [disableUploadBtn, setDisableUploadBtn] = useState(false);

    const [uploadationProgress, setUploaddationProgress] = useState(0);

    const handleChooseFileBtnClick = () => {
        fileInput.current!.click();
    };

    const handleChooseFle = (e: any) => {
        const file = e.currentTarget.files[0];
        const tempUrl = window.URL.createObjectURL(file);

        setImageFile(file as any);
        setSelectedImageUrl(tempUrl);
    };

    const resetImage = () => {
        setImageFile(undefined);
        setSelectedImageUrl(PLACEHOLDER_IMAGE);
        setDisableUploadBtn(false);
    };

    const validateImage = (): boolean => {
        return imageFile !== undefined;
    };

    const onSubmit = async (values: TopicFrom, resetForm: () => void) => {
        if (!validateImage()) {
            Toastr.fire('Select an image', 'No Image').error();
            return;
        }

        const topic = values as Topic;
        setDisableUploadBtn(true);

        TopicModel.uploadImage(
            imageFile as any,
            async ([percent, downloadedUrl]: any) => {
                setUploaddationProgress(percent);
                if (percent === 100 && downloadedUrl) {
                    topic['imageUrl'] = downloadedUrl;
                    topic['created_by'] = props.currentUserModel.pluck('uid')!;
                    await TopicModel.createTopic(topic);
                    resetForm();
                    resetImage();
                }
            }
        );
    };

    return (
        <>
            <h5 className="text-md-start text-center">Add Topic</h5>
            <div className="mt-3 text-md-start text-center d-md-flex">
                <img
                    src={selectedImageUrl}
                    className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4"
                    style={{ objectFit: 'cover' }}
                />
                <div className="mt-md-4 mt-3 mt-sm-0">
                    <a
                        onClick={handleChooseFileBtnClick}
                        className="btn btn-primary mt-2"
                    >
                        Choose Picture
                    </a>
                    <input
                        type="file"
                        accept="image/png, image/gif, image/jpeg, image/jpg"
                        onChange={(e) => handleChooseFle(e)}
                        ref={fileInput}
                        className="form-control d-none"
                    />
                </div>
            </div>
            <div className="mt-5">
                {/* TOPIC FORM */}
                <TopicForm submitForm={onSubmit}></TopicForm>

                {/* PROGRESS BAR TO DETECT IMAGE UPLOADATION PROGRESS */}
                {disableUploadBtn && (
                    <ProgressBar
                        title={'Uploading'}
                        progress={uploadationProgress}
                    ></ProgressBar>
                )}
            </div>
        </>
    );
}

const mapStateToProps = (state: { user: UserState }) => ({
    currentUserModel: UserModel.make(state.user.currentUser!),
});

const mapDispatcherToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatcherToProps)(AddTopic);
