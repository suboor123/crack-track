import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserState } from '../../domain/user/redux/reducer/user.reducer';
import { UserModel } from '../../domain/user/model/user.model';
import UserNav from './UserNav.component';
import { MenuItems } from './Menu';
import {
    APP_TITLE,
    PLACEHOLDER_IMAGE,
} from '../../library/constant/app.constant';
import Contact from '../../domain/contact/view/contact.view';
import { useEffect, useState } from 'react';
import { TopicModel } from '../../domain/topics/model/topic.model';
import { TopicState } from '../../domain/topics/redux/reducer/topic.reducer';
import { Topic } from '../../domain/topics/model/topic';
import { HamburgerButton } from './Hamburger.component';

interface Props {
    currentUserModel?: UserModel;
    topics: Topic[];
}

const Navbar = ({ currentUserModel, topics }: Props) => {
    const [menu, setMenu] = useState(MenuItems);

    useEffect(() => {
        TopicModel.makeTopicCollection();
    }, []);

    const setTopicDropdown = async () => {
        const cloneMenu = [...menu];
        cloneMenu[1].submenu = topics.map((topic) => {
            return {
                title: topic.title,
                routeTo: '/interview-questions/' + topic.uid,
                hasSubmenu: false,
                hasImage: topic.imageUrl,
            };
        });

        setMenu(cloneMenu);
    };

    useEffect(() => {
        setTopicDropdown();
    }, [topics.length]);

    return (
        <>
            <header id="topnav" className="defaultscroll sticky">
                <div className="container">
                    {/* Logo container*/}
                    <Link className="logo" to="/">
                        {APP_TITLE.toUpperCase()}
                    </Link>
                    {/* Logo End */}
                    {/* End Logo container*/}
                    <div className="menu-extras">
                        <div className="menu-item">
                            {/* Mobile menu toggle*/}
                            <HamburgerButton></HamburgerButton>
                            {/* End mobile menu toggle*/}
                        </div>
                    </div>
                    {/*Login button Start*/}
                    <UserNav currentUserModel={currentUserModel}></UserNav>
                    {/*Login button End*/}
                    <div id="navigation">
                        {/* Navigation Menu*/}
                        <ul className="navigation-menu">
                            {menu.map((menu, key) => {
                                if (!menu.hasSubmenu) {
                                    return (
                                        <li key={key}>
                                            <Link
                                                to={menu.routeTo!}
                                                className="sub-menu-item"
                                            >
                                                {menu.title}
                                            </Link>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li
                                            className="has-submenu parent-parent-menu-item"
                                            key={key}
                                        >
                                            <a>{menu.title}</a>
                                            <span className="menu-arrow" />
                                            <ul className="submenu megamenu">
                                                {menu.submenu
                                                    ?.slice(0, 7)
                                                    .map((submenu, key) => (
                                                        <li key={key}>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        to={
                                                                            submenu.routeTo!
                                                                        }
                                                                        className="sub-menu-item features"
                                                                    >
                                                                        <div className="text-lg-center">
                                                                            <span className="d-none d-lg-block">
                                                                                <img
                                                                                    src={
                                                                                        submenu.hasImage ||
                                                                                        PLACEHOLDER_IMAGE
                                                                                    }
                                                                                    className="img-fluid rounded shadow-md"
                                                                                    style={{
                                                                                        height: '100px',
                                                                                        width: '200px',
                                                                                        objectFit:
                                                                                            'cover',
                                                                                    }}
                                                                                />
                                                                            </span>
                                                                            <span className="mt-lg-2 d-block">
                                                                                {
                                                                                    submenu.title
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </li>
                                    );
                                }
                            })}
                            <Contact></Contact>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state: { user: UserState; topics: TopicState }) => {
    return {
        currentUserModel: state.user.currentUser
            ? UserModel.make(state.user.currentUser)
            : undefined,
        topics: state.topics.topicList,
    };
};

const mapDispatcherToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatcherToProps)(Navbar);
