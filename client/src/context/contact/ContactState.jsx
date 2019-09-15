import React, { useReducer } from "react";
//import uuid from "uuid";
import axios from "axios";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
    loading: true
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //add contact

  const addContact = async contact => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    await axios
      .post("api/contacts", contact, config)
      .then(res => {
        dispatch({
          type: ADD_CONTACT,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: CONTACT_ERROR,
          payload: err.response.data.msg
        });
      });
  };

  //getContact

  const getContact = async () => {
    await axios
      .get("api/contacts")
      .then(res => {
        dispatch({
          type: GET_CONTACTS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: CLEAR_CONTACTS,
          payload: err.response.data.msg
        });
      });
  };

  //delete contact
  const deleteContact = async id => {
    await axios
      .delete(`api/contacts/${id}`)
      .then(res => {
        dispatch({ type: DELETE_CONTACT, payload: id });
      })
      .catch(err => {
        dispatch({ type: CONTACT_ERROR, payload: err.response.data.msg });
      });
  };
  //set current contact

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //update contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //filter contact
  const filterContact = text => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };
  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  //clearcontacts

  const clearContacts = () => {
    dispatch({
      type: CLEAR_CONTACTS
    });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
        error: state.error,
        loading: state.loading,
        getContact,
        clearContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
