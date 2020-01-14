import React, {Component} from 'react';
import axios from 'axios';
import Zip from './Zip';

class CityToZip extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: '',
      zips: []
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
        console.log(zips);
        this.setState({zips: zips})
    })
  }


  render(){
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Please fill out the form below</h1>
        <p>Please enter a City</p>
        <input type='text' onChange={this.myChangeHandler}/>
        <input type='submit' />
        <ul>
          {Object.keys(this.state.zips).map(key => (
            <Zip
              key={key}
              index={key}//to access key
              //details={this.state.zips[key]}
              code={this.state.zips[key]}
            />
          ))}
        </ul>
      </form>
    )
  }
}

export default CityToZip;
