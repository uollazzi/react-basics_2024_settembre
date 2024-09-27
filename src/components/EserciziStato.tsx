import { useState } from "react";
import Button from "./Button";

const EserciziStato = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Gigi",
    },
  });

  const [pizza, setPizza] = useState({
    nome: "4 Stagioni",
    ingredienti: ["pomodoro"],
  });

  const [carrello, setCarrello] = useState({
    sconto: 0.2,
    prodotti: [
      {
        id: 1,
        title: "Friggitrice",
        qta: 1,
      },
      {
        id: 2,
        title: "Zampirone",
        qta: 1,
      },
    ],
  });

  return (
    <div>
      <h5>
        1. Creare un bottone che aggiorni il nome del giocatore a "Pietro"
      </h5>
      <p>{game.player.name}</p>
      <Button onClick={() => setGame({ ...game, player: { name: "Pietro" } })}>
        Aggiorna Player
      </Button>
      <hr />
      <h5>
        2. Creare un bottone che aggiorni gli ingredienti della pizza a
        ["pomodoro", "mozzarella", "ecc"]
      </h5>
      <ul>
        {pizza.ingredienti.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <Button
        onClick={() =>
          setPizza({
            ...pizza,
            ingredienti: [
              ...pizza.ingredienti,
              "mozzarella",
              "carciofi",
              "prosciutto",
            ],
          })
        }
      >
        Aggiorna Pizza
      </Button>
      <hr />
      <h5>
        3. Creare un bottone che aggiorni la quantità dello zampirone del
        carrello a 3
      </h5>
      <ul>
        {carrello.prodotti.map((p) => (
          <li key={p.id}>
            {p.qta} {p.title}
          </li>
        ))}
      </ul>
      <Button
        onClick={() =>
          setCarrello({
            ...carrello,
            prodotti: carrello.prodotti.map((p) =>
              p.id == 2 ? { ...p, qta: 3 } : p
            ),
          })
        }
      >
        Aggiorna Carrello
      </Button>
    </div>
  );
};

export default EserciziStato;
