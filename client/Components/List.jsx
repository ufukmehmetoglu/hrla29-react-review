import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myString: '',
      myArray: []
    };
    this.enterText = this.enterText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  enterText(event) {
    this.setState({
      myString: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      myString: '',
      myArray: this.state.myArray.concat(this.state.myString)
    });
    //concat returns a new array
    //https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-reactjs
    document.getElementById('myForm').reset();
  }

  handleClick(event) {
    let itemName = event.target.id;
    alert(itemName);
  }

  handleDelete(index) {
    let todos = this.state.myArray.slice();
    todos.splice(index, 1);
    this.setState({
      myArray: todos
    });
  }

  handleEdit(index) {
    let todos = this.state.myArray.slice();
    let newTodo = prompt('Edit: ', todos[index]);
    console.log(newTodo);
    todos[index] = newTodo;
    console.log('UPDATED TODOS: ', todos);
    this.setState({
      myArray: todos
    });
  }

  render() {
    return (
      <div>
        Hello from List!!!
        
        <form id="myForm">
          <input type="text" onChange={this.enterText} />
          <input type="submit" value="submit" onClick={this.handleSubmit} />
        </form>
        
        This is myString: {this.state.myString} <br />
        This is myArray: {this.state.myArray} <br />
        
        <div>
          {this.state.myArray.map((item, index) => { 
           return <ListEntry index={index} key={item} item={item} handleClick={this.handleClick} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
          })
        }  
        </div>
      
      </div>
    )
  }
};

export default List;