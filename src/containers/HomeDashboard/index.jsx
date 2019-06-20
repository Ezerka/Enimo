import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import SampleCardView from './components/CardView';
import VoltageCurrentChart from './components/VoltageCurrentCharts'
import PropTypes from 'prop-types';

const Home = ({props}) => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">Home</h3>
            </Col>
        </Row>
        <Row>
            <SampleCardView/>
            <VoltageCurrentChart/>
        </Row>
    </Container>
);

Home.propTypes = {
    props: PropTypes.func.isRequired,
};

export default Home;
