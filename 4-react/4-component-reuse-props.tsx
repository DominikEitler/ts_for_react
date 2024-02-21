import React, { FC } from "react";
import {
  ButtonWithChildren,
  ButtonWithChildrenProps,
} from "./3-component-with-children";

type IconProps = {
  name: string;
  variant?: "light" | "dark";
};
const Icon: FC<IconProps> = ({ name, variant = "light" }) => {
  return <i className={`icon-${name} variant-${variant}`} />;
};

type IconButtonProps = Omit<ButtonWithChildrenProps, "children"> & {
  title: string;
  iconName: IconProps["name"];
};

export const IconButton: FC<IconButtonProps> = ({
  title,
  onClick,
  variant,
  iconName,
}) => {
  return (
    <ButtonWithChildren onClick={onClick} variant={variant}>
      <Icon name={iconName} variant={variant} />
      {title}
    </ButtonWithChildren>
  );
};
