import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  //const { current } = contactContext;
  const text = useRef("");

  const { filtered, filterContact, clearFilter } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  }, [filtered, contactContext.contacts]);

  const onChange = e => {
    if (text.current.value !== "") {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts"
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
