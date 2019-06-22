import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Weather from "./components/Weather";

const WeatherDashboard = () => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">Weather</h3>
            </Col>
        </Row>
        <Weather/>
    </Container>
);

export default WeatherDashboard;