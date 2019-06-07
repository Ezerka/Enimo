import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import SampleCardView from './components/CardView';

const Machines = () => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">Machines</h3>
            </Col>
        </Row>
        <Row>
            <SampleCardView/>
        </Row>
    </Container>
);

export default Machines;
