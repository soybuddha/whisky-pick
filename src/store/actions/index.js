import { FETCH_WHISKIES } from './types';
import whiskies from '../../assets/data/whiskies.json';

export function fetchWhiskies() {
  return dispatch => dispatch({
    type: FETCH_WHISKIES,
    payload: whiskies,
  });
}

// export function fetchWhiskies() {
//   return (dispatch, getState, api) => {
//     return api
//       .getWhiskies()
//       .then(payload => {
//         dispatch({
//           type: FETCH_WHISKIES,
//           payload,
//         });
//         return payload;
//       })
//       .catch(error => {
//         throw new Error(error);
//       });
//   };
// }
