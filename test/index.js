
import { useState } from "react";
import Status from "../src/index";
import ReactDOM from "react-dom";
import { Select, Tooltip } from "antd";
import img from "./img";
const Option = Select.Option;

const Demo = (props) => {
  return (
    <div>
      <div>
        <Status text={`待发布`} color="#126BFB" type="dot" />
      </div>
      <div>
        <Status text={`发布`} iconPrefix={<img src={img}></img>} />
      </div>
      <div>
        <Status text={`执行失败：${300}`} color="#EF6555" type="ring" />
      </div>
    </div>
  );
};



ReactDOM.render(<Demo />, document.getElementById("app"));
