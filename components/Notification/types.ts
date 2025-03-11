import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface NotificationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  ms?: number;
  icon?: ReactNode;
  message?: string;
}
