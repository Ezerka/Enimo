import React from 'react';
import Form from './components/Form'
import ShowResults from './Show'

const logo = `${process.env.PUBLIC_URL}/img/logo.svg`;

const Login = () => (
    <div className="login">
        <div className="login__wrapper">
            <div className="login__card">
                <h3 className="login__title text-center">
                    <img style={{align: "center", width: "50%",}} src={logo} alt="Logo"/>
                    <span className="login__logo">
                        </span>
                </h3>
                <Form onSubmit = {ShowResults}/>
            </div>
        </div>
    </div>
);

export default Login;
