import React, { Component } from 'react';
import _ from 'lodash'

import ReadingList from './ReadingList';

export default class ReadingApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      link: '',
      title: '',
    }
  };

  onChangeLink = (event) => {
    this.setState({link: event.target.value});
  };

  onChangeTitle = (event) => {
    this.setState({title: event.target.value});
  };

  deleteItem = (item) => {
    const confirmation = window.confirm('Are you sure you want to delete ' + item.title + '?')
    if (confirmation) {
      _.pull(this.state.items, item)
      this.forceUpdate()
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!_.includes(this.state.link, 'http')) {
      this.state.link = 'http://' + this.state.link;
    }
    
    var nextItems = this.state.items.concat([{
      link: this.state.link, 
      id: Date.now(), 
      title: this.state.title || this.state.link 
    }]);

    this.setState({items: nextItems, link: '', title: ''});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>link: </label>
          <input onChange={this.onChangeLink} value={this.state.link} required/>
          <label>title: </label>
          <input onChange={this.onChangeTitle} value={this.state.title}/>
          <button>Add</button>
        </form>
        <ReadingList items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}