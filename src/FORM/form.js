import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class Form extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
	  custName: '',
	  custAge: '',
	  offName: '',
	  custNric: '',
	  curTime : new Date().toLocaleString(),
	  branchCode: '',
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Please enter your data</h1>
        <p>Full Name:</p>
        <input
          type='text'
          name='custName'
          onChange={this.myChangeHandler}
        />
		<p>Age:</p>
        <input
          type='integer'
          name='custAge'
          onChange={this.myChangeHandler}
        />
		<p>Service Officer Name:</p>
        <input
          type='text'
          name='offName'
          onChange={this.myChangeHandler}
        />
		<p>NRIC:</p>
        <input
          type='text'
          name='custNric'
          onChange={this.myChangeHandler}
        />
		<p>Register date and time (DD/MM/YYYY HH.MM.SS):</p>
		<p>Now time: {this.state.curTime}</p>
        <p>Branch Code:</p>
        <input
          type='integer'
          name='branchCode'
          onChange={this.myChangeHandler}
        />
		<p>Image:</p>
		<p>Product Type:</p>
      </form>
    );
  }
}



export default Form;
