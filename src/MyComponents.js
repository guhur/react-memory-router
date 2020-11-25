import React, { Component } from "react";

// const NavBar = ({ admin }) => (
// useState
//   <ul>
//     <li>Accueil</li>
//     <li>Contact</li>
//     <li>Qui sommes-nous ?</li>
//     {admin ? <li>Admin</li> : null}
//   </ul>
// );

class NavBar extends Component {
  render() {
    const { admin } = this.props;
    return (
      <ul>
        <li>Accueil</li>
        <li>Contact</li>
        <li>Qui sommes-nous ?</li>
        {admin ? <li>Admin</li> : null}
      </ul>
    );
  }
}

export default NavBar;
