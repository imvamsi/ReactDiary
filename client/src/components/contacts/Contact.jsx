import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/ContactContext";

const Contact = props => {
  const contactContext = useContext(ContactContext);
  return (
    <Fragment>
      {contactContext.contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contact;
