import { Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/main";
import { PageProps, PanelProps } from "../../types/panel";
import CustomTable from "../table";
import CustomForm from "../form";

const Panel: React.FC<PanelProps> = ({ structure }) => {
  const renderRoute = (option: PageProps) => {
    switch (option.type) {
      case "form":
      case "edit":
        return (
          <Route
            path={option.route}
            element={
              <MainLayout>
                <CustomForm
                  api={{
                    route: option.api?.route || "",
                    get: option.api?.get,
                    onSubmit: option.api?.onSubmit,
                    update: option.api?.update,
                  }}
                  elements={option.elements || []}
                  update={option.type === "edit" ? true : false}
                  btn={option.btn}
                  title={option.title}
                />
              </MainLayout>
            }
          />
        );

      case "table":
        return (
          <Route
            path={option.route}
            element={
              <MainLayout>
                <CustomTable
                  api={{
                    route: option.api?.route || "",
                  }}
                  headers={option.headers || []}
                  title={option.title}
                  sort={option.api?.sort}
                  sortAllData={option.api?.sortAllData}
                />
              </MainLayout>
            }
          />
        );
      // case "dashboard":
      //   return (
      //     <Route
      //       path={option.route}
      //       element={
      //         <MainLayout>
      //           <Dashboard />
      //         </MainLayout>
      //       }
      //     />
      //   );
      // case "ticketing":
      //   return (
      //     <Route
      //       path={option.route}
      //       element={
      //         <MainLayout>
      //           <Support />
      //         </MainLayout>
      //       }
      //     />
      //   );
      // case "surface":
      //   return (
      //     <Route
      //       path={option.route}
      //       element={
      //         <MainLayout>
      //           <Surfaces option={option} />
      //         </MainLayout>
      //       }
      //     />
      //   );

      default:
        break;
    }
  };
  return (
    <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
      {structure &&
        structure?.areas.map(page => {
          return page?.pages.map(page => {
            if (page) {
              return renderRoute(page);
            }
            return <></>;
          });
        })}
    </Routes>
  );
};

export default Panel;
