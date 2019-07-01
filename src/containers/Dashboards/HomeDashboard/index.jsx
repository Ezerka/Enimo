import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import Efficiency from './components/Efficiency';
import EnergyConsumption from './components/EnergyConsumption';
import SolarEnergy from './components/SolarEnergy';
import Cost from './components/Cost';
import ChangeInCost from './components/ChangeInCost'
import EnergyIntensity from './components/EnergyIntensity'
import firebase from './../../../firebase'
import ActiveMachines from './components/ActiveMachines'
import PowerTimeConsumption from './components/PowerTimeConsumption'

class HomeDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home_data: [],
            home_dashboard_data: [
                {
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
                }
            ],
            graph_data: [],
            solar_report: [{
                total_consumption: 124.2,
                savings: 4720,
                net_usage: 300,
                solar_energy_produced: 4.6,
                solar_energy_exported: 11,
                electrical_energy_imported: 36,
                total_cost_remaining: 34700,
                received_cost: 14568,
                remaining_cost: 20132
            }]
        }

    }

    componentDidMount() {
        const dataRef = firebase.database().ref('home_data')//This is for the comments
        dataRef.on('value', (snapshot) => {
            let AllTheData = snapshot.val();
            let newState = [];

            for (let item in AllTheData) {
                newState.push({
                    id: item,
                    consumption: AllTheData[item].consumption,
                    estimatedConsumption: AllTheData[item].estimatedConsumption
                });
            }
            this.setState({
                home_data: newState
            })
        });

        const graphdataRef = firebase.database().ref('graph_data');

        graphdataRef.on('value', (snapshot) => {
            let AllTheGraphData = snapshot.val();
            let newGraphState = [];

            for (let item in AllTheGraphData) {
                newGraphState.push({
                    name: AllTheGraphData[item].name,
                    point: AllTheGraphData[item].point,
                    amt: AllTheGraphData[item].amt
                })
            }
            this.setState({
                graph_data: newGraphState
            })
        })

    }

    render() {
        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">Home</h3>
                    </Col>

                </Row>
                <Row md={12}>
                    <PowerTimeConsumption Data={this.state.solar_report}/>

                    {/*//<LiveUsage GraphData = {this.state.graph_data}/>*/}
                </Row>
                <Row>
                    <EnergyConsumption Data={this.state.home_data}/>
                    <Cost Data={this.state.home_dashboard_data}/>
                    <SolarEnergy Data={this.state.home_dashboard_data}/>
                    <Efficiency Data={this.state.home_dashboard_data}/>
                </Row>
                <Row>
                    <ChangeInCost Data={this.state.home_dashboard_data}/>
                    <EnergyIntensity Data={this.state.home_dashboard_data}/>
                    <ActiveMachines Data={this.state.home_dashboard_data}/>

                </Row>
            </Container>
        )
    }
}

export default HomeDashboard
