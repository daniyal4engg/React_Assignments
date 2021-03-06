import * as types from "./actionTypes";
const initialState = {
  products: [],
  error: "",
  currentProduct: {},
  loading: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        products: payload,
        error: "",
        loading: false,
      };
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case types.GET_SINGLE_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.GET_SINGLE_SUCCESS:
      return {
        ...state,
        currentProduct: payload,
        error: "",
        loading: false,
      };
    case types.GET_SINGLE_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
