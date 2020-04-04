import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {SolarTableProps} from '../../../shared/prop-types/TablesProps';
import EnergyConsumedTabs from './components/EnergyConsumedTabs';
import SolarProducedStatistics from './components/SolarProducedStatistics';


class UsageDashboard extends PureComponent {
    static propTypes = {
        t: PropTypes.func.isRequired,
        cryptoTable: SolarTableProps.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    state = {
        Energy_Data: [{
            Day_Data: [
                {name: '01.02', Energy: 3654},
                {name: '02.02', Energy: 2578},
                {name: '03.02', Energy: 2000},
                {name: '04.02', Energy: 4383},
                {name: '05.02', Energy: 1890},
                {name: '06.02', Energy: 2390},
                {name: '07.02', Energy: 3490},
                {name: '08.02', Energy: 2000},
                {name: '09.02', Energy: 2780},
                {name: '10.02', Energy: 1890},
                {name: '11.02', Energy: 3578},
                {name: '12.02', Energy: 3644},
                {name: '13.02', Energy: 4000},
                {name: '14.02', Energy: 3000},
                {name: '15.02', Energy: 2000},
                {name: '16.02', Energy: 2780},
                {name: '17.02', Energy: 1890},
                {name: '18.02', Energy: 2390},
                {name: '19.02', Energy: 3490},
                {name: '20.02', Energy: 2000},
                {name: '21.02', Energy: 2780},
                {name: '22.02', Energy: 1890},
                {name: '23.02', Energy: 3578},
                {name: '24.02', Energy: 2390},
                {name: '25.02', Energy: 3578},
                {name: '26.02', Energy: 1890},
                {name: '27.02', Energy: 4000},
                {name: '28.02', Energy: 2378},
            ],
            Week_Data: [
                {name: '1st Week', Energy: 4000},
                {name: '2nd Week', Energy: 3000},
                {name: '3rd Week', Energy: 2000},
                {name: '4th Week', Energy: 2780},
            ],
            Month_Data: [
                {name: 'Jan', Energy: 4000},
                {name: 'Feb', Energy: 3000},
                {name: 'Mar', Energy: 2000},
                {name: 'Apr', Energy: 2780},
                {name: 'May', Energy: 1890},
                {name: 'June', Energy: 2390},
                {name: 'July', Energy: 3490},
                {name: 'Aug', Energy: 2000},
                {name: 'Sep', Energy: 2780},
                {name: 'Oct', Energy: 1890},
                {name: 'Nov', Energy: 3578},
                {name: 'Dec', Energy: 2378},
            ],
            Year_Data: [
                {name: '2010', Energy: 2780},
                {name: '2011', Energy: 1890},
                {name: '2012', Energy: 3654},
                {name: '2013', Energy: 2578},
                {name: '2014', Energy: 2000},
                {name: '2015', Energy: 4383},
                {name: '2016', Energy: 1890},
                {name: '2017', Energy: 2390},
                {name: '2018', Energy: 3490},
                {name: '2019', Energy: 2000},
            ],
        }],

        Solar_Data: [{
            Day_Data:[
                {name: '01.02', Energy: 3654},
                {name: '02.02', Energy: 2578},
                {name: '03.02', Energy: 2000},
                {name: '04.02', Energy: 4383},
                {name: '05.02', Energy: 1890},
                {name: '06.02', Energy: 2390},
                {name: '07.02', Energy: 3490},
                {name: '08.02', Energy: 2000},
                {name: '09.02', Energy: 2780},
                {name: '10.02', Energy: 1890},
                {name: '11.02', Energy: 3578},
                {name: '12.02', Energy: 3644},
                {name: '13.02', Energy: 4000},
                {name: '14.02', Energy: 3000},
                {name: '15.02', Energy: 2000},
                {name: '16.02', Energy: 2780},
                {name: '17.02', Energy: 1890},
                {name: '18.02', Energy: 2390},
                {name: '19.02', Energy: 3490},
                {name: '20.02', Energy: 2000},
                {name: '21.02', Energy: 2780},
                {name: '22.02', Energy: 1890},
                {name: '23.02', Energy: 3578},
                {name: '24.02', Energy: 2390},
                {name: '25.02', Energy: 3578},
                {name: '26.02', Energy: 1890},
                {name: '27.02', Energy: 4000},
                {name: '28.02', Energy: 2378},
            ],
            Week_Data:[
                {name: '1st Week', Energy: 4000},
                {name: '2nd Week', Energy: 3000},
                {name: '3rd Week', Energy: 2000},
                {name: '4th Week', Energy: 2780},
            ],
            Month_Data:[
                {name: 'Jan', Energy: 4000},
                {name: 'Feb', Energy: 3000},
                {name: 'Mar', Energy: 2000},
                {name: 'Apr', Energy: 2780},
                {name: 'May', Energy: 1890},
                {name: 'June', Energy: 2390},
                {name: 'July', Energy: 3490},
                {name: 'Aug', Energy: 2000},
                {name: 'Sep', Energy: 2780},
                {name: 'Oct', Energy: 1890},
                {name: 'Nov', Energy: 3578},
                {name: 'Dec', Energy: 2378},],
            Year_Data:[
                {name: '2010', Energy: 2780},
                {name: '2011', Energy: 1890},
                {name: '2012', Energy: 3654},
                {name: '2013', Energy: 2578},
                {name: '2014', Energy: 2000},
                {name: '2015', Energy: 4383},
                {name: '2016', Energy: 1890},
                {name: '2017', Energy: 2390},
                {name: '2018', Energy: 3490},
                {name: '2019', Energy: 2000},
            ],
        }]
    };

    render() {
        const {t} = this.props;

        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">Usage</h3>
                    </Col>
                </Row>
                <Row>
                    <EnergyConsumedTabs Data={this.state.Energy_Data}/>
                    <SolarProducedStatistics Data={this.state.Solar_Data}/>

                </Row>
            </Container>
        );
    }
}

export default connect(state => ({
    cryptoTable: state.cryptoTable.items,
}))(UsageDashboard);
