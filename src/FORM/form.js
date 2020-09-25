import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class Form extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      custName: '',
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
        <p>Enter your name:</p>
        <input
          type='text'
          name='custName'
          onChange={this.myChangeHandler}
        />
      </form>
    );
  }
}



export default Form;
