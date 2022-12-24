/**
 * CSS
 */
import './App.css';
import 'rsuite/dist/rsuite.min.css';

/**
 * Libraries
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import RouteChangeDetector from './components/RouteChangeDetector/RouteChangeDetector';
import { Firebase } from './core/firebase/firebase';
import { UserState } from './domain/user/redux/reducer/user.reducer';
import { connect } from 'react-redux';
import { User } from './domain/user/model/user';
import { UserModel } from './domain/user/model/user.model';

/**
 * Components
 */
import Home from './domain/home/view/Home.view';
import Navbar from './components/Navbar/Navbar.component';
import Contact from './domain/contact/view/contact.view'
import UserProfile from './domain/user/view/profile/profile.view';
import RegisterV2 from './authentication/V2/register/RegisterV2';
import LoginV2 from './authentication/V2/login/LoginV2';
import Footer from './components/Footer/Footer.component';
import InitialLoader from './components/Loaders/InitialLoader/InitialLoader.component';
import Questions from './domain/questions/view/ViewQuestions/question.view';
import AddTopic from './domain/topics/view/addTopic.view';
import PersonalDetails from './domain/user/view/profile/components/outlets/personalDetails';
import AddQuestion from './domain/questions/view/AddQuestion/AddQuestion.component';
import FindPeople from './domain/user/view/people/findPeople.view';
import QuestionDetail from './domain/questions/view/QuestionDetail/QuestionDetail.component';

interface Props {
  currentUser?: User
}

function App({ currentUser }: Props) {

  useEffect(() => {
    Firebase.getInstance();
    authenticateMe();
  }, [])

  const authenticateMe = async () => {
    if (!currentUser) {
      const uid = localStorage.getItem('uid');
      if (uid) {
        const user = await UserModel.syncUser(uid);
        await UserModel.setCurrentUser(user)
      }
      setLoadApp(true)
    }
  }

  const [currentLocation, setCurrentLocation] = useState('');
  const [loadApp, setLoadApp] = useState(false);

  const unsupportedHomeSnippets = [
    'login',
    'registration',
    'add-question'
  ]

  const renderNavFooter = (): boolean => {
    return !unsupportedHomeSnippets.includes(currentLocation.toLowerCase())
  }

  return (
    <div className="main-wrapper">
      {loadApp && <BrowserRouter>

        {renderNavFooter() && (<Navbar />)}

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Auth routes */}
          <Route path="/login" element={<LoginV2 />} />
          <Route path="/registration" element={<RegisterV2 />} />

          {/* User routes */}
          <Route path="/profile" element={<UserProfile />} >
            <Route path="/profile/" element={<PersonalDetails
              currentUserModel={UserModel.make(currentUser!)} />} />
            <Route path="/profile/add-topic" element={<AddTopic />} />
          </Route>
          <Route path="/find-people" element={<FindPeople />} />

          {/* Question routes */}
          <Route path="/add-question" element={<AddQuestion />} />
          <Route path="/interview-questions/:id" element={<Questions />} />
          <Route path="/question/:id" element={<QuestionDetail />} />

          {/* contact routes */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <RouteChangeDetector routeChange={(activeRoute: string) => setCurrentLocation(activeRoute)} />

        {renderNavFooter() && (<Footer />)}
      </BrowserRouter>}
      {!loadApp && <InitialLoader />}
    </div >

  );
}

const mapStateToProps = (state: { user: UserState }) => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps, null)(App);
