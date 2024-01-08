import React from "react";

export interface route {
  component: React.FC<{ props: route }>;
  layout: React.FC<{ props: route; children: React.ReactNode }>;
  path: string;
  user: boolean;
  children?: React.ReactNode;
  accessKey?: string | string[];
}
