import React from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Axios from 'axios'

const DisplayWeather = (props) => (
    <div>
        <li>
            <span className={"wi wi-owm-" + props.data.icon}/>
            <p>Weather is {props.data.description}</p>
        </li>
    </div>
);


class Weather extends React.Component {
    state = {
        city: '',
        country: '',
        weather_data: {
            temperature: '',
            humidity: '',
            wind: '',
            description: '',
            icon: ''
        }
    };

    handleTheSubmit = async (event) => {
        event.preventDefault();
        let apiKey = "7b8f3dc1d1ed2e50c82e0b2b607733bc";
        const resp = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&appid=${apiKey}`);
        this.setState({
                weather_data: {
                    temperature: resp.data.main.temp,
                    humidity: resp.data.main.humidity,
                    description: resp.data.weather[0].description,
                    icon: resp.data.weather[0].id
                }
            }
        );
        console.log(this.state.weather_data)
    };

    handleChangeCity = (event) => {
        this.setState({city: event.target.value});
    };
    handleChangeCountry = (event) => {
        this.setState({country: event.target.value});
    };

    render() {
        return (
            <Col md={12}>
                <Card>
                    <CardBody>
                        <div className="card__title">
                            <h5 className="bold-text">Weather</h5>
                            <h5 className="subhead">Helps you find weather conditions in
                                cities... </h5>
                        </div>
                        <form onSubmit={this.handleTheSubmit}>
                            <input type="text" name="city" placeholder="City..."
                                   defaultValue={this.state.city} onChange={this.handleChangeCity}/>
                            <input type="text" name="country" placeholder="Country..."
                                   defaultValue={this.state.country}
                                   onChange={this.handleChangeCountry}/>
                            <button>Get Weather</button>
                        </form>
                        <DisplayWeather data={this.state.weather_data}/>
                    </CardBody>
                </Card>
            </Col>
        )
    }

}

export default Weather;
