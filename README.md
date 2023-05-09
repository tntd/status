# 4.x 版本基于 tntd2.x

## 安装

```bash
npm i @tntd/status
```

## props 参数：

|    参数    |    类型     | 默认值 | 是否必填 |   说明    |
| :--------: | :---------: | :----: | :------: | :-------: |
|    type    | function(e) |  ring  |  非必填  | 样式类型  |
| iconPrefix |  ReactNode  |   -    |  非必填  | 前置 icon |
|    text    |   string    |   -    |   必填   |   文字    |

## 示例

```javascript
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
```
