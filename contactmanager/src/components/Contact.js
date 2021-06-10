import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
   state = {
      showContactInfo: false,
   };

   onShowClick = (e) => {
      this.setState({ showContactInfo: !this.state.showContactInfo });
   };

   onDeleteClick = (e) => {};

   render() {
      // USING DESTRUCTURING
      const { name, email, phone } = this.props;
      const { showContactInfo } = this.state;

      return (
         <div className="card card-body mb-3">
            <h4>
               {name}
               <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down down-arrow"
                  style={{ cursor: "pointer" }}
               ></i>
               <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick}
               ></i>
            </h4>
            {showContactInfo ? (
               <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
               </ul>
            ) : null}
         </div>
      );
   }
}

Contact.propTypes = {
   name: PropTypes.string.isRequired,
   email: PropTypes.string.isRequired,
   phone: PropTypes.string.isRequired,
};
