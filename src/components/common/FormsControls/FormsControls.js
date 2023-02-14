import style from './FormControls.module.css'
import React from "react";
import {Field} from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {
    //условие для отображения ошибки
    let hasError = touched && error;
    return (
//добавляем стиль, если получаем ошибку в поле заполнения
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}

export const createField = (placeholder, component, name, validate, props, text = '') => (
    <div>
        <Field placeholder={placeholder} component={component} name={name}
               validate={validate} {...props}/>{text}
    </div>
    )
