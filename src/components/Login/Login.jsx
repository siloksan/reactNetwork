import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Navigate} from "react-router-dom";

//создаём отдельную переменную за пределами формы, иначе будет зацикливание
let maxLength = maxLengthCreator(30);
//компонента для формы Авторизации
const LoginForm = (props) => {
    return (
        //метод 'handleSubmit' - вроде как предупреждает что данные собраны и предоставляет их дальше через HOC в контейнерную компоненту!?
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} component={Input} name={'email'}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} name={'password'} type={'password'}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field component={'input'} type={"checkbox"} name={'rememberMe'}/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
//Контейнерная компонента для ''LoginForm', 'reduxForm' - HOC
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