import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Navigate} from "react-router-dom";
import style from '../common/FormsControls/FormControls.module.css'

//создаём отдельную переменную за пределами формы, иначе будет зацикливание
let maxLength = maxLengthCreator(30);
//компонента для формы Авторизации
const LoginForm = ({handleSubmit, error}) => {
    return (
        //метод 'handleSubmit' - вроде как предупреждает что данные собраны и предоставляет их дальше через HOC в контейнерную компоненту!?
        <form onSubmit={handleSubmit}>
            {/*createField - общая функция для полей вода*/}
            { createField('Email', Input, 'email', [required, maxLength]) }
            { createField('Password', Input, 'password', [required, maxLength], {type: 'password'})}
            { createField(null, 'input', 'rememberMe', [], {type: "checkbox"},  'remember me')}
            {/*</div>*/}
            {/*/!*создаём условие для отображения ошибки*!/*/}
            { error && <div className={style.formSummaryError}>{error}</div> }
             <div>
                <button>Login</button>
            </div>
        </form>
    )
}
//Контейнерная компонента для 'LoginForm', 'reduxForm' - HOC
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

//Общая компонента для формы авторизациии ("LoginForm")
const Login = (props) => {

    const onSubmit = (formData) => {
        //в этой точке через пропсы мы вызываем не тот самый thunkCreator, который приходит в компоненту через HOC,
        // а вызываем callback, который в свою очередь диспатчит вызов thunkCreator(login)
        //с переданными параметрами см. ниже
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    //создаём перенаправление при логинизации
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}

const mapStateToProps = (state) => ({
    //свойство isAuth берём из State
    isAuth: state.authUser.isAuth
})

//оборачиваем наш логин в контейнерную компоненту и её экспортируем
export default connect(mapStateToProps, {login})(Login);//здесь login - это thunkCreator