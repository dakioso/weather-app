import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '288d99a321610343ec8fa9cf6c675c0f';


class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    main: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if( city ) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      main: data.weather[0].main,
      error: ""
    });
  } else{
    this.setState({
      temperature: undefined,
      city: undefined,
      humidity: undefined,
      description: undefined,
      icon: undefined,
      main: undefined,
      error: "Please enter a city!"
    });
  }
}
  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 title-container">
                  {/* <Titles /> */}
                {/* </div> */}
                {/* <div className="col-xs-5 form-container"> */}
                <Titles/>
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  description={this.state.description}
                  icon={this.state.icon}
                  main={this.state.main}
                  error={this.state.error}/>
                  <Form getWeather={this.getWeather}/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};






export default App;
