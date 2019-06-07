import React from 'react';
import Form from './components/Form'

const logo = `${process.env.PUBLIC_URL}/img/logo.svg`;

const Login = () => (
    <div>
        <div>
            <h3 className="text-center">
                <img style={{align: "center"}} src={logo} alt="Logo"/>
            </h3>
        </div>
        <Form/>
    </div>
);

export default Login;
