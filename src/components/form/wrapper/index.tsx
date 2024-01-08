import React from "react";
import { isExists } from "../../../utils/function";
interface Props {
  col?: string;
  classNames?: string;
  children: React.ReactNode;
  exists?: {
    keys: string[];
  };
  watch?: any;
  existIf?: {
    key: string;
    value: string;
  };
}
const Wrapper = ({
  col = "col-span-12 md:col-span-3",
  classNames = "",
  children,
  exists,
  watch,
  existIf,
}: Props) => {
  let result = <div className={`${col} ${classNames}`}>{children}</div>;
  if (exists) {
    if (isExists(watch, exists.keys)) {
      return result;
    }
    return <></>;
  } else if (existIf) {
    if (watch(existIf.key) === existIf.value) {
      return result;
    } else {
      return <></>;
    }
  } else {
    return result;
  }
};

export default Wrapper;
