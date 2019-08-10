import React, {PureComponent} from 'react';

import {
  Card,
  Icon,
  Menu,
  List,
  Layout,
  BackTop,
} from 'antd';


import WebCard from '../UIComponent/WebCard';
import WebCommonCard from '../UIComponent/WebCommonCard';

import styles from './Home.less';
import WebTextCard from "../UIComponent/WebTextCard";

const webURL = 'https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/websites.json';
const catURL = 'https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/category.json';

const SubMenu = Menu.SubMenu;
const {
  Footer, Sider, Content,
} = Layout;


class Home extends PureComponent {

  state = {
    allWebsite: [],     // 所有网站
    allCategory: [],    // 分类
    commonSites: [],     // 常用网站
    categorySites: [],   // 分类网站
    isLoading: false,
    collapsed: false,
  };

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
  };

  handleCategory = (allCategory) => {
    if (allCategory !== undefined && allCategory !== null) {
      this.setState({
        allCategory: allCategory,
      });
    }
  };

  handleClickScreenWidthChange = (broken) => {
    console.log(broken);
    this.setState({
      collapsed: (broken ? broken : false)
    });
  };

  handleClickMenu = ({item, key, keyPath}) => {
    console.log('click', item);
    this.scrollToAnchor(key);
  };

  handleClickSubMenu = (openkeys) => {
    console.log('click', openkeys);
    if (openkeys !== undefined && openkeys !== null) {
      const lastClick = openkeys[openkeys.length - 1];
      this.scrollToAnchor(lastClick);
    }
  };

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };

  generateCategoryWebCard = (web) => {

    if (web.style === undefined || web.style === null || web.style === 0) {
      return <WebCard web={web}> </WebCard>
    } else if (web.style === 1) {
      return <WebTextCard web={web}> </WebTextCard>
    }
  };

  generateCategoryBoard = (fatherCate, category, weibistes) => {

    var categoryName = category.name;
    if (fatherCate !== undefined && fatherCate !== null
     && fatherCate.length > 0) {
      categoryName = fatherCate + "＞" + category.name;
    }

    const currentCateCard = <div id={category.name}>
      <Card
        title={categoryName}
        className={styles.categoryCard}
      >
        <List
          grid={{
            // xl：1200，可是1326才有5个
            gutter: { xs: 8, sm: 35, md: 35, lg: 24, xl: 5, xxl: 5},
            xs: 2, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6,
          }}
          dataSource={weibistes}
          size='small'
          renderItem={web => (
            <List.Item key={web.url}>
              {/*<WebCard web={web}> </WebCard>*/}
              {this.generateCategoryWebCard(web)}
            </List.Item>
          )}
        />
      </Card>
    </div>;

    return currentCateCard;
  };

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
          const spinItem = item.spin;
          const menuChildren = item.children ? item.children : [];
          if (menuChildren.length > 0) {
            const childMenuItems = [];
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
            </SubMenu>;
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

        const cateWebsites = this.state.categorySites;
        const currentCateWebs = cateWebsites.filter(web => web.category === firstLevelItem.name);

        const currentCateCard = this.generateCategoryBoard( "", firstLevelItem, currentCateWebs);
        if (firstLevelItem.name !== '常用' && currentCateWebs !== undefined
          && currentCateWebs !== null && currentCateWebs.length > 0) {
          categoryCards.push(currentCateCard);
        };

        // 有子分类，将构建子分类的board
        if (firstLevelItem.children !== undefined && firstLevelItem.children !== null
          && firstLevelItem.children.length > 0) {

          firstLevelItem.children.map((child) => {
            const cateWebsites = this.state.categorySites;
            const childWebsites = cateWebsites.filter(web => web.category === child.name);

            const currentCateCard = this.generateCategoryBoard( firstLevelItem.name, child, childWebsites);
            if (child.name !== '常用' && childWebsites !== undefined
            && childWebsites != null && childWebsites.length > 0) {
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
                 breakpoint={'sm'}
                 theme='dark'
                 onBreakpoint={this.handleClickScreenWidthChange}
          >
            <Menu
                  theme="dark"
                  mode="inline"
                  inlineCollapsed={this.state.collapsed}
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

        <BackTop>
        </BackTop>
      </div>
    );
  }
}

export default Home;
