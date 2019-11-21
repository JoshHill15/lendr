import axios from "axios";

export const FETCH_ITEM_START = "FETCH_ITEM_START";
export const FETCH_ITEM_SUCCESS = "FETCH_ITEM_SUCCESS";
export const FETCH_ITEM_FAILURE = "FETCH_ITEM_FAILURE";

export const POST_ITEM_START = "POST_ITEM_START";
export const POST_ITEM_SUCCESS = "POST_ITEM_SUCCESS";
export const POST_ITEM_FAILURE = "POST_ITEM_FAILURE";

export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const fetchItem = () => dispatch => {
  dispatch({ type: FETCH_ITEM_START });

  axios
    .get("https://dog.ceo/api/breeds/image/random/100")
    .then(res => dispatch({ type: FETCH_ITEM_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: FETCH_ITEM_FAILURE, payload: err.response })
    );
};

export const postItem = obj => dispatch => {
  dispatch({ type: POST_ITEM_START });

  axios
    .post(``, obj)
    .then(res => dispatch({ type: POST_ITEM_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: POST_ITEM_FAILURE, payload: err.response }));
};

export const deleteItem = id => dispatch => {
  dispatch({ type: POST_ITEM_START });

  axios
    .delete(`url here/${id}`)
    .then(res => dispatch({ type: DELETE_ITEM_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: DELETE_ITEM_FAILURE, payload: err.response })
    );
};
