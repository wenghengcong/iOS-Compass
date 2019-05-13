import React, {PureComponent} from "react";
import {
  Card,
  Avatar,
  Button,
} from "antd";
import {Ellipsis} from 'ant-design-pro';
import {BrowserRouter, Route, Link} from "react-router-dom";
import styles from './WebCard.less';

/*
web title: '',
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
 */
class WebCard extends PureComponent {

  state = {
    hover: false,
    clickUrl: false,
  }

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  gotoWeb = (web) => {

  }

  toggleHoverEnter = () => {
    this.setState({hover: true})
  }

  toggleHoverLeave = () => {
    this.setState({hover: false})
  }

  render() {
    const web = this.props.web;
    const hover = this.state.hover;
    const normalUI = function () {
      return <div>
        <Link to={web.url} target="_blank" onClick={(event) => {
          event.preventDefault();
          window.open(web.url);
        }}>
          <Avatar className={styles.cardAvatar} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
          <a className={styles.title}>{web.title}</a>
          <a className={styles.desc}>{web.description}</a>
        </Link>
      </div>
    }

    const hoverUI = function () {
      const linkButton = [];
      if (web.en_url) {
        linkButton.push(<Link key={web.cn_url} to={web.cn_url} target="_blank" onClick={(event) => {
            if (hover) {
              event.preventDefault();
              window.open(web.cn_url);
            }
          }}>
            <Button key={web.cn_url} className={styles.hoverUrlButton} type='primary'>中文</Button>
          </Link>
        )
      }

      if (web.en_url) {
        linkButton.push(<Link key={web.en_url} to={web.en_url} target="_blank" onClick={(event) => {
          if (hover) {
            event.preventDefault();
            window.open(web.en_url);
          }
        }}>
          <Button key={web.en_url} className={styles.hoverUrlButton} type='primary'>英文</Button>
        </Link>)
      }

      if (web.gb_url) {
        linkButton.push(<Link key={web.gb_url} to={web.gb_url} target="_blank" onClick={(event) => {
          if (hover) {
            event.preventDefault();
            window.open(web.gb_url);
          }
        }}>
          <Button key={web.gb_url} className={styles.hoverUrlButton} type='primary'>GitHub</Button>
        </Link>)
      }

      return <div>
        <Link to={web.url} target="_blank" onClick={(event) => {
          event.preventDefault();
          window.open(web.url);
        }}>
          <Avatar className={styles.cardAvatar} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
          <a className={styles.title}>{web.title}</a>
        </Link>
        <span className={styles.hoverUrlContainer}>{linkButton}</span>
      </div>
    }

    var showUI = hover ? hoverUI() : normalUI();
    return (
      <div>
        <Card
          hoverable
          size='small'
          onMouseEnter={this.toggleHoverEnter} onMouseLeave={this.toggleHoverLeave}
          className={styles.card}
        >
          {showUI}
        </Card>
      </div>
    )
      ;
  }

}

export default WebCard;
