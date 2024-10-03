import { FormEvent, useState } from "react";

const FormControlled = () => {
  const [persona, setPersona] = useState({ nome: "", eta: 0 });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // spedire al server
    console.log(persona);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">
          Nome
        </label>
        <input
          onChange={(e) => setPersona({ ...persona, nome: e.target.value })}
          id="nome"
          type="text"
          className="form-control"
          value={persona.nome}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eta" className="form-label">
          Età
        </label>
        <input
          onChange={(e) =>
            setPersona({ ...persona, eta: parseInt(e.target.value) })
          }
          id="eta"
          type="number"
          className="form-control"
          value={persona.eta}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Salva
      </button>
    </form>
  );
};

export default FormControlled;
