import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ''
    };
    this.enterFirst = this.enterFirst.bind(this);
  }

  enterFirst(event) {
    console.log('THIS:::::::', this);
    this.setState({
      firstName: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        {this.state.firstName} <br /> 
        First Name: <input name="first" onChange={this.enterFirst} /> Last Name: {this.props.lastName}
      </div>
    );
  }
}

export default App;