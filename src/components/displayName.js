import React, { Component } from 'react';

class DisplayName extends Component {
  constructor(props){
    super(props);
    this.state = {term: ""};
  }

  onInputChange(term){
    //do stuff in here:
    this.setState({ term });
    this.props.onSearchTermChange(term);
    console.log("term: ", term);
  }

  render(){
    return (
      <div>
        <br/>
        <h3>DisplayName</h3>
        <input
          value={this.state.term}
          placeholder="locale tag"
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default DisplayName;
