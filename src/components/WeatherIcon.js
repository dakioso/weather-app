import React from 'react';
import sunIcon from '../img/sunIcon.svg';
import rainIcon from '../img/rainIcon.svg';


const weatherIcon = ({ main }) => {
  let img = '';

  switch (main) {
    case 'Drizzle':
      img = rainIcon;
      break;
    case 'Clear':
      img = sunIcon;
      break;
    default:

  }
  return (
    <img src={img} width='100px' height='100px'/>
  );
}

export default weatherIcon;
