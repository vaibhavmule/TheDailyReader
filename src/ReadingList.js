import React, { Component } from 'react';

export default class ReadingList extends Component{
  constructor(props) {
    super(props)
  };

  createItem = (item) => {
  return (
      <li key={item.id}>
      	<a target="_blank" href={item.link}>{item.title}</a>
        <button onClick={this.props.deleteItem.bind(null, item)}>Delete</button>
      </li>
    );
  };

  render() {  
    return (<ul>{this.props.items.map(this.createItem)}</ul>);
  }
}
 
	