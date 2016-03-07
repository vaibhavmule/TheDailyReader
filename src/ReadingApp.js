import React, { Component } from 'react';
import _ from 'lodash'

import ReadingList from './ReadingList';

export default class ReadingApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: {},
      id: '',
      link: '',
      title: ''
    }
  };

  onChangeLink = (event) => {
    this.setState({link: event.target.value});
  };

  onChangeTitle = (event) => {
    this.setState({title: event.target.value});
  }; 

  deleteItem = (id, title) => {
    const confirmation = window.confirm('Are you sure you want to delete ' + title + '?')
    
    if (confirmation && this.state.items.hasOwnProperty(id)) {
      delete this.state.items[id];
      this.forceUpdate()
    }
  };

  updateItem = (id, item) => {
    this.setState({
      id: id,
      link: item.link,
      title: item.title
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!_.includes(this.state.link, 'http')) {
      this.state.link = 'http://' + this.state.link;
    }

    if (!_.isEmpty(this.state.id)) {
      if (this.state.items[this.state.id]) {
        this.state.items[this.state.id] = {
          link: this.state.link,
          title: this.state.title || this.state.link
        }
      }
      this.setState({
        id: ''
      })
    } else {

      var id = Date.now()
      var nextItems = this.state.items[id] = {
        link: this.state.link,
        title: this.state.title || this.state.link 
      };
    }

    this.setState({link: '', title: ''});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>link: </label>
          <input onChange={this.onChangeLink} value={this.state.link} title="Enter blog/website link" required/>
          <label>title: </label>
          <input onChange={this.onChangeTitle} value={this.state.title} title="Enter display text"/>
          {!_.isEmpty(this.state.id) && <button title="Edit">Edit</button> || <button title="Add blog to list">Add</button>}
        </form>
        <h2>Reading List</h2>
        <ReadingList items={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
      </div>
    );
  }
}