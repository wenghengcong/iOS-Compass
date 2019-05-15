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
      this.setState({
        allCategory: allCategory,
      });
    }
  }

  handleClickMenu = ({item, key, keyPath}) => {
    console.log('click', item);
    this.scrollToAnchor(key);
  }

  handleClickSubMenu = (openkeys) => {
    console.log('click', openkeys);
    if (openkeys != undefined && openkeys != null) {
      const lastClick = openkeys[openkeys.length - 1];
      this.scrollToAnchor(lastClick);
    }
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

  generateCategoryBoard = (category) => {
    const cateWebsites = this.state.categorySites;
    const currentCateWebs = cateWebsites.filter(web => web.category === category.name);
    const currentCateCard = <div id={category.name}>
      <Card
        title={category.name}
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
    </div>;

    return currentCateCard;
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
          const menuChildren = item.children ? item.children : [];
          if (menuChildren.length > 0) {
            const childMenuItems = []
            // 如果有子菜单
            childMenuItems.push(
              menuChildren.map((child) => {
                return <Menu.Item key={child.name}>
                  <Icon type={child.icon} theme="outlined"
                        spin={spinItem}
                  />
                  <span className="nav-text">{child.name}</span>
                </Menu.Item>
              })
            );

            const subMenu = <SubMenu key={item.name}
                                     title={
                                       <span>
                                        <Icon type={item.icon} theme="outlined"
                                              spin={spinItem}/>
                                        <span>{item.name}</span>
                                        </span>}>
              {childMenuItems}
            </SubMenu>
            return subMenu;
          } else {
            return <Menu.Item key={item.name}>
              <Icon type={item.icon} theme="outlined"
                    spin={spinItem}
                // style={{ fontSize: '18px'}}
              />
              <span className="nav-text">{item.name}</span>
            </Menu.Item>
          }
        })
      );
    }

    const categoryCards = [];
    const cateWebsites = this.state.categorySites;
    if (cateWebsites.length > 0) {
      allCategory.map((firstLevelItem) => {

        const currentCateCard = this.generateCategoryBoard(firstLevelItem);
        if (firstLevelItem.name !== '常用') {
          categoryCards.push(currentCateCard);
        };
        // 有子分类，将构建子分类的board
        if (firstLevelItem.children != undefined && firstLevelItem.children != null
          && firstLevelItem.children.length > 0) {

          firstLevelItem.children.map((child) => {
            const currentCateCard = this.generateCategoryBoard(child);
            if (child.name !== '常用') {
              categoryCards.push(currentCateCard);
            }
          });
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
                  // subMenuCloseDelay={0.2}
                  // subMenuOpenDelay={0}
              // defaultSelectedKeys={['4']}
                  onOpenChange={this.handleClickSubMenu}
                  onClick={this.handleClickMenu}
                  // onSelect={this.handleClickSubMenu}
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
