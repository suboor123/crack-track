import React from 'react';

type Size = 'sm' | 'md' | 'lg';

export type ModalConfig = {
    show: boolean;
    onClose: () => void;
    size?: Size;
};

interface Props {
    modalConfig: ModalConfig;
    children: JSX.Element | JSX.Element[];
}

const Modal: React.FC<Props> = (props) => {
    return (
        <>
            {props.modalConfig.show && (
                <div
                    className={`modal fade opaque-bg 
        ${props.modalConfig.show ? 'show' : ''}`}
                    tabIndex={-1}
                    aria-modal="true"
                    role="dialog"
                    style={{
                        display: `${props.modalConfig.show ? 'block' : 'none'}`,
                        paddingLeft: 0,
                    }}
                    onClick={props.modalConfig.onClose}
                >
                    <div
                        className={`modal-dialog  
            modal-${props.modalConfig.size ? props.modalConfig.size : 'md'} 
            modal-dialog-centered`}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="modal-content rounded shadow border-0">
                            <div
                                className="modal-body py-5"
                                style={{
                                    maxHeight: '90vh',
                                    overflowY: 'scroll',
                                }}
                            >
                                <div className="container-fluid px-0">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
