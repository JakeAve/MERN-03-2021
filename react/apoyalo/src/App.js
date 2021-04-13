import SomeClassComponent from "./components/SomeClassComponent";
import Header from "./components/Header";
import PersonCard from "./components/PersonCard/PersonCard";
import MyNewComponent from "./components/MyNewComponent";
import Eventos from "./components/Eventos";
import LightSwitch from "./components/LightSwitch";

const persons = [
  { firstName: "Jane", lastName: "Doe", age: 88, hairColor: "Black" },
  { firstName: "Smith", lastName: "John", age: 88, hairColor: "Brown" },
  { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
  { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" },
  { firstName: "Juan", lastName: "Collantes", age: 65, hairColor: "Red" },
];



function App() {
  return (
    <div>
      <Eventos />

      <Header firstName="Coding" lastName="Dojo" />

      <SomeClassComponent />

      {persons.map((p, i) => (
        <PersonCard {...p} key={i} />
      ))}

      <MyNewComponent
        headingText="El Título de una Sección"
        listItems={[1, 2, 3, 4, 5]}
      >
        <button>Un Botón Aqui</button>
        <h2>Más Texto</h2>
      </MyNewComponent>

      <LightSwitch />

    </div>
  );
}

export default App;
