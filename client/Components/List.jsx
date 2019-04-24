import React from 'react'
import ListEntry from './ListEntry.jsx'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myString: '',
            myArray: []

        }
        this.handleString = this.handleString.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickOnListEntry = this.handleClickOnListEntry.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleClickOnListEntry(event) {
        let itemName = event.target.id;
        alert(itemName)
    }

    handleString(event) {
        this.setState({
            myString: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            myArray: this.state.myArray.concat(this.state.myString),
            myString: ''
        })
        document.getElementById('myForm').reset();
    };

    handleDelete(index) {
        let newArray = this.state.myArray.slice();
        newArray.splice(index, 1);
        this.setState({
            myArray: newArray
        })
    }

    handleEdit(index){
        let newArray = this.state.myArray.slice();
        console.log(newArray[index])
        let newString = prompt('Edit :')
        console.log(newString)
        newArray[index] = newString;
        this.setState({
            myArray: newArray
        })
    }
    


    render() {
        return (
            <div>
                <form id='myForm'>
                    <input type='text' onChange={this.handleString} />
                    <input type='button' value='submit' onClick={this.handleSubmit} />
                </form>
                <form>
                    {this.state.myArray.map((item, index) => <ListEntry item={item} index={index} handleEdit={this.handleEdit} handleDelete={this.handleDelete} handleClickOnListEntry={this.handleClickOnListEntry} />)}
                </form>

            </div>

        )
    }
}

export default List



