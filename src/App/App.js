import React, { Component } from 'react';
import './App.css';
import apiCalls from '../apiCalls';
import ResyContainer from '../ResyContainer/ResyContainer';

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

  render = () => {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ResyContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
