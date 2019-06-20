import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import VoltageCurrentChart from './components/VoltageCurrentCharts'

const Home = () => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">Home</h3>
            </Col>
        </Row>
        <Row>
            <VoltageCurrentChart/>
        </Row>
    </Container>
);


export default Home;
