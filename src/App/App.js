import React, { Component } from 'react';
import './App.css';
import apiCalls from '../apiCalls';
import ResyContainer from '../ResyContainer/ResyContainer';
import ResyForm from '../ResyForm/ResyForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount = async() => {
    try {
      let reservationData = await apiCalls.getReservationData();
      this.setState({reservations: reservationData})
    }
    catch(error) {
      this.setState({error: error.message})
    }
  }

  addReservation = (newResy) => {
    this.setState({reservations: [...this.state.reservations, newResy]})
  }

  render = () => {
    const reservationConfirmation = !this.state.reservations ? <h2>No Reservations Found, Book Now!</h2> : <ResyContainer reservations={this.state.reservations}/>
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResyForm addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          {reservationConfirmation}
        </div>
      </div>
    )
  }
}

export default App;
