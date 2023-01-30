import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {authorizeUserThunkCreator} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
//создаём отдельную переменную за пределами формы, иначе будет зацикливание
let maxLength = maxLengthCreator(15);
//компонента для формы Авторизации
const LoginForm = (props) => {
    return (
        //метод 'handleSubmit' - вроде как предупреждает что данные собраны и предоставляет их дальше через HOC в контейнерную компоненту!?
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={Input} name={'login'}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} name={'password'}
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

// export default connect(mapStateToProps, {authorizeUserThunkCreator})(Login);