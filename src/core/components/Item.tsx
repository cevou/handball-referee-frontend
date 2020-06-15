import React, { FunctionComponent, ReactNode } from "react";

export interface ItemProps {
  code: string;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
  children: ReactNode;
}

const Item: FunctionComponent<ItemProps> = ({
  selected,
  children,
  onClick,
  className,
}) => (
  <li
    className={className}
    role="option"
    aria-selected={selected}
    onClick={onClick}
  >
    {children}
  </li>
);

export default Item;
