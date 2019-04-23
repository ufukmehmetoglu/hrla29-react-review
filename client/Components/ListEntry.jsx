import React from 'react';

const ListEntry = (props) => {
  return (
    <div id={props.item}>
      ListEntry: {props.item}
      <input
        type="submit"
        value="Delete"
        onClick={() => props.handleDelete(props.index)} 
      />
      <input
        type="submit"
        value="Edit"
        onClick={() => props.handleEdit(props.index)} 
      />
    </div>
  )
};

export default ListEntry;