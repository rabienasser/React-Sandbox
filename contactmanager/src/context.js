import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {}
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

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
 }