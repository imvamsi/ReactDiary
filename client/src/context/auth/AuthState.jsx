import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  //Load user

  //register user

  const register = async formData => {
    await axios
      .post("api/users", formData)
      .then(res => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: REGISTER_FAIL,
          payload: error.response.data.msg
        });
      });

    // try {
    //   const res = await axios.post("api/users", formData);
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  //login user

  //logout user

  //clear errors

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
