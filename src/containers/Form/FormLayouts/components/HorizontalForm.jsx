import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import EyeIcon from 'mdi-react/EyeIcon';
import renderCheckBoxField from '../../../../shared/components/form/CheckBox';

class HorizontalForm extends PureComponent {
    static propTypes = {
        t: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    };

    constructor() {
        super();
        this.state = {
            showPassword: false,
        };
    }

    showPassword = (e) => {
        e.preventDefault();
        this.setState({
            showPassword: !this.state.showPassword,
        });
    };

    render() {
        const {handleSubmit, reset, t} = this.props;

        return (
            <Col xs={12} md={12} lg={12} xl={6}>
                <Card>
                    <CardBody>
                        <div className="card__title">
                            <h5 className="bold-text">{t('forms.form_layouts.horizontal_form')}</h5>
                            <h5 className="subhead">Labels are left from fields</h5>
                        </div>
                        <form className="form form--horizontal" onSubmit={handleSubmit}>
                            <div className="form__form-group">
                                <span className="form__form-group-label">Username</span>
                                <div className="form__form-group-field">
                                    <Field
                                        name="username"
                                        component="input"
                                        type="text"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div className="form__form-group">
                                <span className="form__form-group-label">E-mail</span>
                                <div className="form__form-group-field">
                                    <Field
                                        name="email"
                                        component="input"
                                        type="email"
                                        placeholder="example@mail.com"
                                    />
                                </div>
                            </div>
                            <div className="form__form-group">
                                <span className="form__form-group-label">Url</span>
                                <div className="form__form-group-field">
                                    <Field
                                        name="url"
                                        component="input"
                                        type="text"
                                        placeholder="https://themeforest.net"
                                    />
                                </div>
                            </div>
                            <div className="form__form-group">
                                <span className="form__form-group-label">Password</span>
                                <div className="form__form-group-field">
                                    <Field
                                        name="password"
                                        component="input"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                    />
                                    <button
                                        className={`form__form-group-button${this.state.showPassword ? ' active' : ''}`}
                                        onClick={e => this.showPassword(e)}
                                    ><EyeIcon/>
                                    </button>
                                </div>
                            </div>
                            <div className="form__form-group">
                                <div className="form__form-group-field">
                                    <Field
                                        name="remember_me"
                                        component={renderCheckBoxField}
                                        label="Remember me"
                                    />
                                </div>
                            </div>
                            <ButtonToolbar className="form__button-toolbar">
                                <Button color="primary" type="submit">Submit</Button>
                                <Button type="button" onClick={reset}>
                                    Cancel
                                </Button>
                            </ButtonToolbar>
                        </form>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default reduxForm({
    form: 'horizontal_form_layout', // a unique identifier for this form
})((HorizontalForm));
