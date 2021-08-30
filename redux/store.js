import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = { isSelectedDate: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'choseDate':
      return { ...state, isSelectedDate: action.payload + 1 };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
