import React, { Component } from "react";

class Eventos extends Component {
  render() {
    const clickForm = (e) => {e.preventDefault();  console.log({event: e})}
    return (
      <form className="event-form">
          <input type="text" placeholder="Correo" />
          <input type="password" placeholder="Contraseña"/>
          <button onClick={clickForm}>Login</button>
      </form>
    );
  }
}

export default Eventos;
