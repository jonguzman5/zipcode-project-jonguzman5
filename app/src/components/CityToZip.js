import React, {Component} from 'react';
import axios from 'axios';

class CityToZip extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: '',
      zips: 0
    }
  }

  myChangeHandler = (e) => {
    this.setState({city: e.target.value});
  }

  mySubmitHandler = (e) => {
    e.preventDefault();
    const input = this.state.city;
    const inputUp = input.toUpperCase();
    axios.get(`http://ctp-zip-api.herokuapp.com/city/${inputUp}`)
      .then(res => {
        const zips = res.data;
        console.log(zips[0]);
        this.setState({zips: zips[0]})
    })
  }

  render(){
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Please fill out the form below</h1>
        <p>Please enter a City</p>
        <input type='text' onChange={this.myChangeHandler}/>
        <input type='submit' />
        <h3>Zip Code: {this.state.zips}</h3>
      </form>
    )
  }
}

export default CityToZip;
