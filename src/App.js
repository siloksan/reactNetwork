import React, {lazy, Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import   Music from "./components/Music/Music";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeAppThunkCreator} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const ProfileContainer = lazy(() =>
    import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() =>
    import('./components/Users/UsersContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
    //componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM).
    // В этом методе должны происходить действия, которые требуют наличия DOM-узлов.
    // Это хорошее место для создания сетевых запросов.
    componentDidMount() {
        this.props.initializeAppThunkCreator()
    }

    render() {
        return (
            <div role={'main'} className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path='/profile' element={<ProfileContainer/>}>
                                <Route path=':userId' element={<ProfileContainer/>}/>
                            </Route>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

// mapStateToProps является функцией, которая возвращает либо обычный объект, либо другую функцию.
// Передача этого аргумента connect() приводит к подписке компонента-контейнера на обновления хранилища Redux.
// Это означает, что функция mapStateToProps будет вызываться каждый раз, когда состояние хранилища изменяется.
// Если вам слежение за обновлениями состояния не интересно, передайте connect() в качестве значения этого аргумента undefined или null.
//в нашем случае я передаю свойство initialized
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeAppThunkCreator})(App);

const SamuraiJsApp = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default SamuraiJsApp;