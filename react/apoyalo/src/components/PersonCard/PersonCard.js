import React, { Component, useState } from "react";
import "./PersonCard.css";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
    };

    console.log(`%cConstructor`, `color: yellow; font-size: 2rem;`)
  }

  componentDidMount() {
    console.log(`%ccomponentDidMount`, `color: dodgerblue; font-size: 2rem;`)
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log(`%cshouldComponentUpdate`, `color: cyan; font-size: 2rem;`);
    console.table({prevProps, prevState});
    return this.state.age < 100 ? false : true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`%ccomponentDidUpdate`, `color: red; font-size: 2rem;`);
    console.table({prevProps, prevState});
    console.log({snapshot})
  }

  componentWillUnmount() {
    console.log(`%ccomponentWillUnmount`, `color: black; font-size: 2rem;`);
  }

  happyBirthday = () => {
    this.setState({ age: this.state.age + 1 });
    // this.state.age = this.state.age + 1;
  };

  render() {
    console.log(`%cRender`, `color: green; font-size: 2rem;`)
    const { firstName, lastName, hairColor } = this.props;

    return (
      <section className="person-card">
        <h1>
          {lastName}, {firstName}
        </h1>
        <div>Age: {this.state.age}</div>
        <div>Hair Color: {hairColor}</div>
        <button onClick={this.happyBirthday}>Happy Birthday Botón</button>
      </section>
    );
  }
}

export default PersonCard;

// const PersonCard = (props) => {
//   const { firstName, lastName, hairColor, age: edadInicial } = props;
//   const [age, setAge] = useState(edadInicial);

//   const happyBirthday = () => {
//     setAge(age + 1);
//   };

//   return (
//     <section className="person-card">
//       <h1>
//         {lastName}, {firstName}
//       </h1>
//       <div>Age: {age}</div>
//       <div>Hair Color: {hairColor}</div>
//       <button onClick={happyBirthday}>Happy Birthday Botón</button>
//     </section>
//   );
// };

// export default PersonCard;
