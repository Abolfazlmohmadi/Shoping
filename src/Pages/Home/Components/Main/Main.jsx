import React from "react";
import Baner from "../Main/FirstPanel/Baner";
import PanelCategory from "../Main/FirstPanel/PanelCategory";
import Shiping from "./ShopingBox/ShipingHeader";
import Brand from "./BerandShoping/Brand";
import ShopSecend from "./ShopingSecend/ShopSecend";
import Weblog from "./Weblog/Weblog";
import Comments from "./Comments/Comments";

function Main() {
  return (
    <>
      <Baner />
      <div className="p-5">
        <PanelCategory />
        <Shiping />
        <Brand />
        <ShopSecend />
        <Weblog />
        <Comments />
      </div>
    </>
  );
}

export default Main;
