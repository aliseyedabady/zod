export interface InputProps {
  label?: string;
  props?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  error?: any;
  type?: "text" | "password" | "number";
  wrapperClassName?: string;
  optional?: boolean;
  readonly?: boolean;
  id?: string;
  onEnter?: () => void;
  placeholder?: string;
  icon?: React.ReactElement;
  className?: string;
  inputWrapperClassName?: string;
}
