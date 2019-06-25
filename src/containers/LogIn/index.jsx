import React from 'react';
import Form from './components/Form'
import ShowResults from './components/Show.jsx'
import ParticleBackground from './components/Particle'
import {BrowserRouter} from "react-router-dom";


const logo = `${process.env.PUBLIC_URL}/img/logo.svg`;

const Login = () => (
    <BrowserRouter>
        <div>
            <ParticleBackground/>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}>
                <div className="login">
                    <div className="login__wrapper">
                        <div className="login__card">
                            <h3 className="login__title text-center">
                                <img style={{align: "center", width: "50%",}} src={logo}
                                     alt="Logo"/>
                                <span className="login__logo">
                        </span>
                            </h3>
                            <Form onSubmit={ShowResults}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>

);

export default Login;
