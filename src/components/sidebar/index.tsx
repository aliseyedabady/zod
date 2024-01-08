import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import HeaderSidebar from "./components/header";
import MenuAccountSidebar from "./components/menuAccount";
import MenuSidebar from "./components/menu";
const Sidebar = () => {
  const { drawer } = useSelector((state: RootState) => state.themeReducer);
  const variants = {
    open: { x: 0 },
    closed: { x: 280 },
  };

  return (
    <motion.div
      variants={variants}
      initial={{ x: 280 }}
      animate={drawer ? "open" : "closed"}
      className={
        "fixed top-0 bg-[#fff] border-l border-[#fff] h-screen right-0 overflow-hidden w-[280px]"
      }
    >
      <HeaderSidebar />
      <MenuAccountSidebar />
      <MenuSidebar />
    </motion.div>
  );
};

export default Sidebar;
