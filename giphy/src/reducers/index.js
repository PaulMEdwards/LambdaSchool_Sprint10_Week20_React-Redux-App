import {
  GDATA_LOAD_START,
  GDATA_LOAD_SUCCESS,
  GDATA_LOAD_FAILURE
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  giphyData: ""
};

const reducer = (state = initialState, action) => {
  console.log("reducer state:", state);
  console.log("reducer action:", action);

  switch (action.type) {
    case GDATA_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case GDATA_LOAD_SUCCESS:
      return {
        ...state,
        giphyData: action.payload,
        isLoading: false
      };
    case GDATA_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
