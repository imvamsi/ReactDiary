import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACTTACT,
  FILTER_CONTACTNTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Vamsikrishna Tamil selvan",
        email: "vamsikrishna@gmail.com",
        phone: "111-111-1111",
        type: "professional"
      },
      {
        id: 2,
        name: "Jack ryan",
        email: "jack@gmail.com",
        phone: "111-111-1111",
        type: "personal"
      }
    ]
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //add contact

  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //set current contact

  //clear current contact

  //update contact

  //filter contact

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
