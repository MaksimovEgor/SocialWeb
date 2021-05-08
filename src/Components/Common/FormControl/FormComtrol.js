import React from 'react';
import style from './FormControl.module.css';
import {Field} from "redux-form";



const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = error && touched;

    return (
        <div className={style.formControl + " " + (hasError ? style.error : " ")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}



export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
       <FormControl {...props} > <textarea {...input} {...restProps}/></FormControl>
    )
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props} ><input {...input} {...restProps}/></FormControl>
    )
}


export const formCreator = (placeholder, name, validators, type, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               type={type}
               component={component}/>{text}
    </div>
)