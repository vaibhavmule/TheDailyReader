import { ReadingItem, INITIAL_STATE, create, update, destroy } from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_READING_ITEM':
      return create(state, action.newReadingItem);
    case 'UPDATE_READING_ITEM':
      return update(state, action.id, action.updateReadingItem);
    case 'DELETE_READING_ITEM':
      return destroy(state, action.id)
  }
  return state;
}