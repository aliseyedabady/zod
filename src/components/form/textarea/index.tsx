import React from "react";
import { InputProps } from "../../../types/form/input";
import { motion } from "framer-motion";
import { TextAreaProps } from "../../../types/form/textarea";
const TextArea = ({
  label,
  props,
  error,
  wrapperClassName = "",
  optional,
}: TextAreaProps) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <div className={`flex flex-col ${wrapperClassName} `}>
      {label ? (
        <>
          <label className="text-sm	font-semibold mb-1 text-right">
            {label}
            {optional && (
              <span className="text-xs font-normal mx-1 !text-primary">
                (اختیاری)
              </span>
            )}
          </label>
        </>
      ) : (
        <></>
      )}

      <textarea
        rows={5}
        {...props}
        className={`${
          error?.message ? "!border-red" : "border-borderSidebar"
        } border rounded-lg	px-4 py-3`}
      ></textarea>
      <motion.p
        animate={error ? "open" : "closed"}
        variants={variants}
        className="text-red text-xs mt-2"
      >
        {error?.message}
      </motion.p>
    </div>
  );
};

export default TextArea;
