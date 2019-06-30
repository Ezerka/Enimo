/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import {Badge, Card, CardBody, Col} from 'reactstrap';
import CheckIcon from 'mdi-react/CheckIcon';
import PropTypes from 'prop-types';

const CheckBox = ({checked}) => (
    <label className="checkbox-btn profile__current-task-checkbox">
        <input className="checkbox-btn__checkbox" type="checkbox" defaultChecked={checked}/>
        <span className="checkbox-btn__checkbox-custom">
      <CheckIcon/>
    </span>
    </label>
);

CheckBox.propTypes = {
    checked: PropTypes.bool,
};

CheckBox.defaultProps = {
    checked: false,
};

const ProfileMain = () => (
    <Col md={12} lg={12} xl={12}>
        <Card>
            <CardBody className="profile__card">
                <p className="profile__current-tasks-title">Current tasks <span>12</span></p>
                <div className="profile__current-tasks">
                    <div className="profile__current-task">
                        <CheckBox/> Create screens of Mobile App <Badge color="info">New</Badge>
                    </div>
                    <div className="profile__current-task">
                        <CheckBox checked/>
                        Write Cris about the bag report
                    </div>
                    <div className="profile__current-task">
                        <CheckBox/>Test new system of versions control <Badge
                        color="error">Priority</Badge>
                    </div>
                    <div className="profile__current-task">
                        <CheckBox/>
                        Design new layout for message page in Partnership project
                    </div>
                    <div className="profile__current-task">
                        <CheckBox/> Test new system of versions control <Badge
                        color="error">Priority</Badge>
                    </div>
                    <div className="profile__current-task">
                        <CheckBox/>
                        Design new layout for message page in Partnership project
                    </div>
                    <a href="/" className="profile__see-all-tasks">See all tasks</a>
                </div>
            </CardBody>
        </Card>
    </Col>
);

export default ProfileMain;
