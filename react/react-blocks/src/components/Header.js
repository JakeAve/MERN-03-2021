import React, { useRef, useState } from "react";

const Header = (props) => {
  const { idioma: idiomaInicial, pais: paisInicial } = props;

  const [intl, setIntl] = useState({
    idioma: idiomaInicial,
    pais: paisInicial,
  });
  const inputIdRef = useRef(null);
  const inputPsRef = useRef(null);

  const cambiarIdioma = () => {
    const idioma = inputIdRef.current.value;
    // const pais = inputPsRef.current.value;
    setIntl((estadoActual) => ({ ...estadoActual, idioma }));
  };

  return (
    <header>
      {intl.idioma}-{intl.pais.toUpperCase()}
      <input ref={inputIdRef} />
      {/* <input ref={inputPsRef} /> */}
      <button onClick={cambiarIdioma}>Cambiar Idioma</button>
    </header>
  );
};

export default Header;
