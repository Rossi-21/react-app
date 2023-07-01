import React from "react";

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button type="button" className={"mt-5 btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
