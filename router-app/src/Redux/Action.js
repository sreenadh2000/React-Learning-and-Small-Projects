import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USET_OBJ,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";
import { toast } from "react-toastify";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};
export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};
export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};
export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
export const addUser = () => {
  return {
    type: ADD_USER,
  };
};
export const updateUser = () => {
  return {
    type: UPDATE_USER,
  };
};
export const getUserObj = (data) => {
  return {
    type: GET_USET_OBJ,
    payload: data,
  };
};
/////////////// Fetching Data ///////////////////
export const FetchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(() => {
    axios
      .get("http://localhost:8000/user")
      .then((res) => {
        const userList = res.data;
        dispatch(getUserList(userList));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // }, 2000);
  };
};

//////////////// Delete user ///////////////////////
export const RemoveUser = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(() => {
    axios
      .delete("http://localhost:8000/user/" + code)
      .then((res) => {
        // const userList = res.data;
        dispatch(deleteUser());
        dispatch(FetchUserList());
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // }, 2000);
  };
};

//////////////// Add User //////////////////////
export const FunctionAddUser = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(() => {
    axios
      .post("http://localhost:8000/user", data)
      .then((res) => {
        dispatch(addUser());
        toast.success("User Addedd Successfully.");
        // dispatch(getUserList(userList));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // }, 2000);
  };
};
//////////////// Updating User ////////////////
export const FunctionUpdateUser = (data, code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(() => {
    axios
      .put("http://localhost:8000/user/" + code, data)
      .then((res) => {
        dispatch(updateUser());
        toast.success("User Updated Successfully.");
        // dispatch(getUserList(userList));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // }, 2000);
  };
};
///////////////////////// get User By Object ///////////

export const FetchUserObj = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(() => {
    axios
      .get("http://localhost:8000/user/" + code)
      .then((res) => {
        const userList = res.data;
        dispatch(getUserObj(userList));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // }, 2000);
  };
};
