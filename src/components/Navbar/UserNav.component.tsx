import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserModel } from '../../domain/user/model/user.model'
import Button from '../Button/Button.component';
import Modal from '../Modal/Modal.component';
import Tooltip from '../Tooltip/Tooltip.component';


interface Props {
    currentUserModel?: UserModel
}

const UserNav: React.FC<Props> = (props) => {

    const { currentUserModel } = props;

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        UserModel.logoutMe();
        navigate('/login');
        setShowLogoutModal(false)
    }

    if (currentUserModel) {
        return (
            <>
                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0">
                        <div className="dropdown dropdown-primary">
                            <Tooltip content={'My Account'} placement='left'>
                                <button type="button"
                                    className={`btn btn-icon btn-pills btn-primary shadow-lg dropdown-toggle`}
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user icons"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg></button>
                            </Tooltip>

                            <div className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-1 py-3" style={{ width: 200 }}>
                                <Link className="dropdown-item text-dark" to="/profile"><i className="uil uil-user align-middle me-1" /> {currentUserModel.pluck('username')}</Link>
                                <a className="dropdown-item text-dark" ><i className="uil uil-clipboard-notes align-middle me-1" /> Order History</a>
                                <a className="dropdown-item text-dark" ><i className="uil uil-arrow-circle-down align-middle me-1" /> Download</a>
                                {currentUserModel.isAdmin && (
                                    <a className="dropdown-item text-dark" ><i className="uil uil-dashboard align-middle me-1" />
                                        Admin Dashboard
                                    </a>
                                )}
                                <div className="dropdown-divider my-3 border-top" />
                                <a className="dropdown-item" onClick={() => setShowLogoutModal(true)}><i className="uil uil-sign-out-alt align-middle me-1" /> Logout</a>
                            </div>
                        </div>
                    </li>
                </ul>

                <Modal modalConfig={{
                    show: showLogoutModal,
                    onClose: () => setShowLogoutModal(false),
                    size: 'md'
                }} >
                    <div className="p3 text-center mt-5 display-4">
                        <i className="uil uil-sign-out-alt text-danger d-block"></i>
                        <h4>Are you sure ? You want to logout</h4>
                        <div className="mt-3 text-center">
                            <Button
                                includeTooltip={true}
                                tooltopPlacement={'bottom'}
                                tooltipText="Log me out"
                                onClick={handleLogout}
                                className='btn btn-danger btn-primary w-50 mt-2 me-2'>
                                Yes
                            </Button>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }


    return (
        <ul className="buy-button list-inline mb-0" style={{ lineHeight: '59px' }}>
            {!props.currentUserModel && <li className="list-inline-item mb-0">
                <Link to="/login"
                    className={`btn btn-primary btn-md mt-2 me-2`}
                >Login</Link>
            </li>}
        </ul>
    )
}

export default UserNav