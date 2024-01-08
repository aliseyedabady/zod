export interface TableProps {
  title?: string;
  subTitle: string;
  headers: Header[];
  api: {
    route: string;
  };
  sort?: (data: any, key: number) => {};
  sortAllData?: (data: any) => {};
  add?: boolean | string;
  onClickAdd?: () => void;
  pdf?: boolean | string;
  minimal?: boolean;
  accessPdf?: string | string[];
  accessAdd?: string | string[];
  hero?: () => JSX.Element;
}
export interface Header {
  title: string;
  key: string;
  type?:
    | "date"
    | "operation"
    | "_idx"
    | "enum"
    | "month"
    | "longText"
    | "checkbox";
  options?: OptionHeader[];
  filterType?: "input" | "select" | "sort" | "selectApi";
  keyFilter?: string;
  selectOptions?: SelectOptions[];
  enum?: {
    [key: string]: string;
  };
  api?: {
    route: string;
    sort: (state: any) => {};
  };
  onClick?: (id: number, row: any) => void;
  checked?: boolean;
}
export interface OptionHeader {
  title: string;
  onClick?: (id: number | string, row: any) => void;
  type: "edit" | "delete" | "custom" | "link";
  route?: string;
  accessKey: string[] | string;
}
export interface SelectOptions {
  label: string;
  value: string;
}
