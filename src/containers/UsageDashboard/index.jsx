import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import SampleCardView from './components/CardView';

const Usage = () => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">Usage</h3>
            </Col>
        </Row>
        <Row>
            <SampleCardView/>
        </Row>
    </Container>
);

export default Usage;
