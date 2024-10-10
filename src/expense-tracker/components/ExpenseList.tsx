import { Expense } from "../expense";

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length == 0) return null;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Descrizione</th>
          <th>Importo</th>
          <th>Categoria</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>€ {expense.amount.toFixed(2)}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(expense.id)}
              >
                Elimina
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Totale:</td>
          <td>
            €{" "}
            {expenses
              .reduce((acc, expense) => acc + expense.amount, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
