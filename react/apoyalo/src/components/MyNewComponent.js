import React, { Component } from "react";

class MyNewComponent extends Component {
  render() {
    const { headingText, children, listItems } = this.props;
    return (
      <section>
        <div>
          {children}
          <h1>{headingText}</h1>
          <ul>
            {listItems.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default MyNewComponent;
