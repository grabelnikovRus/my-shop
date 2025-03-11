"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { SearchProps } from "./types";
import Loupe from "./loupe.svg";
import cn from "classnames";

import s from "./Search.module.css";

export const Search = ({ className, transformOnFocus = true }: SearchProps) => {
  const [visible, setVisible] = useState(!transformOnFocus);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onClick={() => transformOnFocus && setVisible(true)}
      className={cn(s.root, className, { [s.visible]: visible })}
    >
      <Button className={s.loupe}>
        <Loupe />
      </Button>
      <input
        {...register("search")}
        placeholder="Поиск"
        className={s.input}
        onBlur={() => transformOnFocus && setVisible(false)}
      />
    </form>
  );
};
