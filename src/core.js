import { Map, Record } from 'immutable';

export const INITIAL_STATE = Map();

export var ReadingItem = Record({
  id: null,
  done: false,
  link: '',
  title: ''
});

export function create(state, newReadingItem) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  return state.set(newReadingItem.id || id, new ReadingItem({ id: newReadingItem.id || id, link: newReadingItem.link, title: newReadingItem.title }));
}

export function update(state, id, updateReadingItem) {
  return state.set(id, state.get(id).merge(updateReadingItem));
}

export function destroy(state, id) {
  return state.delete(id);
}