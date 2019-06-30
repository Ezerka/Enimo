import React from 'react';
import Form from './components/Form';
import ShowResults from './components/Show.jsx'
import ParticleBackground from "./components/Particle";
import {BrowserRouter} from "react-router-dom";

const logo = `${process.env.PUBLIC_URL}/img/logo.svg`;

const LogIn = () => (
    <BrowserRouter>
        <div>
            <ParticleBackground/>
            <div className="account">
                <div className="account__wrapper">
                    <div className="account__card">
                        <h3 className="account__title text-center">
                            <img style={{align: "center", width: "50%",}} src={logo}
                                 alt="Logo"/>
                            <span className="account__logo">
                        </span>
                        </h3>
                        <Form onSubmit={ShowResults}/>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
);

export default LogIn;
