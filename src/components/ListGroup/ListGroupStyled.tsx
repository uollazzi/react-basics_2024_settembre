import { useState } from "react";
// import "./ListGroupStyled.css"; // STEP 1
// import styles from "./ListGroupStyled.module.css"; // STEP 2
import styled from "styled-components";
import { BsCalendar3Fill, BsAlipay } from "react-icons/bs";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background-color: ${(props) => (props.active ? "pink" : "none")};
`;

interface Props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

const ListGroupStyled = ({ items, title, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{title}</h1>

      {!items.length && <p>Non ci sono elementi</p>}
      {/* <ul className="list-group container"> STEP 1 */}
      {/* <ul className={[styles.listGroup, styles.container].join(" ")}> STEP 2 */}
      <List
        style={{
          border: "1px solid black",
          backgroundColor: "beige",
        }}
      >
        {items.map((item, index) => (
          // <li
          //   className={
          //     selectedIndex == index
          //       ? "list-group-item active"
          //       : "list-group-item"
          //   }
          <ListItem
            active={selectedIndex == index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
          // </li>
        ))}
      </List>
      {/* </ul> */}
      <BsCalendar3Fill />
      <BsAlipay color="#ff0000" size="80" />
    </>
  );
};

export default ListGroupStyled;
