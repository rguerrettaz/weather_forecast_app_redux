import { FETCH_WEATHER } from '../actions/index'


// state should be treated as immutable, always return a new state object
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // data has cities list
      return [action.payload.data, ...state];
  }

  return state;
}