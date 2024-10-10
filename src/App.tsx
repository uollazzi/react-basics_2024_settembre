// import { useState } from "react";
// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup/ListGroup";
// import Button from "./components/Button";
// import ListGroupStyled from "./components/ListGroup/ListGroupStyled";
// import { BsAlipay } from "react-icons/bs";
// import Like from "./components/Like";

// import { useState } from "react";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";
// import EserciziStato from "./components/EserciziStato";
// import Form from "./components/Form";
// import FormZod from "./components/FormZod";
import { useState } from "react";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { Expense } from "./expense-tracker/expense";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
// import FormControlled from "./components/FormControlled";
// import FormRef from "./components/FormRef";

// import GestioneStato from "./components/GestioneStato";

const App = () => {
  // const [articoliCarrello, setArticoliCarrello] = useState(["Camicia", "Bici"]);
  // const items = ["Roma", "Milano", "Tokyo", "Londra", "Parigi"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // const [alertVisible, setAlertVisible] = useState(true);
  // return (
  //   <div className="container py-3">
  //     <Like
  //       color="green"
  //       size={30}
  //       onStatusChange={(ciccio) =>
  //         console.log("status:", ciccio ? "piaciuto" : "detestato")
  //       }
  //     />
  //     <hr />
  //     <Button color="primary" onClick={() => alert("click")}>
  //       Apri
  //     </Button>
  //     <Button color="danger" onClick={() => alert("click")}>
  //       Salva
  //     </Button>
  //     <Button color="warning" onClick={() => alert("click")}>
  //       <BsAlipay />
  //     </Button>
  //     <Button onClick={() => alert("click")}>Lancia</Button>
  //     {/* <ListGroup items={items} title="Città" onSelectItem={handleSelectItem} /> */}
  //     <ListGroupStyled
  //       items={items}
  //       title="Città"
  //       onSelectItem={handleSelectItem}
  //     />
  //     {alertVisible && (
  //       <Alert onClose={() => setAlertVisible(false)}>
  //         <h3>Attenzione!</h3>
  //         <p>Pagina non trovata</p>
  //         <a href="#">Torna alla home</a>
  //       </Alert>
  //     )}
  //     {!alertVisible && (
  //       <button type="button" onClick={() => setAlertVisible(true)}>
  //         Apri alert
  //       </button>
  //     )}
  //   </div>
  // );
  // return (
  //   <div className="container py-3">
  //     <NavBar articoliCarrelloCount={articoliCarrello.length} />
  //     <Cart
  //       articoliCarrello={articoliCarrello}
  //       onClear={() => setArticoliCarrello([])}
  //     />
  //     <hr />
  //     <EserciziStato />
  //   </div>
  // );
  // return (
  //   <div className="container py-3">
  //     <FormZod />
  //   </div>
  // );

  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 1,
      description: "Bici",
      amount: 100,
      category: "Svago",
    },
  ]);

  const filteredExpenses = selectedCategory
    ? expenses.filter((s) => s.category == selectedCategory)
    : expenses;

  return (
    <div className="container py-3">
      <ExpenseForm
        onNuovaSpesa={(spesa) => {
          setExpenses([...expenses, { ...spesa, id: expenses.length + 1 }]);
        }}
      />
      <hr />
      <h3>Elenco spese</h3>
      <div className="my-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) => {
          if (confirm("Sei sicuro di voler eliminare la spesa?")) {
            setExpenses(expenses.filter((e) => e.id != id));
          }
        }}
      />
    </div>
  );
};

export default App;
