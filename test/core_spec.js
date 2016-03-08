import { Map } from 'immutable';
import { expect } from 'chai';

import { create, update, destroy, ReadingItem } from '../src/core';

describe('crud operation', () => {

  describe('create', () => {

    it('adds the reading item to the state', () => {
      const state = Map();
      const nextState = create(state, {
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      })
      expect(nextState).to.equal(Map({
        abc123: new ReadingItem({
          id: 'abc123',
          link: 'http://vaibhavmule.com',
          title: 'vaibhav mule'
        })
      }));
    })

  })

  describe('update', () => {

    it('update the reading item to the state', () => {
      const state = Map();
      const nextState = create(state, {
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      })
      const updateState = update(nextState, 'abc123', {
        link: 'http://foo-bar.com',
        title: 'foo bar'
      })
      expect(updateState).to.equal(Map({
        abc123: new ReadingItem({
          id: 'abc123',
          link: 'http://foo-bar.com',
          title: 'foo bar'
        })
      }));
    })

  })

  describe('delete', () => {

    it('delete the reading item to the state', () => {
      const state = Map();
      const addOneItemToState = create(state, {
        id: 'abc123',
        link: 'http://vaibhavmule.com',
        title: 'vaibhav mule'
      });
      const addSecondItemToState = create(addOneItemToState, {
        id: 'foo123',
        link: 'http://foo-bar.com',
        title: 'foo bar'
      });
      const stateAfterDeletingItem = destroy(addSecondItemToState, 'foo123')
      expect(stateAfterDeletingItem).to.equal(Map({
        abc123: new ReadingItem({
          id: 'abc123',
          link: 'http://vaibhavmule.com',
          title: 'vaibhav mule'
        })
      }));

    })
  })


})
