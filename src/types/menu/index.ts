import { MenuItemProps } from "../menuItem";

export interface MenuProps {
  label: string;
  icon: (props: any) => JSX.Element;
  nested: MenuItemProps[];
}
