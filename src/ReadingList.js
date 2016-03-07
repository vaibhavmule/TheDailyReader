import React, { Component } from 'react';

export default class ReadingList extends Component{
	createItem = (item) => {
      return <li key={item.id}>{item.text}</li>;
  };

  render() {  
    return ( <ul>{this.props.items.map(this.createItem)}</ul> );
  }
}
 