import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import SampleCardView from './components/CardView';
import {Link} from "react-router-dom";

const Helloworld = () => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">Page One</h3>
            </Col>
        </Row>
        <Row>
            <SampleCardView/>
        </Row>
        <Link to="/pages/one">
            <p>Main Page</p>
        </Link>
    </Container>
);

export default Helloworld;
