import React, {Component} from 'react';
import axios from 'axios';

class ZipToCity extends Component {
  constructor(props){
    super(props)
    this.state = {
      zip: 0,
      city: '',
      state: ''
    }
  }

  myChangeHandler = (e) => {
    this.setState({zip: e.target.value});
  }

  mySubmitHandler = (e) => {
    e.preventDefault();
    axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zip}`)
      .then(res => {
        const cities = res.data;
        console.log(cities[0].City)
        this.setState({
          city: cities[0].City,
          state: cities[0].State
        })
    })
  }

  render(){
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Please fill out the form below</h1>
        <p>Please enter a Zip Code</p>
        <input type='text' onChange={this.myChangeHandler}/>
        <input type='submit' />
        <h3>{this.state.city}, {this.state.state}</h3>
      </form>
    )
  }
}

export default ZipToCity;
