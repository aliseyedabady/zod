import React from "react";

export interface MenuitemProps {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemProps[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
  accessKey?: string[];
}
