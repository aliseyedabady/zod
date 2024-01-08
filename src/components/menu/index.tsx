import classNames from "classnames";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import MenuItem from "../menuItem";
import { motion } from "framer-motion";

const Menu = () => {
  const [active, setActive] = useState<boolean>(false);
  const btnHandler = () => setActive(!active);
  const variants = {
    open: {
      height: "auto",
    },
    close: {
      height: 0,
    },
  };
  const variantsIcon = {
    open: {
      rotateZ: 180,
    },
    close: {
      rotateZ: 0,
    },
  };
  return (
    <div className="min-h-[55px]">
      <button
        onClick={btnHandler}
        className="flex items-center w-full h-[55px]"
      >
        <RxDashboard className={classNames({ "text-[#6B10C6]": active })} />
        <p
          className={classNames("mr-[0.75rem]", {
            "text-[#747990]": !active,
            "text-[#283252]": active,
          })}
        >
          داشبورد
        </p>
        <motion.svg
          animate={active ? "open" : "close"}
          variants={variantsIcon}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          data-icon="feather:chevron-down"
          className="mr-auto"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m6 9l6 6l6-6"
          ></path>
        </motion.svg>
      </button>
      <motion.div
        variants={variants}
        animate={active ? "open" : "close"}
        className="overflow-hidden"
        initial={{ height: 0 }}
      >
        {Array(7)
          .fill(1)
          .map(() => (
            <MenuItem />
          ))}
      </motion.div>
    </div>
  );
};

export default Menu;
