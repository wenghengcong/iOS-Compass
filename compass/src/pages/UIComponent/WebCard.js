import React, {PureComponent} from "react";
import {
  Card,
  Avatar,
  Button,
  Divider,
  Typography,
} from "antd";
import MediaQuery from 'react-responsive';

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
    const hasLinkUrl = web.one_url ? true : ((web.sec_url) ? true : ((web.thi_url) ? true : false));
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
          <MediaQuery maxWidth={576}>
            {(matches) => {
              if (matches) {
                return <Paragraph ellipsis={{rows: 1}} className={styles.normalDesc}>
                  {web.description}
                </Paragraph>;
              } else {
                return <Paragraph ellipsis={{rows: 2}} className={styles.normalDesc}>
                  {web.description}
                </Paragraph>;
              }
            }}
          </MediaQuery>
          {/*<a className={styles.normalDesc}></a>*/}
        </Link>
      </div>
    }

    const hoverUI = function () {
      const linkButton = [];

      var countLinks = 0;
      if (web.one_url) {
        countLinks++;
      }
      if (web.sec_url) {
        countLinks++;
      }
      if (web.thi_url) {
        countLinks++;
      }


      var styleHoverButtonFirst = styles.hover3ButtonFirst;
      var styleHoverButtonSecond = styles.hover3ButtonFirst;
      var styleHoverButtonThird = styles.hover3ButtonFirst;

      if (countLinks == 1) {
        styleHoverButtonFirst = styles.hover1Button;
      } else if (countLinks == 2) {
        styleHoverButtonFirst = styles.hover2Button;
        styleHoverButtonSecond = styles.hover2Button;
      } else {
        styleHoverButtonFirst = styles.hover3Button;
        styleHoverButtonSecond = styles.hover3Button;
        styleHoverButtonThird = styles.hover3Button;
      }

      if (web.one_url) {
        const oneTitle = web.one_title ? web.one_title : "中文";
        linkButton.push(<Link key={web.one_url} to={web.one_url} target="_blank" onClick={(event) => {
            if (hover) {
              event.preventDefault();
              window.open(web.one_url);
            }
          }}>
            <Button key={web.one_url} className={styleHoverButtonFirst} type='primary'>{oneTitle}</Button>
          </Link>
        )
      }

      if (web.sec_url) {
        const secTitle = web.sec_title ? web.sec_title : "英文";
        linkButton.push(<Link key={web.sec_url} to={web.sec_url} target="_blank" onClick={(event) => {
          if (hover) {
            event.preventDefault();
            window.open(web.sec_url);
          }
        }}>
          <Button key={web.sec_url} className={styleHoverButtonSecond} type='primary'>{secTitle}</Button>
        </Link>)
      }


      if (web.thi_url) {
        const thiTitle = web.thi_title ? web.thi_title : "GitHub";
        linkButton.push(<Link key={web.thi_url} to={web.thi_url} target="_blank" onClick={(event) => {
          if (hover) {
            event.preventDefault();
            window.open(web.thi_url);
          }
        }}>
          <Button key={web.thi_url} className={styleHoverButtonThird} type='primary'>{thiTitle}</Button>
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
      <div>
        <Card
          hoverable
          size='small'
          onMouseEnter={this.toggleHoverEnter}
          onMouseLeave={this.toggleHoverLeave}
          // onMouseOut={this.toggleHoverLeave}
          // onMouseDown={this.toggleHoverLeave}
          className={styles.card}
        >
          {showUI}
        </Card>
      </div>
    );
  }

}

export default WebCard;
