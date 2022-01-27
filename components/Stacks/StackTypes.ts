import { SVGProps } from "react";

export const TOPMENU = 'TOPMENU';
export const SIDEMENU = 'SIDEMENU';

export type Menu = {
  id: string;
  items: MenuItem[]
}
export type MenuItem = {
    current?: boolean;
    href: string;
    description?: string;
    name: string;
    icon: any | JSX.Element | SVGProps<SVGAElement>;
}
export type StackMenus = Menu[];