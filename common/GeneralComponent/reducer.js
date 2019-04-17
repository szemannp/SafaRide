import Immutable from 'immutable';

const initialState = Immutable.fromJS({

});

function generalReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default generalReducer;
