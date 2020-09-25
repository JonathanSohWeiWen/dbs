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

  // On file select (from the pop up) 
  onFileChange = event => { 
     
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] }); 
   
  };

  // On file upload (click the upload button) 
  onFileUpload = () => { 
     
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
    formData.append( 
      "myFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
   
    // Details of the uploaded file 
    console.log(this.state.selectedFile);
   
    // Request made to the backend api 
    // Send formData object 
    axios.post("localhost:3000/uploadfile", formData); 
  };

  // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 

	

  myChangeHandler = (event) => {
    let nam = event.target.name;
	let val = event.target.value;
	let res = this.menu.value;
    this.setState({[nam]: val});
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
        <input type="file" onChange={this.onFileChange} /> 
        <button onClick={this.onFileUpload}> 
          Upload! 
        </button>
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
