import React, {Component} from 'react';

class Zip extends Component {
  render(){
    //const {code, state} = this.props.details;
    const code = this.props.code;
    //const state = this.props.state;
    return(
      <li>
        <p>{code}</p>
        {/*<p>{state}</p>*/}
      </li>
    )
  }
}

export default Zip;
