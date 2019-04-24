import React from 'react'
import List from './List.jsx'

// var App = (props) => (
//     <div>{props.fullname}</div>
// )
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lastname: ''
        };
        this.getName = this.getName.bind(this);
        this.getLastName = this.getLastName.bind(this);
    }
    getName(e) {
        this.setState({
            name: e.target.value
        })
    }
    getLastName(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.name} {this.state.lastname}</h1>
                    {this.state.name === 'ufuk' && this.state.lastname ==='mehmetoglu' ? <h1>{this.state.name}</h1> : null }
                    <input type="text" name="firstname" onChange={this.getName} />
                    <input type='text' name='lastname' onChange={this.getLastName} />
                </div>
                <List />
            </div>


        )
    }
}
export default App 