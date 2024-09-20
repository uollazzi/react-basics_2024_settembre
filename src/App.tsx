import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

const App = () => {
  const items = ["Roma", "Milano", "Tokyo", "Londra", "Parigi"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(true);

  return (
    <div className="container">
      <ListGroup items={items} title="Città" onSelectItem={handleSelectItem} />
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
