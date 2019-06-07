import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import renderCheckBoxField from '../../../shared/CheckBox';

class Form extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
    };
    
    state = {
        showPassword: false
    };
    
    constructor(props) {
        super(props);
        this.showPassword = this.showPassword.bind(this);
    }
    
    showPassword(event) {
        event.preventDefault();
        this.setState({
            showPassword: !this.state.showPassword,
        });
    }
    
    render() {
        const {handleSubmit} = this.props;
        
        return (
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__form-group">
                    <span className="form__form-group-label">Username</span>
                    
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <AccountOutlineIcon fill={'#ffffff'}/>
                        </div>
                        <Field name="username" component="input" type="text" placeholder="Name"/>
                    </div>
                </div>
                
                <div className="form__form-group">
                    <span className="form__form-group-label">Password</span>
                    <div className="form__form-group-field">
                        
                        <div className="form__form-group-icon">
                            <KeyVariantIcon/>
                        </div>
                        
                        <Field name="password" component="input" type={this.state.showPassword ? 'text' : 'password'}
                               placeholder="Password"/>
                        
                        <button className={`form__form-group-button${this.state.showPassword ? ' active' : ''}`}
                                onClick={event => this.showPassword(event)}>
                            <EyeIcon/>
                        </button>
                    </div>
                </div>
                
                <div className="form__form-group">
                    <div className="form__form-group-field">
                        <Field
                            name="remember_me"
                            className="my-auto"
                            component={renderCheckBoxField}
                            label="Remember me"
                        />
                        <Link className="login__forgot-password" to="/home">Forgot the password?</Link>
                    </div>
                </div>
                
                <div className="login__btns">
                    <Link className="btn btn-secondary login__btn" to="/home">Sign In</Link>
                    <Link className="btn btn-outline-secondary login__btn" to="/register">Register</Link>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'log_in_form', // a unique identifier for this form
})(Form);
