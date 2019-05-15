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

class WebTextCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const web = this.props.web;

    const showUI = <div>
      <Link to={web.url} target="_blank" onClick={(event) => {
        event.preventDefault();
        window.open(web.url);
      }}>
        <a className={styles.normalTitle}>{web.title}</a>
        <Divider className={styles.normalDivider}/>
        <Paragraph ellipsis={{rows: 2}} className={styles.normalDesc}>
          {web.description}
        </Paragraph>
        {/*<a className={styles.normalDesc}></a>*/}
      </Link>
    </div>

    return (
      <div className={styles.card}>
        <Card
          hoverable
          size='small'
          className={styles.card}
        >
          {showUI}
        </Card>
      </div>
    );
  }

}

export default WebTextCard;
