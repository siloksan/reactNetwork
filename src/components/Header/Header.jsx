import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={s.header}>
        <img src="https://www.logologo.com/logos/abstract-mollusk-sea-shell-free-logo.jpg" alt=""/>
        <div className={s.loginBlock}>
            {/*создаём кнопку для выхода из аккаунта и условие для перенаправления на страницу login*/}
            {props.isAuth ?  <div>{props.login} <button onClick={props.logout}>Log out</button></div>: <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>)
}

export default Header;