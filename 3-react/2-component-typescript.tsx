import React, { FC } from "react";

type ButtonProps = {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "light" | "dark";
};

export const Button: FC<ButtonProps> = ({
  title,
  onClick,
  variant = "light",
}) => {
  return (
    <button className={variant} onClick={onClick}>
      {title}
    </button>
  );
};
