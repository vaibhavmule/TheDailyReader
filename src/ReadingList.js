import React, { Component } from 'react';
import _ from 'lodash';

export default class ReadingList extends Component{
  constructor(props) {
    super(props)
  };

  createItem = (key) => {
    var items = this.props.items
    return (
      <li key={key}>
      	<a target="_blank" href={items[key].link} style={{textDecoration: items[key].done ? 'line-through' : 'none'}} 
        onClick={this.props.doneItem.bind(null, key, items[key])}>{items[key].title}</a>
        <button onClick={this.props.updateItem.bind(null, key, items[key])}>Edit</button>
        <button onClick={this.props.deleteItem.bind(null, key, items[key].title)}>Delete</button>
      </li>
    );
  };

  render() {
    return (<ul>{_.keys(this.props.items).map(this.createItem)}</ul>);
  }
}
 
	