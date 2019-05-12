import React, {Component} from 'react';

import {
  Button,
  Card,
  Icon,
} from 'antd';

import WebCard from '../UIComponent/WebCard';

import logo from '../logo.svg';
import styles from './Home.less';

class Home extends Component {

  state = {
    allWebsite: [],     // 所有网站
    allCategory: [],    // 分类
    commonSites:[],     // 常用网站
    categorySites:[],   // 分类网站
  }

  componentDidMount() {

    this.getWebSites();
  }

  getWebSites = () => {

    fetch('../data/category.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const json = JSON.parse(data);
        this.setState({
          allCategory: json
        });
        this.handleCategories();
      })
      .catch((e) => {
        console.log(e.message);
      });

    fetch('../data/website.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const json = JSON.parse(data);
        this.setState({
          allWebsite: json
        });
        this.handleWebSites();
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  handleWebSites = () => {
    const all = this.state.allWebsite;
    const common = all.filter((web) => web.common === true);
    const cate = all.filter((web) => web.common !== true);
    this.setState({
      commonSites: common,
      categorySites: cate,
    })
  }

  handleCategories = () => {

  }

  render() {

    const commonCard = [];
    const categoryCard = [];

    const commonWebsites = this.state.commonSites;
    if (commonWebsites.length > 0) {
      commonCard.push(
        commonWebsites.map((item) => {
          return <WebCard web={item}/>
        })
      );
    }

    return (
      <Card>
        {commonWebsites}
        <Button type="primary">Button</Button>
      </Card>
    );
  }
}

export default Home;
