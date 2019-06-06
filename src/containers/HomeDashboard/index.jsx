import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import SampleCardView from './components/CardView';
import {Link} from "react-router-dom";

const Home = () => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">Home</h3>
            </Col>
        </Row>
        <Row>
            <SampleCardView/>
        </Row>
        <Link to="/">
            <p>Main Page</p>
        </Link>
    </Container>
);

export default Home;
