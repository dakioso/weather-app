import React from 'react';
import "../App.css";

class Form extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.getWeather} className="formet">
        <input type="text" name="city" placeholder="City.."/>
        <button>Get weather</button>
      </form>
    );
  }
};

export default Form;
