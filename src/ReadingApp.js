import React, { Component } from 'react';
import ReadingList from './ReadingList';

export default class ReadingApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      text: ''
    }
  }

  onChange = (e) => {
    this.setState({text: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    this.setState({items: nextItems, text: ''});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text}/>
          <button>Add</button>
        </form>
        <ReadingList items={this.state.items} />
      </div>
    );
  }
}