import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { API } from "../../../server";
// import { Select } from "antd";
interface Props {
  label?: string;
  error?: any;
  onChange: (op: any, allObj: any) => void;
  onBlur?: (op: any) => void;
  value: any;
  api: {
    route: string;
    sort: (state: any) => {};
  };
  depend?: {
    key: string;
  };
  optional?: boolean;
  dependValue?: any;
}

const MultiSelectApi = ({
  label,
  error,
  onChange,
  value,
  onBlur,
  api,
  depend,
  dependValue,
  optional,
}: Props) => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<any>([]);
  const getOptions = async () => {
    setLoading(true);
    const { data } = await API.get(api?.route || "", {
      params: depend
        ? {
            [depend.key]: dependValue(),
          }
        : {},
    });
    if (typeof api.sort === "function") {
      setOptions(api.sort(data.data));
    }
    setLoading(false);
  };
  useEffect(() => {
    if (depend) {
      if (dependValue()) {
        getOptions();
      }
    } else {
      getOptions();
    }
  }, [dependValue()]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <div className="flex flex-col ">
      <label className="text-sm	font-semibold mb-1 text-right">
        {label}

        {optional && (
          <span className="text-xs font-normal mx-1 text-primary">
            (اختیاری)
          </span>
        )}
      </label>
      {/* <Select
        mode="multiple"
        showSearch
        allowClear
        placeholder={"انتخاب کنید"}
        disabled={loading}
        notFoundContent={
          <div>
            <p className="text-center py-2">موردی یافت نشد</p>
          </div>
        }
        options={options}
        onChange={(e, allObj) => {
          onChange(e, allObj);
        }}
        value={value}
        onBlur={onBlur}
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

export default MultiSelectApi;
