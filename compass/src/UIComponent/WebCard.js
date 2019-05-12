import React, { PureComponent } from "react";
import {
  Card,
  Avatar
} from "antd";

import styles from './WebCard.less';

class WebCard extends PureComponent {

  state = {
    url: "",                 // 必须：url
    style: 0,                // 必须：样式
    category: "",            // 必须：分类
    desc: "",                // 必须：描述
    logo: "",                // 必须：logo

    common: false,           // 是否常用
    recommend: false,        // 是否推荐
    badge: 0,                // 未读新闻
    language: [],            // 网站语言
    popular: 0,              // 欢迎程度，订阅该站点的数目
  }

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    const url = this.props.web.url;
    console.log(url);


    return (
      <Card bordered={true}>
        <Avatar shape="square" size="large" icon="user" />

      </Card>
    );
  }

}
export default WebCard;
