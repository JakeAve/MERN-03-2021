import React, { Component } from "react";
import styles from '../App.module.scss';

class Eventos extends Component {
  render() {
    const clickForm = (e) => {e.preventDefault();  console.log({event: e})}
    return (
      <form className={styles.eventForm}>
          <input type="text" placeholder="Correo" />
          <input type="password" placeholder="Contraseña"/>
          <button onClick={clickForm}>Login</button>
      </form>
    );
  }
}

export default Eventos;
