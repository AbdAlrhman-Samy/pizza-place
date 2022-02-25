import Categories from "../Components/MenuPage/Categories";
import MenuList from "../Components/MenuPage/MenuList";

import { motion } from "framer-motion";

function Menu() {
  return (

    <motion.div
      key="menu"
      initial={{ x: 1000 }}
      exit={{ opacity: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.35, type: "spring" }}
      className="text-light relative min-h-screen py-32 px-5">

      <Categories />
      <MenuList />

    </motion.div>

  );
}

export default Menu;
