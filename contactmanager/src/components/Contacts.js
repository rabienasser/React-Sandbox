import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
   constructor() {
      super();
      this.state = {
         contacts: [
            {
               id: 1,
               name: "John Doe",
               email: "jdoe@gmail.com",
               phone: "555-555-5555",
            },
            {
               id: 2,
               name: "Karen Williams",
               email: "kwilliams@gmail.com",
               phone: "777-777-7777",
            },
            {
               id: 3,
               name: "Harvey Jones",
               email: "hjones@gmail.com",
               phone: "222-222-2222",
            },
         ],
      };
   }

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
               />
            ))}
         </div>
      );
   }
}
