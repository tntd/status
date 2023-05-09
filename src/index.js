/*
 * @CreatDate: 2021-03-31 17:10:51
 * @Describe: 状态组件
 */

import './index.less';
import { useState } from 'react';

export default (props) => {
    const { text, color = '#5D7092', type = 'dot', iconPrefix, ...style } = props;

    let dom
    if (type === "dot") {
        //点
        dom = (
            <span className="lb-status" style={{ color, ...style }}>
                {iconPrefix ? iconPrefix : <b style={{ background: color }} />}
                {text}
            </span>
        );

    }
    if (type === 'ring') {
        // 环
        dom = (
            <span className="lb-status2">
                <span style={{ borderColor: color, ...style }}>
                    {iconPrefix ? iconPrefix : <i style={{ background: color }} />}
                </span>
                {text}
            </span>
        );
    }



    return text ? <div>
        {dom}
    </div> : '--';
};
