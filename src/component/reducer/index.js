import {
  FETCH_ITEM_START,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
  POST_ITEM_START,
  POST_ITEM_SUCCESS,
  POST_ITEM_FAILURE,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIURE
} from "../actions";

export const initialState = {
  items: [],
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case POST_ITEM_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: ""
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: ""
      };

    default:
      return state;
  }
};

export default reducer;
