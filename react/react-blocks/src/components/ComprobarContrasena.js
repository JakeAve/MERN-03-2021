import React, { useRef, useState } from "react";

const ComprobarContrasena = () => {
  const [iguales, setIguales] = useState(true);
  const input1 = useRef();
  const input2 = useRef();

  const onChange = () => {
    const ig = input1.current.value === input2.current.value;
    setIguales(ig);
  };

  return (
    <form className="averiguar-contraseñas">
      <input type="password" onChange={onChange} ref={input1} />
      <input type="password" onChange={onChange} ref={input2} />
      <span>{iguales ? "" : "Tienen que ser iguales"}</span>
      <button>Averiguar</button>
    </form>
  );
};

export default ComprobarContrasena;
