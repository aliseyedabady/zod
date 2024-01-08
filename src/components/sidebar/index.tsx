import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleDrawer } from "../../features/theme";
import userIcon from "../../assets/images/user-1.jpg";
import Menu from "../menu";
const Sidebar = () => {
  const { drawer } = useSelector((state: RootState) => state.themeReducer);
  const variants = {
    open: { x: 0 },
    closed: { x: 280 },
  };
  const dispatch = useDispatch();
  const close = () => dispatch(toggleDrawer());
  return (
    <motion.div
      variants={variants}
      initial={{ x: 280 }}
      animate={drawer ? "open" : "closed"}
      className={
        "fixed top-0 bg-[#fff] border-l border-[#fff] h-screen right-0 overflow-hidden w-[280px]"
      }
    >
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
      <div className="h-[85px] flex items-center gap-2 mx-[1.5rem] ">
        <img className="w-[48px] h-[48px] rounded-full" src={userIcon} />
        <div>
          <p className="text-[#A2A5B9] text-xs">خوش آمدید</p>
          <p className="text-[#283252] font-semibold">علی سیدآبادی</p>
        </div>
      </div>
      <div className="h-[calc(100%-150px)] overflow-y-auto px-[1.5rem] ">
        {Array(200)
          .fill(1)
          .map(() => {
            return (
              <>
                <Menu />
              </>
            );
          })}
      </div>
    </motion.div>
  );
};

export default Sidebar;
