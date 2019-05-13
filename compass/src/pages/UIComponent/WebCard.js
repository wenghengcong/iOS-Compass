import React, {PureComponent} from "react";
import {
  Card,
  Avatar
} from "antd";
import {Ellipsis} from 'ant-design-pro';

import styles from './WebCard.less';

class WebCard extends PureComponent {

  state = {
    title: '',
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

  gotoWeb = (url) => {

  }

  render() {
    const web = this.props.web;

    return (
      <div>
        {/*<Card hoverable size='small' className={styles.card}*/}
        {/*type='inner'*/}
        {/*>*/}
        {/*  <Card.Meta*/}
        {/*    avatar={<img alt="" className={styles.cardAvatar}*/}
        {/*                 src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>}*/}
        {/*    title={<a className={styles.title} href={web.url} target="_blank" rel="noopener noreferrer">{web.title}</a>}*/}
        {/*    description={*/}
        {/*      <Ellipsis className={styles.item} lines={3}>*/}
        {/*        {web.description}*/}
        {/*      </Ellipsis>*/}
        {/*    }*/}
        {/*  />*/}
        {/*</Card>*/}
        <Card hoverable size='small' className={styles.card}>
          <Avatar className={styles.cardAvatar} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <a className={styles.title} href={web.url} target="_blank" rel="noopener noreferrer">{web.title}</a>
          <a className={styles.desc}>{web.description}</a>
        </Card>
      </div>
    )
      ;
  }

}

export default WebCard;
