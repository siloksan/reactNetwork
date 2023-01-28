import React from "react";
import {Field, reduxForm} from "redux-form";
//компонента для формы Авторизации
const LoginForm = (props) => {
    return (
        //метод 'handleSubmit' - вроде как предупреждает что данные собраны и предоставляет их дальше через HOC в контейнерную компоненту!?
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} component={'input'} name={'login'}/></div>
            <div><Field placeholder={'Password'} component={'input'} name={'password'}/></div>
            <div><Field component={'input'} type={"checkbox"} name={'rememberMe'}/>remember me</div>
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
    //
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}

export default Login;