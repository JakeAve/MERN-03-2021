import React, { useState } from "react";

const Formulario = () => {
  const [iguales, setIguales] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target.closest("form");
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) data[key] = value;
    setIguales(data["password-1"] === data["password-2"]);
    console.log({ formData, formDataEntries: formData.entries(), data });

    // fetch({url: '/api/new-user', method: post}).then(() => {}).catch(() => {})
  };

  return (
    <form
      className="averiguar-contraseñas"
      onSubmit={onSubmit}
      onChange={onSubmit}
    >
      <input name="username" />
      <label htmlFor="correo-1">Correo</label>
      <input id="correo-1" name="correo" type="email" />
      <input name="numero" type="tel" />
      <input name="password-1" type="password" />
      <input name="password-2" type="password" />
      <span>{iguales ? "" : "Tienen que ser iguales"}</span>
      <button>Click Me</button>
    </form>
  );
};

export default Formulario;
