import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import SampleCardView from './components/CardView';

const Settings = () => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">Settings</h3>
            </Col>
        </Row>
        <Row>
            <SampleCardView/>
        </Row>
    </Container>
);

export default Settings;
