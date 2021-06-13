import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
   constructor() {
      super();

      this.state = {
         monsters: [],
         searchField: "",
      };

      // This bind method becomes obsolete with the use of arrow functions
      // this.handleChange = this.handleChange.bind(this);
   }

   // Fetching data from json.placeholder
   componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((users) => {
            this.setState({ monsters: users });
            console.log(users);
         });
   }

   // Create methods below constructor and pass them into render
   // Arrow function automatically binds 'this' to the place where this arrow function is defined (App Component)
   handleChange = (e) => {
      this.setState({ searchField: e.target.value });
   };

   render() {
      // FILTER MONSTER INPUT SEARCH
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter((monster) =>
         monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
         <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox
               placeholder="Search Monsters"
               handleChange={this.handleChange}
            />
            <CardList monsters={filteredMonsters}></CardList>
         </div>
      );
   }
}

export default App;
