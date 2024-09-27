import Button from "./Button";

interface Props {
  articoliCarrello: string[];
  onClear: () => void;
}

const Cart = ({ articoliCarrello, onClear }: Props) => {
  return (
    <>
      <h1>Carrello</h1>
      <ul>
        {articoliCarrello.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
      <Button color="danger" onClick={onClear}>
        Svuota
      </Button>
    </>
  );
};

export default Cart;
