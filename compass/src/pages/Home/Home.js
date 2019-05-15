import React, {Component} from 'react';

import {
  Card,
  Icon,
  Menu,
  List,
  Layout,
} from 'antd';


import WebCard from '../UIComponent/WebCard';
import WebCommonCard from '../UIComponent/WebCommonCard';

import styles from './Home.less';

const webURL = 'https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/websites.json';
const catURL = 'https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/category.json';

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
    isLoading: false,
  }

  componentDidMount() {

    const _this = this;
    fetch(catURL)
      .then(response => response.json())
      .then(function (data) {
        _this.handleCategory(data);
      })
      .catch(error =>
        this.setState({error, isLoading: false})
      );

    fetch(webURL)
      .then(response => response.json())
      .then(function (data) {
        _this.handleWebSites(data);
      })
      .catch(error =>
        this.setState({error, isLoading: false})
      );
  }

  handleWebSites = (allWebsite) => {
    this.setState({
      allWebsite: allWebsite,
    });
    const all = allWebsite;
    const common = all.filter((web) => web.common === true);
    const cate = all.filter((web) => web.common !== true);

    this.setState({
      commonSites: common,
      categorySites: cate,
    });
  }

  handleCategory = (allCategory) => {
    if (allCategory != undefined && allCategory != null) {
      const combineCateAndChild = allCategory;
      for (let i = 0; i < allCategory.length; i++) {
          const cate = allCategory[i];
          if (cate.children) {
            const childrenNames = cate.children.map( cat => cat.name );
            combineCateAndChild.push(childrenNames);
          }
      }
      this.setState({
        allCategory: combineCateAndChild,
      });
    }
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
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  }

  render() {

    const commonWebsites = this.state.commonSites;
    const commonWebCard = [];

    if (commonWebsites.length > 0) {
      commonWebCard.push(
        commonWebsites.map((item) => {
          return <WebCommonCard key={item.url} web={item}> </WebCommonCard>
        })
      );
    }

    const menus = [];
    const allCategory = this.state.allCategory;
    if (allCategory.length > 0) {
      menus.push(
        allCategory.map((item) => {
          const spinItem = item.spin ? true : false;
          return <Menu.Item key={item.name}>
            <Icon type={item.icon} theme="outlined"
                   spin={spinItem}
                  // style={{ fontSize: '18px'}}
                />
            <span
              // style={{ fontSize: '16px'}}
                  className="nav-text">{item.name}</span>
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
              renderItem={web => (
                <List.Item key={web.url}>
                  <WebCard web={web}> </WebCard>
                </List.Item>
              )}
            />
          </Card>
        </div>
        if (item.name !== '常用') {
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
              Luci Design ©2019 Created by 翁恒丛
            </Footer>
          </Layout>
        </Layout>

      </div>
    );
  }
}

export default Home;
