import React from 'react';
import './ResyCard.css';

const ResyCard = ({name, date, time, number, id}) => {
  return (
    <div className='resy-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests: {number}</p>
    </div>
  )
}

export default ResyCard;