import React from 'react';
import {Field, reduxForm} from "redux-form";
import {formCreator, Input} from "../Common/FormControl/FormComtrol";
import {required} from "../Common/Validator/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../Common/FormControl/FormControl.module.css';


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {formCreator("Email", "email", required, null, Input)}
            {formCreator("Password", "password", required, "password", Input)}
            {formCreator(null, "rememberMe", null, "checkbox", Input, null,"Remember me")}

            { error && <div className={style.summaryError}>{error}</div> }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm =  reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth, }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);