import { AreaProps } from "../types/panel";
import { FaUser } from "react-icons/fa";

export const user: AreaProps = {
  icon: FaUser,
  label: "کاربران",
  nested: false,

  pages: [
    {
      route: "/",
      title: "کاربران",
      label: "ایجاد کاربر",
      show: true,
      type: "form",
      elements: [
        {
          name: "ایجاد ",
          type: "input",
        },
      ],
    },
    {
      route: "/",
      title: "کاربران",
      label: "لیست کاربران",
      show: true,
      type: "form",
      elements: [
        {
          name: "ایجاد ",
          type: "input",
        },
      ],
    },
  ],
};
