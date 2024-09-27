import { useState } from "react";
import { produce } from "immer";
import Button from "./Button";

const GestioneStato = () => {
  const [cocktail, setCocktail] = useState({
    nome: "Moscow Mule",
    prezzo: 7,
  });

  const [cliente, setCliente] = useState({
    nome: "Gigi",
    indirizzo: {
      citta: "Modena",
      cap: 41100,
    },
  });

  const [tags, setTags] = useState(["corto", "economico"]);

  const [bugs, setBugs] = useState([
    {
      id: 1,
      titolo: "Bug 1",
      fixed: false,
    },
    {
      id: 2,
      titolo: "Bug 2",
      fixed: false,
    },
  ]);

  const handleClick = () => {
    setCocktail({ ...cocktail, prezzo: 9 });
    setCliente({ ...cliente, indirizzo: { ...cliente.indirizzo, cap: 43888 } });

    // gestione array
    // add
    setTags([...tags, "elegante"]);

    // remove
    setTags(tags.filter((tag) => tag != "corto"));

    // update
    setTags(tags.map((tag) => (tag == "economico" ? "economica" : tag)));

    // clear
    setTags([]);

    // gestione array oggetti
    // update
    setBugs(bugs.map((bug) => (bug.id == 1 ? { ...bug, fixed: true } : bug)));

    // add
    setBugs([...bugs, { id: 3, titolo: "Bug 3", fixed: false }]);

    // remove
    setBugs(bugs.filter((bug) => bug.id != 2));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id == 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.titolo} {bug.fixed ? "Risolto" : "Nuovo"}
        </p>
      ))}
      <Button onClick={handleClick}>Salva</Button>
    </div>
  );
};

export default GestioneStato;
