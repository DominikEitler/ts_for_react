import React, { FC } from "react";

type IconProps = {
  name: string;
  variant?: "light" | "dark";
};
const Icon: FC<IconProps> = ({ name, variant = "light" }) => {
  return <i className={`icon-${name} variant-${variant}`} />;
};

type IconButtonProps = {
  title: string;
  onClick: () => void;
  iconName: IconProps["name"];
  iconVariant?: IconProps["variant"];
};

export const IconButton: FC<IconButtonProps> = ({
  title,
  onClick,
  iconName,
  iconVariant
}) => {
  return (
    <button onClick={onClick} >
      <Icon name={iconName} variant={iconVariant} />
      {title}
    </button>
  );
};
