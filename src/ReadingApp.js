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

  onChangeLink = (e) => {
    this.setState({link: e.target.value});
  };

  onChangeTitle = (e) => {
    this.setState({title: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!_.includes(this.state.link, 'http')) {
      this.state.link = 'http://' + this.state.link;
    }
    var nextItems = this.state.items.concat([{link: this.state.link, id: Date.now(), title: this.state.title}]);
    this.setState({items: nextItems, link: '', title: ''});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>link: </label>
          <input onChange={this.onChangeLink} value={this.state.link}/>
          <label>title: </label>
          <input onChange={this.onChangeTitle} value={this.state.title}/>
          <button>Add</button>
        </form>
        <ReadingList items={this.state.items} />
      </div>
    );
  }
}