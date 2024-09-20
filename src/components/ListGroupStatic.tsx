import { useState } from "react";

const items = ["Roma", "Milano", "Tokyo", "Londra", "Parigi"];
// const items: string[] = [];

const ListGroupStatic = () => {
  // alternativa 1
  // if (items.length == 0) return <p>Non ci sono elementi.</p>;

  // alternativa 3
  //   const getMessage = () => {
  //     return items.length == 0 ? <p>Non ci sono elementi</p> : null;
  //   };

  //   const handleClick = (e: MouseEvent) => {
  //     console.log(e);
  //   };

  // state management
  // let selectedIndex = 2;

  // hook useState
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0]; // variabile (valore corrente)
  //   arr[1]; // updater function

  return (
    <>
      <h1>Città</h1>
      {/* alternativa 2 */}
      {/* {items.length == 0 ? <p>Non ci sono elementi</p> : null} */}

      {/* alternativa 3
      {getMessage()} */}

      {!items.length && <p>Non ci sono elementi</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item, index)}
            // onClick={(e) => console.log(e)}
            // onClick={handleClick}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroupStatic;
