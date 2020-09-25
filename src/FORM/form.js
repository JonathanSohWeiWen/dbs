import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class Form extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      custName: null,
    };
  }

  handleChange(event) {
    this.setState({value: event.target.custName});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.custName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Please enter your data</h1>
        <p>Enter your name:</p>
        <input type="text" value={this.state.custName} onChange={this.handleChange} />
      </form>
    );
  }
}



export default Form;
