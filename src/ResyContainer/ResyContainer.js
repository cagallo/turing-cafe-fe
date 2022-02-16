import React from 'react';
import './ResyContainer.css'
import ResyCard from '../ResyCard/ResyCard';


const ResyContainer = ({ reservations }) => {
  const reservationCards = reservations.map((reservation) => {
    return (
      <ResyCard
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        id={reservation.id}
        key={reservation.id}
      />
    )
  })

  return (

    <div className='resy-container'>
      {reservationCards}
    </div>
  )
}

export default ResyContainer;