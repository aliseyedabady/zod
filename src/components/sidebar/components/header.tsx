import { useDispatch } from "react-redux";
import { toggleDrawer } from "../../../features/theme";

const HeaderSidebar = () => {
  const dispatch = useDispatch();

  const close = () => dispatch(toggleDrawer());

  return (
    <div className="flex items-center justify-between mx-[1.5rem] ">
      <h4 className="font-bold text-[2rem] text-[#283252]">پنل علی</h4>
      <button onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-narrow-right"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M15 16l4 -4" />
          <path d="M15 8l4 4" />
        </svg>
      </button>
    </div>
  );
};

export default HeaderSidebar;
