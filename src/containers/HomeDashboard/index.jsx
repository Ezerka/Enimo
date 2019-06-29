import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import VoltageCurrentChart from './components/VoltageCurrentCharts'
import PowerConsumption from "./components/PowerConsumption";


class Home extends React.Component {
    state = {
        home_dashboard_data: [{
            "consumption": 100,
            "estimated_consumption": 300,
            "cost": 1000,
            "estimated_cost": 3000,
            "solar_production": 50,
            "estimated_solar_cost": 100,
            "efficiency": 76,
            "changeInCost_Percentage": 40,
            "changeInCost_Money": 2000,
            "energy_intensity": 345,
            "machine_1": 11,
            "machine_2": 9.8,
            "machine_3": 9.6,
            "machine_4": 8.8,
            "machine_5": 9.0,
            "machine_6": 9.1,
        }],
    };

    render() {
        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">Home</h3>
                    </Col>
                </Row>
                <Row>
                    <VoltageCurrentChart/>
                </Row>
                <Row>
                    <PowerConsumption Data={this.state.home_dashboard_data}/>
                </Row>
            </Container>
        )
    }
}


export default Home;
