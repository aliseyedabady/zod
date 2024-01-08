export interface BtnProps {
  text: string;
  onClick?: () => void;
  className?: string;
  rightIcon?: () => React.ReactNode;
  leftIcon?: () => React.ReactNode;
  type?: "button" | "submit";
  loading?: boolean;
  variant?: "contained" | "outline";
}
