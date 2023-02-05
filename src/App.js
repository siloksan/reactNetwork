import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppThunkCreator} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    //componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM).
    // В этом методе должны происходить действия, которые требуют наличия DOM-узлов.
    // Это хорошее место для создания сетевых запросов.
    componentDidMount() {
        this.props.initializeAppThunkCreator()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
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
                    </div>
                </div>
            </BrowserRouter>
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

export default connect(mapStateToProps, {initializeAppThunkCreator})(App);
