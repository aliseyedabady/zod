import React from "react";

export interface CardWrapperProps {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  classNames?: string;
}
