import { connect } from 'react-redux';
import { User } from '../../../user/model/user';
import { UserModel } from '../../../user/model/user.model';
import MainSearch from './MainSearch.component';

interface Props {
    currentUserModel?: UserModel | undefined;
}

const Hero: React.FC<Props> = ({ currentUserModel }) => {
    return (
        <section className="bg-half-170 bg-light d-table w-100">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className="pages-heading">
                            <h4 className="title">
                                {' '}
                                Hello!{' '}
                                {currentUserModel && currentUserModel.firstName}
                                <br /> How can we help you?{' '}
                            </h4>
                            <MainSearch />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state: { user: { currentUser: User } }) => {
    return {
        currentUserModel: state.user.currentUser
            ? UserModel.make(state.user.currentUser)
            : undefined,
    };
};
export default connect(mapStateToProps, null)(Hero);
