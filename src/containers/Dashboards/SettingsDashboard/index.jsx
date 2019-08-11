import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';


const SettingsDashboard = () => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">Settings Screen</h3>
            </Col>
        </Row>
    </Container>
);

SettingsDashboard.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate('common')(SettingsDashboard);

