import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
   deleteContact = (id) => {
      const { contacts } = this.state;
      const newContacts = contacts.filter((contact) => contact.id !== id);

      this.setState({ contacts: newContacts });
   };

   render() {
      const { contacts } = this.state;

      return (
         <div>
            {contacts.map((contact) => (
               <Contact
                  key={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  contact={contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
               />
            ))}
         </div>
      );
   }
}
