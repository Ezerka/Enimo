import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {Line} from 'react-chartjs-2';

const initialState = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'],
    datasets: [
        {
            label: 'Voltage',
            fill: false,
            lineTension: 0.3,
            backgroundColor: '#36A2EB',
            borderColor: '#36A2EB',
            borderWidth: 2,
            pointBackgroundColor: '#36A2EB',
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [2, 10, 12, 16, 29, 31, 47, 77, 86, 90, 93, 98],
        },
        {
            label: 'Current',
            fill: false,
            lineTension: 0.3,
            backgroundColor: '#FF6384',
            borderColor: '#FF6384',
            borderWidth: 2,
            pointBackgroundColor: '#FF6384',
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [6, 10, 12, 23, 33, 59, 67, 68, 75, 85, 88, 100],
        },
    ],
};

const options = {
    maintainAspectRatio: false,
    scales: {
        xAxes: [
            {
                ticks: {
                    fontColor: 'rgb(204, 204, 204)',
                },
            },
        ],
        yAxes: [
            {
                ticks: {
                    fontColor: 'rgb(204, 204, 204)',
                },
            },
        ],
    },
};

class VoltageCurrentCharts extends PureComponent {


    state = {
        data: initialState,
        intervalId: null,
    };

    componentDidMount() {
        const _this = this;

        const intervalId = setInterval(() => {
            const oldDataSet = _this.state.data.datasets[0];
            const newData = [];

            for (let x = 0; x < _this.state.data.labels.length; x++) {
                newData.push(Math.floor(Math.random() * 50) + 50);
                console.log(Math.floor(Math.random() * 50) + 50);
            }

            const newDataSet = {
                ...oldDataSet,
            };

            newDataSet.data = newData;

            const oldDataSet2 = _this.state.data.datasets[1];
            const newData2 = [];

            for (let x = 0; x < _this.state.data.labels.length; x++) {
                newData2.push(Math.floor(Math.random() * 50) + 50);
            }

            const newDataSet2 = {
                ...oldDataSet2,
            };

            newDataSet2.data = newData2;

            const newState = {
                ...initialState,
                data: {
                    datasets: [newDataSet, newDataSet2],
                    labels: _this.state.data.labels,
                },
            };

            _this.setState(newState);
        }, 4000);

        this.setState({intervalId});
    }

    componentWillUnmount() {
        const {intervalId} = this.state;
        clearInterval(intervalId);
    }

    render() {
        const {data} = this.state;

        return (
            <Col md={12} lg={12} xl={12}>
                <Card>
                    <CardBody className="voltage_current_card">
                        <div className="card__title">
                            <h5 className="bold-text">{"Voltage Current Usage"}</h5>
                        </div>
                        <div className="chart-height-50">
                            <Line data={data} options={options} height={350}/>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default (VoltageCurrentCharts);
