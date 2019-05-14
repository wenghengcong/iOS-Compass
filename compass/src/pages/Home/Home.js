import React, {Component} from 'react';

import {
  Button,
  Card,
  Icon,
  Menu,
  List,
  Layout,
  Anchor,
  Row,
  Col,
} from 'antd';


import WebCard from '../UIComponent/WebCard';
import WebCommonCard from '../UIComponent/WebCommonCard';

import styles from './Home.less';

//import websites from "%PUBLIC_URL%/data/websites.json";
//import {Link, withRouter} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const {
  Header, Footer, Sider, Content,
} = Layout;


class Home extends Component {

  state = {
    allWebsite: [],     // 所有网站
    allCategory: [],    // 分类
    commonSites: [],     // 常用网站
    categorySites: [],   // 分类网站

  }

  componentDidMount() {
    const catURL =  process.env.PUBLIC_URL + '/data/category.json';
    fetch(catURL)
    // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error =>
        this.setState({ error, isLoading: false })
      );
    this.getWebSites();
  }

  getWebSites = () => {
    //test
    const websites = [];
    const categories = [];

    const all = websites;
    const common = all.filter((web) => web.common === true);
    const cate = all.filter((web) => web.common !== true);

    this.setState({
      allWebsite: websites,
      allCategory: categories,
      commonSites: common,
      categorySites: cate,
    });
  }

  handleClickMenu = ({item, key, keyPath}) => {
    console.log('click', item);
    this.scrollToAnchor(key);
  }

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if(anchorElement) { anchorElement.scrollIntoView(); }
    }
  }

  render() {

    const commonWebsites = this.state.commonSites;
    const commonWebCard = [];

    if (commonWebsites.length > 0) {
      commonWebCard.push(
        commonWebsites.map( (item) => {
          return <WebCommonCard web={item}> </WebCommonCard>
        })
      );
    }

    const menus = [];
    const allCategory = this.state.allCategory;
    if (allCategory.length > 0) {
      menus.push(
        allCategory.map((item) => {
          return <Menu.Item key={item.name}>
            <Icon type={item.icon}/>
            <span className="nav-text">{item.name}</span>
          </Menu.Item>
        })
      );
    }

    const categoryCards = [];
    const cateWebsites = this.state.categorySites;
    if (cateWebsites.length > 0) {
      allCategory.map((item) => {

        const currentCateWebs = cateWebsites.filter(web => web.category === item.name);
        const currentCateCard = <div id={item.name}>
          <Card
            title={item.name}
            className={styles.categoryCard}
          >
            <List
              grid={{
                gutter: '10px', xs: 1, sm: 2, md: 4, lg: 4, xl: 5, xxl: 6,
              }}
              dataSource={currentCateWebs}
              size='small'
              renderItem={item => (
                <List.Item>
                  <WebCard web={item}> </WebCard>
                </List.Item>
              )}
            />
          </Card>
        </div>
        if (item.name !=='常用') {
          categoryCards.push(currentCateCard);
        }
      });
    }

    return (
      <div>
        <Layout>
          <Sider className={styles.sider}
                 theme='dark'
                 width={150}
          >
            <Menu className={styles.menu}
                  theme="dark"
                  mode="inline"
              // defaultSelectedKeys={['4']}
                  onClick={this.handleClickMenu}
            >
              {menus}
            </Menu>
          </Sider>
          <Layout className={styles.cotainer}>
            {/*<Header>Header</Header>*/}
            <Content
              className={styles.webContainer}
            >
              <div id='常用' className={styles.commonContainer}>
                  {commonWebCard}
              </div>
                {categoryCards}
            </Content>
            <Footer style={{textAlign: 'center'}}>
              Luci Design ©2019 Created by WengHengcong
            </Footer>
          </Layout>
        </Layout>

      </div>
    );
  }
}

export default Home;
