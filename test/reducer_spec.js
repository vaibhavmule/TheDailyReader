import { Map } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';
import { ReadingItem } from '../src/core';

describe('reducer', () => {

  it('has an initial state', () => {
    const action = {
      type: 'ADD_READING_ITEM',
      newReadingItem: {
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      }
    };
    const nextState = reducer(undefined, action);
    expect(nextState).to.equal(Map({
      abc123: new ReadingItem({
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      })
    }))
  });

  it('handles ADD_READING_ITEM', () => {
    const initialState = Map();
    const action = {
      type: 'ADD_READING_ITEM',
      newReadingItem: {
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(Map({
      abc123: new ReadingItem({
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      })
    }))
  });

  it('handles UPDATE_READING_ITEM', () => {
    const initialState = Map();
    const addAction = {
      type: 'ADD_READING_ITEM',
      newReadingItem: {
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      }
    };
    const updateAction = {
      type: 'UPDATE_READING_ITEM',
      id: 'abc123',
      updateReadingItem: {
        id: 'abc123',
        link: 'http://foo-bar.com',
        title: 'foo bar'
      }
    };
    const nextState = reducer(initialState, addAction);
    const updateState = reducer(nextState, updateAction);

    expect(updateState).to.equal(Map({
      abc123: new ReadingItem({
        id: 'abc123',
        link: 'http://foo-bar.com',
        title: 'foo bar'
      })
    }));
  });

  it('handles DELETE_READING_ITEM', () => {
    const initialState = Map();
    const addActionOne = {
      type: 'ADD_READING_ITEM',
      newReadingItem: {
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      }
    };
    const addActionTwo = {
      type: 'ADD_READING_ITEM',
      newReadingItem: {
        id: 'foo123',
        link: 'http://foo-bar.com',
        title: 'foo bar'
      }
    };
    const deleteAction = {
      type: 'DELETE_READING_ITEM',
      id: 'foo123'
    };

    const addOneItemToState = reducer(initialState, addActionOne);
    const addSecondItemToState = reducer(addOneItemToState, addActionTwo);
    const stateAfterDeletingItem = reducer(addSecondItemToState, deleteAction);

    expect(stateAfterDeletingItem).to.equal(Map({
      abc123: new ReadingItem({
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      })
    }));
  });

  it('can be used with reduce', () => {
    const actions = [{
      type: 'ADD_READING_ITEM',
      newReadingItem: {
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      }
    }, {
      type: 'ADD_READING_ITEM',
      newReadingItem: {
        id: 'foo123',
        link: 'http://foo-bar.com',
        title: 'foo bar'
      }
    }];

    const finalState = actions.reduce(reducer, Map());

    expect(finalState).to.equal(Map({
      abc123: new ReadingItem({
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      }),
      foo123: new ReadingItem({
        id: 'foo123',
        link: 'http://foo-bar.com',
        title: 'foo bar'
      })
    }))
  });

});
