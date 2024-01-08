import { FormElement } from "../form";
import { Header } from "../table";

export interface PanelProps {
  structure: { areas: AreaProps[] };
}
export interface AreaProps {
  label: string;
  icon: React.ReactNode;
  route?: string;
  nested: boolean;
  pages: PageProps[];
}
export interface PageProps {
  route: string;
  type: "dashboard" | "form" | "edit" | "table" | "surface";
  show: boolean;
  title: string;
  label: string;
  api?: {
    route: string;
    get?: string;
    update?: string;
    onSubmit?: (body: any) => void;
    sortUpdate?: (state: any) => object;
    sortGet?: (state: any) => object;
    sort?: (data: any, key: number) => {};
    sortAllData?: (data: any) => {};
  };
  elements?: FormElement[];
  headers?: Header[];
  btn?: {
    text: string;
    card?: number | string;
    loading?: boolean;
  };
}
