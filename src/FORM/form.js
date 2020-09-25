import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';

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
	selectedFile: null
    };
  }

  onChangeHandler=event=>{

    console.log(event.target.files[0])

  }
  onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

	

  myChangeHandler = (event) => {
    let nam = event.target.name;
	let val = event.target.value;
	let res = this.menu.value;
    this.setState({[nam]: val});
  }

  onClickHandler = () => {
    const data = new FormData()
    if(this.state.selectedFile.size > 2097152 ) // 2097152 is 2 MegaByte
    {
      alert("File size uploaded is over the limit! Has to be 2MB or lower!");
    }
    else
    {
      if(this.state.selectedFile.type == "image/png" || this.state.selectedFile.type == "image/jpeg" || this.state.selectedFile.type == "image/jpg")
      {
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:3001/upload", data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
          console.log(res.statusText)
          console.log(this.state.selectedFile.type)
        })
      }
      else
      {
        alert("Please upload only jpg/jpeg/png image types only.");
      }
      
    }
}

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <center>
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
		    <p>Current time: {this.state.curTime}</p>
            <p>Branch Code:</p>
            <input
              type='integer'
              name='branchCode'
              onChange={this.myChangeHandler}
            />
        
		    <p>Image:</p>
        <input type="file" onChange={this.onChangeHandler} /> 
        <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>  Upload! </button>
		    <p>Product Type:</p>
			<select id = "dropdown" ref = {(input)=> this.menu = input}>
    <option value="N/A">N/A</option>
    <option value="137 : Investor">137 : Investor</option>
    <option value="070 : Insurance">070 : Insurance</option>
    <option value="291 : Loans">291 : Loans</option>
    <option value="969 : Savings">969 : Savings</option>
	<option value="555 : Credit Cards">555 : Credit Cards</option>
	onChange={this.myChangeHandler}
</select>
        </center>
      </form>
    );
  }
}



export default Form;
