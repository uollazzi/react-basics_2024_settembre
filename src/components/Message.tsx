const Message = () => {
  const nome: string | undefined = undefined;

  if (nome) {
    return <h1>Ciao {nome}!</h1>;
  }

  return <h1>Ciao a tutti!</h1>;
};

export default Message;
