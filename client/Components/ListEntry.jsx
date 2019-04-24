import React from 'react'

var ListEntry = (props) => {
    return (
        <div>
            <p id ={props.item} onClick={props.handleClickOnListEntry}>{props.item}</p>
            <input type="button" value='Delete' onClick={() => props.handleDelete(props.index)}/>
            <input type="button" value='Edit' onClick={() => props.handleEdit(props.index)}/>
        </div>
    )
}


export default ListEntry 