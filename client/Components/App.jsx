import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div>
        First Name: {this.props.firstName} Last Name: {this.props.lastName}
      </div>
    );
  }
}

export default App;