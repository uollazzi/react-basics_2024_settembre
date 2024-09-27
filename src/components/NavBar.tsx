interface Props {
  articoliCarrelloCount: number;
}

const NavBar = ({ articoliCarrelloCount }: Props) => {
  return (
    <div style={{ border: "1px solid black" }}>
      NavBar: {articoliCarrelloCount}
    </div>
  );
};

export default NavBar;
