import style from './FormControls.module.css'
import React from "react";

const FormControl = ({input, meta, ...props}) => {
    //условие для отображения ошибки
    let hasError = meta.touched && meta.error;
    return (
//добавляем стиль, если получаем ошибку в поле заполнения
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}
//
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}