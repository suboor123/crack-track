import React from 'react';
import Modal from '../../../../components/Modal/Modal.component';
import Tooltip from '../../../../components/Tooltip/Tooltip.component';
import ProfileForm from './ProfileForm.form';

interface Props {
    iconSize?: number;
    style?: { [key: string]: any };
    className?: string;
}

export const EditProfilePopup: React.FC<Props> = ({ style = {}, ...props }) => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <Tooltip content="Edit my profile" placement="bottom">
                <span
                    className={`${
                        props.className ? props.className : 'mt-2 text-primary'
                    }`}
                    onClick={() => {
                        setShowModal(true);
                    }}
                    style={{
                        fontSize: `${props.iconSize || 20}px`,
                        ...style,
                    }}
                >
                    <i className="uil uil-edit align-middle me-1"></i>
                </span>
            </Tooltip>
            <Modal
                modalConfig={{
                    show: showModal,
                    onClose: function (): void {
                        setShowModal(false);
                    },
                    size: 'lg',
                }}
            >
                <div className="p-2">
                    <ProfileForm
                        afterUpdate={function (): void {
                            setShowModal(false);
                        }}
                    ></ProfileForm>
                </div>
            </Modal>
        </>
    );
};
