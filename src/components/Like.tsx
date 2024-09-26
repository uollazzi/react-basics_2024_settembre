import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  color?: string;
  size?: number;
  onStatusChange: (status: boolean) => void;
}

const Like = ({ color, size, onStatusChange }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onStatusChange(!status);
  };

  return (
    <span style={{ cursor: "pointer" }}>
      {status && <AiFillHeart color={color} size={size} onClick={toggle} />}
      {!status && <AiOutlineHeart color={color} size={size} onClick={toggle} />}
    </span>
  );
};

export default Like;
