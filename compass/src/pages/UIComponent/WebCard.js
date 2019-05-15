import React, {PureComponent} from "react";
import {
  Card,
  Avatar,
  Button,
  Divider,
  Typography
} from "antd";
import {Ellipsis} from 'ant-design-pro';
import {BrowserRouter, Route, Link} from "react-router-dom";
import styles from './WebCard.less';

const {Title, Paragraph, Text} = Typography;

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

  toggleHoverEnter = () => {
    this.setState({hover: true})
  }

  toggleHoverLeave = () => {
    this.setState({hover: false})
  }

  render() {
    const web = this.props.web;
    const hover = this.state.hover;
    const hasLinkUrl = web.cn_url ? true : ((web.en_url) ? true : ((web.gb_url) ? true : false));
    // 只有有三个其中之一的外链，以及鼠标在上面时，才显示
    const showHoverUI = hover && hasLinkUrl;

    const normalUI = function () {
      return <div>
        <Link to={web.url} target="_blank" onClick={(event) => {
          event.preventDefault();
          window.open(web.url);
        }}>
          <Avatar className={styles.normalCardAvatar} src={web.avatar}/>
          <a className={styles.normalTitle}>{web.title}</a>
          <Divider className={styles.normalDivider}/>
          <Paragraph ellipsis={{rows: 2}} className={styles.normalDesc}>
            {web.description}
          </Paragraph>
          {/*<a className={styles.normalDesc}></a>*/}
        </Link>
      </div>
    }

    const hoverUI = function () {
      const linkButton = [];

      if (web.en_url) {
        const enTitle = web.en_title ? web.en_title : "英文";
        linkButton.push(<Link key={web.en_url} to={web.en_url} target="_blank" onClick={(event) => {
          if (hover) {
            event.preventDefault();
            window.open(web.en_url);
          }
        }}>
          <Button key={web.en_url} className={styles.hoverButton} type='primary'>{enTitle}</Button>
        </Link>)
      }

      if (web.cn_url) {
        const cnTitle = web.cn_title ? web.cn_title : "中文";
        linkButton.push(<Link key={web.cn_url} to={web.cn_url} target="_blank" onClick={(event) => {
            if (hover) {
              event.preventDefault();
              window.open(web.cn_url);
            }
          }}>
            <Button key={web.cn_url} className={styles.hoverButton} type='primary'>{cnTitle}</Button>
          </Link>
        )
      }

      if (web.gb_url) {
        const gbTitle = web.gb_title ? web.gb_title : "GitHub";
        linkButton.push(<Link key={web.gb_url} to={web.gb_url} target="_blank" onClick={(event) => {
          if (hover) {
            event.preventDefault();
            window.open(web.gb_url);
          }
        }}>
          <Button key={web.gb_url} className={styles.hoverButton} type='primary'>{gbTitle}</Button>
        </Link>)
      }

      return <div>
        <Link to={web.url} target="_blank" onClick={(event) => {
          event.preventDefault();
          window.open(web.url);
        }}>
          <Avatar className={styles.hoverCardAvatar} src={web.avatar}/>
          <a className={styles.hoverTitle}>{web.title}</a>
          {/*<a className={styles.desc}>{web.description}</a>*/}
          <Divider className={styles.hoverDivider}/>
        </Link>
        <span className={styles.hoverUrlContainer}>{linkButton}</span>
      </div>
    }

    var showUI = showHoverUI ? hoverUI() : normalUI();
    return (
      <div className={styles.card}>
        <Card
          hoverable
          size='small'
          onMouseEnter={this.toggleHoverEnter} onMouseLeave={this.toggleHoverLeave}
          className={styles.card}
        >
          {showUI}
        </Card>
      </div>
    );
  }

}

export default WebCard;
