import React, { useEffect, useState } from "react";
import { Header } from "../../../types/table";
// import { Select } from "antd";
import { API } from "../../../server";
import { useQuery } from "../../../hooks/useQuery";
interface Props {
  head: Header;
}
const SelectApiHead: React.FC<Props> = ({ head }) => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<any>([]);
  const { searchParams, changeObj } = useQuery();
  const getOptions = async () => {
    setLoading(true);
    const { data } = await API.get(head?.api?.route || "");
    if (typeof head?.api?.sort === "function") {
      setOptions(head.api.sort(data.data));
    }
    setLoading(false);
  };

  useEffect(() => {
    getOptions();
  }, []);
  return (
    <>
      {/* <Select
        showSearch
        allowClear
        className="mt-2 !h-[42px] !max-w-[120px]"
        placeholder={"انتخاب کنید"}
        disabled={loading}
        notFoundContent={
          <div>
            <p className="text-center py-2">موردی یافت نشد</p>
          </div>
        }
        options={options}
        onChange={value => changeObj(head.key, value)}
        value={
          options.filter(
            (ele: any) =>
              +ele.value ===
              (searchParams.get(head.key) !== null
                ? Number(searchParams.get(head.key))
                : "")
          )[0]
        }
      ></Select> */}
    </>
  );
};

export default SelectApiHead;
