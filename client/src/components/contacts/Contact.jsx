import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/ContactContext";

const Contact = () => {
  const contactContext = useContext(ContactContext);

  if (contactContext.contacts.length === 0) {
    return (
      <h1>There are no contacts, Please add contacts to see them here!</h1>
    );
  }

  const { contacts, filtered } = contactContext;
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact._id} timeout={1000} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact._id} timeout={1000} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>

      {/* {contactContext.contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))} */}
    </Fragment>
  );
};

export default Contact;
