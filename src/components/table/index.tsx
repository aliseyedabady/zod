import React from "react";
import { TableProps } from "../../types/table";
// import TopCard from "../card/top";
// import CardWrapper from "../card/wrapper";
import Btn from "../form/button";
import Loader from "../loader";
import Pagination from "../pagination";
import DeleteModal from "./components/deleteModal";
import HeadCell from "./components/headCell";
import { useTable } from "./hooks/hook";
import "./style.scss";
const CustomTable: React.FC<TableProps> = ({
  headers,
  api,
  sort = (state, key) => state,
  sortAllData = state => state,
  minimal,
}) => {
  const handlePageChange = (page: number) => changeObj("page", page);

  const { loading, table, render, deleted, changeObj, count, clear } = useTable(
    {
      api,
      sortAllData,
    }
  );
  const tableComponent = (
    // table.data.length === 0
    <div className="w-full overflow-x-auto table-wrapper  p-6 ">
      <table className=" border-collapse card-wrapper-shadow rounded-[8px]">
        <thead>
          <tr>
            {headers.map((ele, key) => {
              return <HeadCell key={key} head={ele} />;
            })}
          </tr>
        </thead>
        {loading.inner ? (
          <tbody>
            <tr>
              <td colSpan={headers.length}>
                <Loader height={"50vh"} />
              </td>
            </tr>
          </tbody>
        ) : table.data.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan={headers.length}>
                {/* <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="اطلاعاتی یافت نشده"
                /> */}
                {count(window.location) > 0 && (
                  <div className="flex items-center justify-center">
                    <Btn
                      className="px-3 py-1 text-sm"
                      onClick={() => clear()}
                      text="حذف فیلتر ها"
                    />
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        ) : (
          <>
            <tbody>
              {table?.data?.map((row: any, id: number) => {
                if (!deleted.includes(+row.id)) {
                  return (
                    <tr key={id}>
                      {headers.map((head, key) => {
                        return (
                          <td className="text-sm" key={key}>
                            {render(head, sort(row, id), id)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                }
                return <></>;
              })}
            </tbody>
          </>
        )}
      </table>
    </div>
  );

  return (
    <>
      {/* {title && <TopCard title={title} />} */}

      {loading.get ? (
        <Loader height={"200px"} classNames="mt-8" />
      ) : minimal ? (
        tableComponent
      ) : (
        <>
          {tableComponent}
          <div className="flex justify-center items-center pb-2 pagination mt-2">
            <Pagination
              currentPage={table.meta.current_page}
              totalPages={table.meta.last_page}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}

      <DeleteModal />
    </>
  );
};

export default CustomTable;
