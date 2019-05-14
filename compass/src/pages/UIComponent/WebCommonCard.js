import React, {PureComponent} from "react";
import {
  Card,
  Avatar,
} from "antd";
import styles from "./WebCommonCard.less";
import {Link} from "react-router-dom";


/*
* 常用访问的站点
* */
class WebCommonCard extends PureComponent {
  state = {
    hover: false,
    clickUrl: false,
  }

  constructor(props) {
    super(props);

  }

  render() {

    const web = this.props.web;

    return (
      <div>
        <Link to={web.url} target="_blank" onClick={(event) => {
          event.preventDefault();
          window.open(web.url);
        }}>
          <Avatar
            className={styles.avatar}
            size={60}
            src={web.avatar} />
        </Link>
      </div>
    );
  }
}

export default WebCommonCard;
