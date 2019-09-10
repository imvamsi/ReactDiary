import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });
  const { name, email, phone, type } = contact;
  console.log(contact);

  const onChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h3 className="text-primary">Add new Contact</h3>
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
          value="Add Contact"
          className=" btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
