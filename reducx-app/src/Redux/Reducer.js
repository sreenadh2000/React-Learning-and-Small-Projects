import {
  GET_USER_LIST,
  MAKE_REQUEST,
  FAIL_REQUEST,
  DELETE_USER,
  ADD_USER,
  UPDATE_USER,
  GET_USET_OBJ,
} from "./ActionType";

const initialState = {
  loading: true,
  userList: [],
  userObj: {},
  errMessage: "",
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errMessage: action.payload,
      };
    case GET_USER_LIST:
      return {
        ...state,
        loading: false,
        errMessage: "",
        userList: action.payload,
        userObj: {},
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case GET_USET_OBJ:
      return {
        ...state,
        loading: false,
        userObj: action.payload,
      };
    default:
      return state;
  }
};
