import React from "react";
import { Header } from "../../../types/table";
import { useSearchParams } from "react-router-dom";
// import { ArrowDown, ArrowUp } from "tabler-icons-react";
import SelectHead from "./selectHead";
import SelectApiHead from "./SelectApiHead";
import { useQuery } from "../../../hooks/useQuery";
interface HeadCellProps {
  head: Header;
}
const HeadCell: React.FC<HeadCellProps> = ({ head }) => {
  const { searchParams, changeObj } = useQuery();
  const render = () => {
    switch (head.filterType) {
      case "input":
        return (
          <input
            onKeyDown={(x: React.KeyboardEvent<HTMLInputElement>) => {
              x?.key === "Enter" &&
                changeObj(
                  head.keyFilter || head.key,
                  x.currentTarget.value ? x.currentTarget.value : ""
                );
            }}
            defaultValue={searchParams
              .get(head.keyFilter || head.key)
              ?.toString()}
            className="border border-borderSidebar rounded-lg mt-2 py-2 px-4 max-w-[120px]"
          />
        );
      case "select":
        return <SelectHead head={head} />;
      case "selectApi":
        return <SelectApiHead head={head} />;
      case "sort":
        return (
          <div
            className="h-[42px] flex items-center justify-center mt-2 cursor-pointer"
            onClick={() => {
              if (
                !searchParams.get("orderby") ||
                searchParams.get("orderby") === "desc"
              ) {
                changeObj("orderby", "asc");
              } else {
                changeObj("orderby", "desc");
              }
            }}
          >
            {!searchParams.get("orderby") ||
            searchParams.get("orderby") === "desc" ? (
              <>{/* <ArrowUp size={"1rem"} /> */}</>
            ) : (
              <>{/* <ArrowDown size={"1rem"} /> */}</>
            )}
          </div>
        );
      default:
        return <div className="h-[42px] mt-2"></div>;
    }
  };
  return (
    <th className="font-semibold  ">
      <div className="flex flex-col">
        <p className="text-sm">{head.title}</p>
        {render()}
      </div>
    </th>
  );
};

export default HeadCell;
