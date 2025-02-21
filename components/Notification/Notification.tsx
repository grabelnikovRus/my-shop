"use client";
import { useEffect, useState } from "react";
import { NotificationProps } from "./types";
import cn from "classnames";
import s from "./Notification.module.css";

export const Notification = ({
  isOpen,
  ms = 6000,
  icon,
  message,
  className,
  ...props
}: NotificationProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log(isOpen);
    if (isOpen) {
      setVisible(true);
      setTimeout(() => setVisible(false), ms);
    }
  }, [isOpen, ms]);

  return (
    <div className={cn(s.root, className, { [s.open]: visible })} {...props}>
      {icon && icon}
      {message && message}
    </div>
  );
};
