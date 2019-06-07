import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import SampleCardView from './components/CardView';
import {Link} from "react-router-dom";

const Login = () => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">Login</h3>
            </Col>
        </Row>
        <Row>
            <SampleCardView/>
        </Row>
        <Link to="/home">
            <p>Home Page</p>
        </Link>
    </Container>
);

export default Login;
