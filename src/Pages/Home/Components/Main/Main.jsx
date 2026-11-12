import React from "react";
import Baner from "../Main/FirstPanel/Baner";
import PanelCategory from "../Main/FirstPanel/PanelCategory";
import Shiping from "./ShopingBox/ShipingHeader";
import Brand from "./BerandShoping/Brand";
import ShopSecend from "./ShopingSecend/ShopSecend";
import Weblog from "./Weblog/Weblog";
import Comments from "./Comments/Comments";
import { motion } from "motion/react";

function Main() {
  return (
    <>
      <Baner />
      <div className="p-5">
        <PanelCategory />
        <div>
          <Shiping />

          <Brand />
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ShopSecend />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Weblog />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Comments />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Main;
