import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {Link} from "react-router-dom";

const OpenDashboard = () => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">Open The Dashboard</h3>
            </Col>
        </Row>
        
        <Link to="/pages/one">
            <p>Dashboard</p>
        </Link>
    </Container>
);

export default OpenDashboard;
