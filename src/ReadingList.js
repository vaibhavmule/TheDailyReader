import React, { Component } from 'react';

export default class ReadingList extends Component{
  createItem = (item) => {
  return (
      <li key={item.id}>
      	<a target="_blank" href={item.link}>{item.title}</a>
      </li>
    );
  };

  render() {  
    return (<ul>{this.props.items.map(this.createItem)}</ul>);
  }
}
 
	