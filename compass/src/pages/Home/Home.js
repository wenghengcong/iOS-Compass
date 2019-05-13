import React, {Component} from 'react';

import {
  Button,
  Card,
  Icon,
  Menu,
  List,
  Layout,
} from 'antd';


import WebCard from '../UIComponent/WebCard';

import styles from './Home.less';

import categories from "../Data/category.json";
import websites from "../Data/websites.json";

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
    collapsed: false,
  }

  componentDidMount() {

    this.getWebSites();
  }

  getWebSites = () => {
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

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const commonCard = [];
    const categoryCard = [];

    const commonWebsites = this.state.commonSites;
    if (commonWebsites.length > 0) {
      commonCard.push(
        commonWebsites.map((item) => {
          return <WebCard web={item}> </WebCard>
        })
      );
    }

    const cateWebsites = this.state.categorySites;
    if (cateWebsites.length > 0) {
      categoryCard.push(
        cateWebsites.map((item) => {
          return <WebCard web={item}> </WebCard>
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


    return (
      <div>
        <Layout>
          <Sider className={styles.sider}
                 theme='dark'
                 width={150}
          >
            <Menu className={styles.menu} theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              {menus}
            </Menu>
          </Sider>
          <Layout className={styles.container} >
            {/*<Header>Header</Header>*/}
            <Content>
              <Card className={styles.backCard}>
                <div>分类</div>
                <List
                  grid={{
                    gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
                  }}
                  dataSource={cateWebsites}
                  size='small'
                  renderItem={item => (
                    <List.Item>
                      <WebCard web={item}> </WebCard>
                    </List.Item>
                  )}
                />
              </Card>
            </Content>
            <Footer style={{textAlign: 'center'}}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>

      </div>
    );
  }
}

export default Home;
