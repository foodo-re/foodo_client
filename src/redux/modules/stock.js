import { handleActions } from "redux-actions";
import config from "../../config/config";

const GET_STOCK_PENDING = "GET_STOCK_PENDING";
const GET_STOCK_SUCCESS = "GET_STOCK_SUCCESS";
const GET_STOCK_FAILURE = "GET_STOCK_FAILURE";

function getStockAPI() {
  return fetch(config.server + "/ingredients", {
    credentials: "include"
  });
}
export const getStock = () => dispatch => {
  dispatch({ type: GET_STOCK_PENDING });

  return getStockAPI()
    .then(res => res.json())
    .then(result => {
      dispatch({
        payload: result,
        type: GET_STOCK_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        payload: err,
        type: GET_STOCK_FAILURE
      });
    });
};
const initialState = {
  pending: false,
  error: false,
  data: false
};
export default handleActions(
  {
    [GET_STOCK_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true
      };
    },
    [GET_STOCK_SUCCESS]: (state, action) => {
      return {
        ...state,
        pending: false,
        data: action.payload
      };
    },
    [GET_STOCK_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    }
  },
  initialState
);
