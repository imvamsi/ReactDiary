import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/ContactContext";

const Contact = () => {
  const contactContext = useContext(ContactContext);

  if (contactContext.contacts.length === null) {
    return (
      <h1>There are no contacts, Please add contacts to see them here!</h1>
    );
  }

  const { contacts, filtered } = contactContext;
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}

      {/* {contactContext.contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))} */}
    </Fragment>
  );
};

export default Contact;
