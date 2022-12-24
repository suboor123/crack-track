import { useState } from "react"
import { connect } from "react-redux"
import LoginForm from "../../../../authentication/V2/login/LoginForm"
import Button from "../../../../components/Button/Button.component"
import Modal from "../../../../components/Modal/Modal.component"
import Quote from "../../../../components/Quote/Quote.component"
import { APP_TITLE } from "../../../../library/constant/app.constant"
import { UserModel } from "../../../user/model/user.model"
import { UserState } from "../../../user/redux/reducer/user.reducer"


interface Props {
    currentUserModel?: UserModel | undefined
}

const MidBanner: React.FC<Props> = (props) => {

    const [showLoginModal, setShowLoginModal] = useState(false);

    const closeLoginModal = () => {
        setShowLoginModal(false)
    }


    return (
        <>
            <div className="container-fluid mt-100 mt-60">
                <div className="py-5" style={{ background: 'url("assets/images/svg-map.svg")' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <span className="clip-text clip-text-image text-uppercase fw-bold" style={{ backgroundImage: 'url("assets/images/logistics/01.jpg")' }}>
                                    enroll now
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60">
                <div className="rounded-md shadow-md py-5 position-relative" style={{ background: 'url("assets/images/3.jpg") center center' }}>
                    <div className="bg-overlay rounded-md" />
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h2 className="fw-bold text-white title-dark  pb-2">People are preparing from <br /> all over the world</h2>
                                    <p className="lead text-white mb-4"><Quote></Quote></p>
                                    {!props.currentUserModel && <Button
                                        tooltipText="Join the community of best interview resources online."
                                        includeTooltip={true}
                                        onClick={() => {
                                            setShowLoginModal(true)
                                        }}>
                                        Join the community
                                    </Button>}
                                </div>
                            </div>{/*end col*/}
                        </div>{/*end row*/}
                    </div>{/*end container*/}
                </div>{/*end slide*/}
            </div>

            <Modal modalConfig={{
                show: showLoginModal,
                onClose: closeLoginModal,
                size: "lg"
            }}>
                <div className="row align-items-center g-0">
                    <div className="col-lg-6 col-md-5">
                        <img src="assets/images/course/online/ab02.jpg" className="img-fluid" />
                    </div>{/*end col*/}
                    <div className="col-lg-6 col-md-7">
                        <div className="p-3">
                            <LoginForm onSubmissionCompleted={closeLoginModal}></LoginForm>
                        </div>
                    </div>{/*end col*/}
                </div>
            </Modal>
        </>
    )
}

const mapStateToProps = (state: { user: UserState }) => {
    return {
        currentUserModel: state.user.currentUser ? UserModel.make(state.user.currentUser) : undefined
    }
}

export default connect(mapStateToProps, null)(MidBanner)