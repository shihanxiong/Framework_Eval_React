import { API_REQUEST_SUCCESS, API_REQUEST_ERROR } from '../actions/user-action';

export default (state = '', { type, payload }) => {
  switch (type) {
    case API_REQUEST_SUCCESS:
      return payload.user;
    case API_REQUEST_ERROR:
      return payload.user;
    default:
      return state;
  }
};
