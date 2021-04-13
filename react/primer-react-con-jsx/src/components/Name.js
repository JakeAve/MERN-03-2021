import React, { Component } from "react";

class Name extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        Hola mi nombre is {firstName} {lastName}.
      </div>
    );
  }
}

export default Name;
