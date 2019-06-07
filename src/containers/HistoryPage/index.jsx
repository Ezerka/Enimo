import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import SampleCardView from './components/CardView';
import {Link} from "react-router-dom";

const History = () => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">History</h3>
            </Col>
        </Row>
        <Row>
            <SampleCardView/>
        </Row>
        <Link to="/">
            <p>History page</p>
        </Link>
    </Container>
);

export default History;
