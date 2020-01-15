import React, {Component} from 'react';

class State extends Component {
  render(){
    const state = this.props.state;
    return(
      <li>
        <p>{state}</p>
      </li>
    )
  }
}

export default State;
