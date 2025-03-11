import { InputProps } from "./types";
import Arrow from "./arrow.svg";
import cn from "classnames";

import s from "./Input.module.css";
import { Button } from "../Button/Button";

const getIcon = (name: string) => {
  switch (name) {
    case "arrow":
      return <Arrow />;
    default:
      return null;
  }
};

export const Input = ({
  label,
  nameIcon,
  classes,
  error,
  ...props
}: InputProps) => {
  return (
    <label className={cn(s.root, classes?.root)}>
      <span className={s.label}>{label}</span>
      <input {...props} className={cn(s.input, classes?.input)} />
      {nameIcon && (
        <Button className={s.btn} type="submit">
          {getIcon(nameIcon)}
        </Button>
      )}
      {error && <span className={s.error}>{error.message}</span>}
    </label>
  );
};
