"use client";
import { useForm } from "react-hook-form";
import { FooterProps } from "./types";
import { Notification, Input } from "@/components/";
import Ok from "./ok.svg";
import cn from "classnames";

import s from "./FooterForm.module.css";

interface DataType {
  email: string;
}

const validateEmail = (e: string) => {
  if (e === "") return "Введите email";

  if (e.length < 3) return "Введите больше трех символов";

  if (!e.match(/@{1}/i)) return "email должен содержать символ @";

  return true;
};

export const FooterForm = ({ className }: FooterProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<DataType>();

  const onSubmit = (data: DataType) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cn(s.root, className)}>
        <Input
          {...register("email", { validate: validateEmail })}
          error={errors.email}
          placeholder="Ваш email для акций и предложений"
          nameIcon="arrow"
        />
      </form>
      <Notification
        isOpen={isSubmitSuccessful}
        icon={<Ok className={s.icon} />}
        message="Ваш email подписан на новости и уведомления"
      />
    </>
  );
};
