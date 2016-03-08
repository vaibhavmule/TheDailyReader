import { Map } from 'immutable';
import { expect } from 'chai';

import makeStore from '../src/store';
import { ReadingItem } from '../src/core';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: 'ADD_READING_ITEM',
      newReadingItem: {
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      }
    });

    expect(store.getState()).to.equal(Map({
      abc123: new ReadingItem({
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      })
    }));
  });

});
