import React, { FC, ReactNode } from "react";

export type ButtonWithChildrenProps = {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "light" | "dark";
};

export const ButtonWithChildren: FC<ButtonWithChildrenProps> = ({
  children,
  onClick,
  variant = "light",
}) => {
  return (
    <button className={variant} onClick={onClick}>
      {children}
    </button>
  );
};
