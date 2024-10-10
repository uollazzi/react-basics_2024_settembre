import { useEffect, useRef } from "react";

const Effect = () => {
  const ref = useRef<HTMLInputElement>(null);

  const connect = () => console.log("Connected");
  const disconnect = () => console.log("Disconnected");

  // afterRender
  // react esegue le callback di ogni useEffect dopo OGNI render
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    } else {
      console.log("Non c'è ancora");
    }
  });

  useEffect(() => {
    document.title = "Mia App";
  });

  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return <input ref={ref} className="form-control" />;
};

export default Effect;
