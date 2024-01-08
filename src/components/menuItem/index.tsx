import { Link } from "react-router-dom";
import { MenuItemProps } from "../../types/menuItem";

const MenuItem: React.FC<MenuItemProps> = ({ label, route }) => {
  return (
    <Link
      to={route}
      className="h-[34px] block mr-3 ml-[7px] border-l-[3px] border-l-[#E3E3E3]"
    >
      <p className="text-[#A2A5B9] text-sm ">{label}</p>
    </Link>
  );
};

export default MenuItem;
