import { useDispatch, useSelector } from "react-redux";
import userIcon from "../../assets/images/user-1.jpg";
import { toggleDrawer } from "../../features/theme";
import { RootState } from "../../store";
import Input from "../form/input";
const Navbar = () => {
  const dispatch = useDispatch();
  const { drawer } = useSelector((state: RootState) => state.themeReducer);

  return (
    <div>
      <nav className="px-[3rem] flex h-[60px] items-center">
        {!drawer && (
          <button onClick={() => dispatch(toggleDrawer())}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
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
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>
        )}
        <Input
          placeholder="جستجو"
          className="mr-1"
          inputWrapperClassName="!h-10 bg-white"
          icon={
            <svg
              className="w-[18px] h-[18px] text-[#CFCFCF] icon icon-tabler icon-tabler-menu-2"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              data-icon="feather:search"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21l-4.35-4.35"></path>
              </g>
            </svg>
          }
        />
        <div className="mr-auto flex items-center">
          <img src={userIcon} className="w-10 h-10 rounded-full" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
