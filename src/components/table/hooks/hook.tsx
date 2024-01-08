import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "../../../hooks/useQuery";
import { API } from "../../../server";
import { RootState } from "../../../store";
import { Header } from "../../../types/table";
import { counter, renderMonth, toDate } from "../../../utils/function";
import ActionCell from "../components/actionCell";
import LongText from "../components/longText";
// import { Checkbox } from "antd";
interface Props {
  api: {
    route: string;
  };
  sortAllData?: (data: any) => {};
}
export const useTable = ({ api, sortAllData }: Props) => {
  const [table, setTable] = useState<any>({
    data: [],
    meta: {
      last_page: 1,
      current_page: 1,
    },
  });
  const [loading, setLoading] = useState({ get: true, inner: false });
  const { getQueryParams, changeObj, searchParams, count, clear } = useQuery();
  const { deleted } = useSelector((state: RootState) => {
    return state.modalDelete;
  });
  const { depend } = useSelector((state: RootState) => {
    return state.tableReducer;
  });

  const render = (head: Header, row: any, id: number) => {
    switch (head.type) {
      case "date":
        return toDate(row[head.key]);
      case "operation":
        // return (
        //   <ActionCell headers={head.options ? head.options : []} row={row} />
        // );
        return;
      case "enum":
        return head.enum && head.enum[row[head.key]];
      case "month":
        return renderMonth(row[head.key]);
      case "longText":
        return <LongText text={row[head.key]} />;
      case "_idx":
        return counter({
          allData: table,
          _id: id,
          sortStatus: searchParams.get("orderby")
            ? searchParams.get("orderby")
            : "desc",
        });
      case "checkbox":
        // return (
        //   <Checkbox
        //     onClick={() => head.onClick && head.onClick(+row.id, row)}
        //   ></Checkbox>
        // );
        break;
      default:
        return row[head.key] || "ثبت نشده";
    }
  };
  const getData = async () => {
    try {
      setLoading({ ...loading, inner: true });
      const { data } = await API.get(api.route, {
        params: {
          perpage: 10,
          orderby: "desc",
          ...getQueryParams(window.location),
        },
      });
      if (typeof sortAllData == "function") {
        setTable(sortAllData(data.data));
      } else {
        setTable(data.data);
      }
      setLoading({ get: false, inner: false });
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [searchParams, depend]);

  return { loading, table, render, deleted, changeObj, count, clear };
};
