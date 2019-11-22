import axios from "axios";

export const GDATA_LOAD_START = "GDATA_LOAD_START";
export const GDATA_LOAD_SUCCESS = "GDATA_LOAD_SUCCESS";
export const GDATA_LOAD_FAILURE = "GDATA_LOAD_FAILURE";

export const getGiphyData = () => dispatch => {
  dispatch({ type: GDATA_LOAD_START });

  axios
    .get("https://api.giphy.com/v1/gifs/random?api_key=zclAIix5gQmJ7N4h6GiSzarlEo28gDGx&tag=&rating=G")
    .then(res => {
      console.log(res);
      dispatch({
        type: GDATA_LOAD_SUCCESS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GDATA_LOAD_FAILURE,
        payload: "error loading data"
      });
    });
};
