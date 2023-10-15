import { ReactNode } from "react";

export type NavLinkItem = {
  id: string;
  to: string;
  label: string | ReactNode;
  icon?: string
};
export type NavBarProps = {
  textItems?: NavLinkItem[];
  iconItems?: NavLinkItem[];
};