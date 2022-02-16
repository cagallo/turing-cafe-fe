import React, {Component} from 'react';
import './ResyForm.css';

class ResyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      numOfGuests: ''
    }
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value});


  render = () => {
    return (
      <form>
        <input 
          type='text'
          placeholder='Name'
          name='title'
          value={this.state.title}
        />

        <input 
          type='text'
          placeholder='Date(mm/dd)'
          name='date'
          value={this.state.date}
        />    

        <input 
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
        />    

        <input 
          type='text'
          placeholder='Number of Guests'
          name='number of guests'
          value={this.state.numOfGuests}
        />    

        <button>Make Reservation</button>
      </form>
    )
  }
}

export default ResyForm;