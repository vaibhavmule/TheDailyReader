import React, { Component } from 'react';
import ReadingApp from './ReadingApp';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>The Daily Reader</h1>
        <ReadingApp />
      </div>
    );
  }
}
