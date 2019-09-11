import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { current } = contactContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });
  const { name, email, phone, type } = contact;
  console.log(contact);

  const clearAll = () => {
    contactContext.clearCurrent();
  };

  const onChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   contactContext.addContact(contact);
  //   setContact({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     type: "personal"
  //   });
  // };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      contactContext.addContact(contact);
    } else {
      contactContext.updateContact(contact);
    }
    clearAll();
  };

  return (
    <form onSubmit={onSubmit}>
      <h3 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}
      </h3>
      <input
        type="text"
        placeholder="Enter the Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Enter the email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Enter the Phone Number"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact type: </h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />
      Personal
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className=" btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
