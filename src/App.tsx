import { useState } from "react";
import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button";
import ListGroupStyled from "./components/ListGroup/ListGroupStyled";
import { BsAlipay } from "react-icons/bs";
import Like from "./components/Like";

const App = () => {
  const items = ["Roma", "Milano", "Tokyo", "Londra", "Parigi"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(true);

  return (
    <div className="container py-3">
      <Like
        color="green"
        size={30}
        onStatusChange={(ciccio) =>
          console.log("status:", ciccio ? "piaciuto" : "detestato")
        }
      />
      <hr />
      <Button color="primary" onClick={() => alert("click")}>
        Apri
      </Button>
      <Button color="danger" onClick={() => alert("click")}>
        Salva
      </Button>
      <Button color="warning" onClick={() => alert("click")}>
        <BsAlipay />
      </Button>
      <Button onClick={() => alert("click")}>Lancia</Button>

      {/* <ListGroup items={items} title="Città" onSelectItem={handleSelectItem} /> */}
      <ListGroupStyled
        items={items}
        title="Città"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <h3>Attenzione!</h3>
          <p>Pagina non trovata</p>
          <a href="#">Torna alla home</a>
        </Alert>
      )}
      {!alertVisible && (
        <button type="button" onClick={() => setAlertVisible(true)}>
          Apri alert
        </button>
      )}
    </div>
  );
};

export default App;
