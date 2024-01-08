import { json } from "../../../json";
import { AreaProps } from "../../../types/panel";
import Menu from "../../menu";

const MenuSidebar = () => {
  const renderNested = (ele: AreaProps) =>
    ele.pages.map(ele => {
      return { label: ele.label, route: ele.route };
    });
  return (
    <div>
      <div className="h-[calc(100%-150px)] overflow-y-auto px-[1.5rem] ">
        {json.structure.areas.map((ele, key) => (
          <Menu
            key={key}
            label={ele.label || ""}
            icon={props => <ele.icon {...props} />}
            nested={renderNested(ele)}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSidebar;
