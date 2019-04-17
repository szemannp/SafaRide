// import axios from 'axios';
// import { fetchBikesSuccess, fetchBikesError } from './actions';

// export function fetchBikes(username, password) {
//   // Invert control!
//   // Return a function that accepts `dispatch` so we can dispatch later.
//   // Thunk middleware knows how to turn thunk async actions into actions.

//   return function(dispatch, getState) {
//     console.log(getState());
//     return axios
//       .get('', {
//         headers: { 'Authorization': 'Token ' + getState().getIn(['login', 'token'])}
//       })
//       .then(
//         response => dispatch(fetchBikesSuccess(response.data)),
//         error => dispatch(fetchBikesError(error))
//       );
//   };
// }
