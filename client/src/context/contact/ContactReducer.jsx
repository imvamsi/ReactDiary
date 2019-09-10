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

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };

    case DELETE_CONTACT:
      //return all contacts thats not the current id
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};
