import React from 'react';
import LogInForm from './components/LogInForm';
import Particles from './components/Particle'

const logo = `${process.env.PUBLIC_URL}/img/Enimo.png`;

const LogIn = () => (
    <div>
        <Particles/>
        <div className="account">
            <div className="account__wrapper">
                <div className="account__card">
                    <div className="account__head">
                        <h3 className="account__title text-center">
                            <img style={{align: "center", width: "50%",}} src={logo} alt="Logo"/>
                            <span className="account__logo">
                        </span>
                        </h3>
                    </div>
                    <LogInForm onSubmit/>
                </div>
            </div>
        </div>
    </div>
);

export default LogIn;
