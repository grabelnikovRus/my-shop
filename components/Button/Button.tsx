import { PropsWithChildren } from "react";
import { ButtonProps } from "./types";
import cn from "classnames";

import s from "./Button.module.css";

export const Button = ({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={cn(s.root, className)} {...props}>
      {children}
    </button>
  );
};
