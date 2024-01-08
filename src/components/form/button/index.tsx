import classNames from "classnames";
import { BtnProps } from "../../../types/form/btn";
import "./style.scss";
const Button: React.FC<BtnProps> = ({ text, className, loading }) => {
  return (
    <button
      className={classNames(
        "flex items-center justify-center gap-2 w-full bg-[#6B10C6] disabled:bg-[#B78AE3] rounded-xl h-[48px] text-white",
        className
      )}
      disabled={loading}
    >
      {loading && (
        <>
          <span className="loader" />
        </>
      )}
      {text}
    </button>
  );
};

export default Button;
