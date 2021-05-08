import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./Components/Settings/Settings";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import Preloader from "./Components/Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const Login = React.lazy(() => import('./Components/Login/Login'))
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./Components/Users/UsesrContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>

                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>

                    <Route path='/users'
                           render={withSuspense(UsersContainer)}/>

                    <Route path='/login'
                           render={withSuspense(Login)}/>

                    <Route path='/settings'
                           render={() => <Settings/>}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJsApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiJsApp;

