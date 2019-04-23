import React from 'react';

const ListEntry = (props) => {
  return (
    <div id={props.item} onClick={props.handleClick}>
      ListEntry: {props.item}
    </div>
  )
};

export default ListEntry;