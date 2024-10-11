import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [prodotti, setProdotti] = useState<string[]>([]);

  useEffect(() => {
    console.log("Recupero prodotti dal server in corso:", category);
    setProdotti(["Bici", "Frutta"]);
  }, [category]);

  return (
    <ul>
      {prodotti.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
};

export default ProductList;
