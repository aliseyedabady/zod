import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { RootState } from "../store/index";
import { MainLayoutProps } from "../types/layouts/main";
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { drawer } = useSelector((state: RootState) => state.themeReducer);

  const variants = {
    open: { marginRight: window.innerWidth < 1025 ? 0 : 280 },
    closed: { marginRight: 0 },
  };
  return (
    <div className="bg-[#EBEEF4] min-h-screen ">
      <Sidebar />
      <motion.div
        animate={drawer ? "open" : "closed"}
        className={"mr-auto"}
        variants={variants}
      >
        <Navbar />

        <div className="px-[3rem]">{children}</div>
      </motion.div>
    </div>
  );
};

export default MainLayout;
