import React from "react";
import { motion } from "framer-motion";
// import { Select } from "antd";
interface Props {
  label?: string;
  options: Option[];
  error?: any;
  onChange: (op: any) => void;
  onBlur?: (op: any) => void;
  optional?: boolean;
  value: any;
  allowClear?: boolean;
  readonly?: boolean;
}
export interface Option {
  value: string | number;
  label: string | number;
}

const CustomSelect = ({
  label,
  options,
  error,
  onChange,
  value,
  onBlur,
  optional,
  allowClear = true,
  readonly,
}: Props) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <div className="flex flex-col ">
      {label ? (
        <>
          <label className="text-sm	font-semibold mb-1 text-right">
            {label}
            {optional && (
              <span className="text-xs font-normal mx-1 text-primary">
                (اختیاری)
              </span>
            )}
          </label>
        </>
      ) : (
        <></>
      )}
      {/* <Select
        placeholder={"انتخاب کنید"}
        // className="border-borderSidebar border rounded-lg	px-4 py-3"
        showSearch
        allowClear={allowClear}
        options={options}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        disabled={readonly}
        optionFilterProp="label"
        notFoundContent={
          <div>
            <p className="text-center py-2">موردی یافت نشد</p>
          </div>
        }
      ></Select> */}
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

export default CustomSelect;
