import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         meaningOfLife: 47 + this.props.increment,
      };

      // Must pass 'props' into contructor and super if you want to use this.props within the contructor
      // this.props = props;
   }

   handleClick = () => {
      //  setState is asynchronous, thus needing a callback function
      this.setState(
         (prevState, prevProps) => {
            return {
               meaningOfLife: prevState.meaningOfLife + prevProps.increment,
            };
         },
         () => console.log(this.state.meaningOfLife) //this is the callback function needed
      );
   };

   render() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>{this.state.meaningOfLife}</p>
               <button>Update State</button>
            </header>
         </div>
      );
   }
}

export default App;
