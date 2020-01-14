import React, {Component} from 'react';

class Zip extends Component {
  render(){
    //const {state, city} = this.props.details;
    const code = this.props.code;
    return(
      <li>
        <p>{code}</p>
      </li>
    )
  }
}

export default Zip;
