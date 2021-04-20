import React, { useRef, useState } from "react";

const Subcontent = (props) => {
  /* Elevacion */
  const {
    textoDesdeArriba: { texto, setTexto },
  } = props;
  const [fecha, setFecha] = useState("");
  const inputDeFecha = useRef(null);

  const hacerLaCosa = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    inputDeFecha.current.style.backgroundColor = "green";
    console.log({ data: { texto, fecha } });
  };
  return (
    <section className="subcontent">
      <form onSubmit={hacerLaCosa}>
        <input
          type="text"
          onChange={(e) => setTexto(e.target.value)}
          value={texto}
        />
        <input
          type="date"
          ref={inputDeFecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Subcontent;
