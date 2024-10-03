import { FormEvent, useRef } from "react";

const FormRef = () => {
  const nomeRef = useRef<HTMLInputElement>(null);
  const etaRef = useRef<HTMLInputElement>(null);
  const persona = { nome: "", eta: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nomeRef.current) {
      //   console.log(nomeRef.current.value);
      persona.nome = nomeRef.current.value;
    }

    if (etaRef.current) {
      //   console.log(etaRef.current.value);
      persona.eta = parseInt(etaRef.current.value);
    }

    // spedire al server
    console.log(persona);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">
          Nome
        </label>
        <input ref={nomeRef} id="nome" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="eta" className="form-label">
          Età
        </label>
        <input ref={etaRef} id="eta" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Salva
      </button>
    </form>
  );
};

export default FormRef;
