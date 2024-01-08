import classNames from "classnames";
import { InputProps } from "../../../types/form/input";
import "./style.scss";
const Input: React.FC<InputProps> = ({
  label,
  icon,
  placeholder,
  className,
  inputWrapperClassName,
}) => {
  return (
    <div className={classNames("flex flex-col form-control", className)}>
      <label className="text-[#A5A5B9] mb-1">{label}</label>
      <div
        className={classNames(
          "input-wrapper clear-both border rounded-[0.65rem] flex items-center relative border-[#E3E3E3]",
          inputWrapperClassName
        )}
      >
        <div className="h-full w-[48px] flex items-center justify-center absolute right-0 top-0">
          {icon}
        </div>
        <input
          placeholder={placeholder}
          className=" bg-transparent h-[48px] flex-1  pr-[48px] text-[#747990]"
        />
      </div>
    </div>
  );
};

export default Input;
