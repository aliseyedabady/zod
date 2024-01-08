import userIcon from "../../../assets/images/user-1.jpg";

const MenuAccountSidebar = () => {
  return (
    <div className="h-[85px] flex items-center gap-2 mx-[1.5rem] ">
      <img alt="" className="w-[48px] h-[48px] rounded-full" src={userIcon} />
      <div>
        <p className="text-[#A2A5B9] text-xs">خوش آمدید</p>
        <p className="text-[#283252] font-semibold">علی سیدآبادی</p>
      </div>
    </div>
  );
};

export default MenuAccountSidebar;
