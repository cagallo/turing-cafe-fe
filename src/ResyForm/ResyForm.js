import React, {Component} from 'react';
import './ResyForm.css';

class ResyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value});

  submitReservation = event => {
    event.preventDefault();
    const newResy = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newResy);
    console.log(this.state)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', date: '', time: '', number: ''})
  }

  render = () => {
    return (
      <form>
        <input 
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name || ''}
          onChange={event => this.handleChange(event)}
        />

        <input 
          type='text'
          placeholder='Date(mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />    

        <input 
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />    

        <input 
          type='text'
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />    

        <button onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default ResyForm;