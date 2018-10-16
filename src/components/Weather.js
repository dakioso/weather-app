import React from 'react';
// import WeatherIcon from './WeatherIcon';

class Weather extends React.Component {
  render() {
    return(
      <div className="weather__info">
        {this.props.city && <p className="weather__key">City:
          <span className="weather__value"> {this.props.city}</span> </p>}

        {this.props.temperature && <p className="weather__key">Temperature:
          <span className="weather__value"> {this.props.temperature}℃</span></p>}

        {this.props.description && <p className="weather__key">Condition:
          <span className="weather__value"> {this.props.description}</span></p>}


          {/* Bild bör renderas här, iställer för texten "icon" */}
        {/* {this.props.icon && <p className="weather__key">Icon:
          <span className="weather__value"> {this.props.icon}</span></p>} */}
          <div className="weather__icon">
            {this.props.icon && <img src={`http://openweathermap.org/img/w/${this.props.icon}.png` } alt="weather icon"/>}
            {/* {<WeatherIcon main={this.props.main}/>} */}
          </div>

        {this.props.error && <p className="weather__key">{this.props.error}</p>}
    </div>
    );
  }
};

export default Weather;
