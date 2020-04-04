import React, {PureComponent} from 'react';
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const dataMonthly = [
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
];

const dataDaily = [
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
];

const dataYearly = [
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
];

class SolarProducedStatistics extends PureComponent {
    static propTypes = {
        t: PropTypes.func.isRequired,
    };

    state = {
        activeTab: '1',
        yearly: true,
    };


    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };
    handleChange = () => {
        this.setState({yearly: !this.state.yearly});
    };
    tickFormer = (tick) => {
        return `${tick / 1000}kW`;
    };

    render() {
        const {t} = this.props;

        return (
            <Col md={12} lg={12} xl={12}>
                <Card>
                    <CardBody>
                        <div className="card__title">
                            <h5 className="bold-text">{t('dashboard_crypto.solarproducedstats')}</h5>
                            <h5 className="subhead">These stats are used to understand, how much
                                amount of energy has
                                been produced.</h5>
                        </div>
                        <div className="tabs tabs--justify tabs--bordered-top">
                            <div className="tabs__wrap">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '1'})}
                                            onClick={() => {
                                                this.toggle('1');
                                            }}
                                        >
                                            Day
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '2'})}
                                            onClick={() => {
                                                this.toggle('2');
                                            }}
                                        >
                                            Week
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '3'})}
                                            onClick={() => {
                                                this.toggle('3');
                                            }}
                                        >
                                            Month
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '4'})}
                                            onClick={() => {
                                                this.toggle('4');
                                            }}
                                        >
                                            Year
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <ResponsiveContainer height={260}>
                                            {this.state.yearly ?
                                                <BarChart data={this.props.Data[0].Day_Data}
                                                          margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={true}
                                                           tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="Energy" name="Energy"
                                                         fill="#4ce1b6"
                                                         barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={this.props.Data[0].Day_Data}
                                                          margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="Energy" name="Energy"
                                                         fill="#4ce1b6"
                                                         barSize={4}/>
                                                </BarChart>
                                            }
                                        </ResponsiveContainer>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <ResponsiveContainer height={260}>
                                            {this.state.yearly ?
                                                <BarChart data={this.props.Data[0].Week_Data}
                                                          margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}
                                                           tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="Energy" name="Energy"
                                                         fill="#4ce1b6"
                                                         barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={this.props.Data[0].Week_Data}
                                                          margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="Energy" name="Energy"
                                                         fill="#4ce1b6"
                                                         barSize={4}/>
                                                </BarChart>
                                            }
                                        </ResponsiveContainer>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <ResponsiveContainer height={260}>
                                            {this.state.yearly ?
                                                <BarChart data={this.props.Data[0].Month_Data}
                                                          margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}
                                                           tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="Energy" name="Energy"
                                                         fill="#4ce1b6"
                                                         barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={this.props.Data[0].Month_Data}
                                                          margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="Energy" name="Energy"
                                                         fill="#4ce1b6"
                                                         barSize={4}/>
                                                </BarChart>
                                            }
                                        </ResponsiveContainer>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <ResponsiveContainer height={260}>
                                            {this.state.yearly ?
                                                <BarChart data={this.props.Data[0].Year_Data}
                                                          margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}
                                                           tickFormatter={this.tickFormer}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="Energy" name="Energy"
                                                         fill="#4ce1b6"
                                                         barSize={10}/>
                                                </BarChart>
                                                :
                                                <BarChart data={this.props.Data[0].Year_Data}
                                                          margin={{top: 20, left: -15}}>
                                                    <XAxis dataKey="name" tickLine={false}/>
                                                    <YAxis tickLine={false}/>
                                                    <Tooltip/>
                                                    <CartesianGrid vertical={false}/>
                                                    <Bar dataKey="Energy" name="Energy"
                                                         fill="#4ce1b6"
                                                         barSize={4}/>
                                                </BarChart>
                                            }
                                        </ResponsiveContainer>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default (SolarProducedStatistics);
