export interface FormProps {
  title?: string;
  elements: RequiredIfSelect<FormElement>[];
  btn?: {
    text: string;
    card?: number | string;
    loading?: boolean;
  };
  api: {
    route: string;
    get?: string;
    update?: string;
    onSubmit?: (body: any) => void;
  };
  update?: boolean;
  sortUpdate?: (state: any) => object;
  sortGet?: (state: any) => object;
  cards?: Card[];
  onEnd?: (data?: any, body?: any) => void;
  accessUpdate?: string | string[];
  initial?: any;
  notSerialize?: boolean;
  subBtn?: () => JSX.Element;
}

export interface FormElement {
  label?: string;
  name: string;
  type:
    | "input"
    | "select"
    | "imageUploader"
    | "datePicker"
    | "selectApi"
    | "textarea"
    | "multiSelectApi"
    | "brDay"
    | "component"
    | "cardInput"
    | "fileUploader";
  inputType?: "text" | "number" | "password";
  col?: string;
  validation?: any;
  options?: Option[];
  wrapperClassName?: string;
  cardKey?: string;
  api?: {
    route: string;
    sort: (state: any) => {};
  };
  depend?: {
    key: string;
  };
  exists?: {
    keys: string[];
  };
  existIf?: {
    key: string;
    value: string;
  };
  allowClear?: boolean;
  onChange?: (e: any, watch?: any, setValue?: any) => void;
  readonly?: boolean;
  component?: (watch: any) => JSX.Element;
  classNames?: string;
}
export interface Card {
  title: string;
  key: string;
  disabled?: boolean;
}
export type RequiredIfSelect<T extends FormElement> = T["type"] extends "select"
  ? Required<Pick<T, "options">>
  : T;
export interface Option {
  value: string | number;
  label: string | number;
}
