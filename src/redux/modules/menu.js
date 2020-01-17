import { handleActions } from "redux-actions";
import config from "../../config/config";

const GET_MENU_PENDING = "GET_MENU_PENDING";
const GET_MENU_SUCCESS = "GET_MENU_SUCCESS";
const GET_MENU_FAILURE = "GET_MENU_FAILURE";

function getMenuAPI() {
  return fetch(config.server + "/menus", {
    credentials: "include"
  });
}

export const getMenu = () => dispatch => {
  dispatch({ type: GET_MENU_PENDING });

  return getMenuAPI()
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: GET_MENU_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      dispatch({
        payload: err,
        type: GET_MENU_FAILURE
      });
    });
};

const initialState = {
  pending: false,
  error: undefined,
  data: undefined
};

export default handleActions(
  {
    [GET_MENU_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true
      };
    },
    [GET_MENU_SUCCESS]: (state, action) => {
      return {
        ...state,
        pending: false,
        data: action.payload
      };
    },
    [GET_MENU_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    }
  },
  initialState
);
