import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { API } from "../../../server";
interface Props {
  label?: string;
  error?: any;
  onChange: (op: any, v: any) => void;
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
  allowClear?: boolean;
  dependValue?: any;
  readonly?: boolean;
  onEnter?: () => void;
  id?: string;
}

const SelectApi = ({
  label,
  error,
  onChange,
  value,
  onBlur,
  api,
  depend,
  dependValue = () => {},
  optional,
  allowClear = true,
  readonly,
  onEnter,
  id,
}: Props) => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<any>([]);
  const getOptions = async () => {
    setLoading(true);
    const { data } = await API.get(
      api?.route.replace(":id", dependValue()) || "",
      {
        params: depend
          ? {
              [depend.key]: dependValue(),
            }
          : {},
      }
    );
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
      {label && (
        <label className="text-sm	font-semibold mb-1 text-right">
          {label}

          {optional && (
            <span className="text-xs font-normal mx-1 text-primary">
              (اختیاری)
            </span>
          )}
        </label>
      )}
      {/* 
      <Select
        id={id}
        showSearch
        allowClear={allowClear}
        placeholder={"انتخاب کنید"}
        disabled={loading || readonly}
        notFoundContent={
          <div>
            <p className="text-center py-2">موردی یافت نشد</p>
          </div>
        }
        options={options}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        optionFilterProp="label"
        onKeyDown={e => {
          if (e.code === "Enter" && onEnter) {
            onEnter();
          }
        }}
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

export default SelectApi;
