/*
 * @Author: Jan-superman
 * @Date: 2018-09-27 20:39:02
 * @Last Modified by: superman
 * @Last Modified time: 2018-12-25 01:03:00
 */

import React, { PureComponent } from "react";
import { connect } from "dva";
import ScrollWrap from "@/components/ScrollWrap";
import styles from "./index.less";
import { Navigator } from "../../components/Nav";


const ProductItem = ()=>{
  return <div className={styles.product_item}>
    xxx
  </div>
}


const ShopHeader = ()=>{
  return <div className={styles.shop_header}>

  </div>
}

const  ShopFooter = ()=>{
  return <div className={styles.shop_footer}>

  </div>
}


@connect(({ category, loading }) => ({
  category,
  firsstListLoading: loading.effects["category/GetCategorysList"]
}))
class Category extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "category/GetCategorysList"
    });
  }

  getRef = e => {
    this.container = React.cloneElement(e);
  };

  handleSetActiveTab = id => {
    const { dispatch } = this.props;
    dispatch({
      type: "category/GetSubcategories",
      payload: {
        categoryId: id
      }
    });
  };

  render() {
    const { category } = this.props;
    const { firstList, activeTab, SubcategoriesList } = category;
    return (
      <div className={styles.category}>
        <Navigator title='水站' props={this.props}/>
        <ShopHeader/>
        <div style={{ height: `${this.clientHeight - 160- 200 - 150 - 128}px`, position: "relative" }}>
          <ScrollWrap wrapId="rootList" wrapClass={styles.category_tab}>
            {firstList.map(item => (
              <div
                onClick={() => {
                  this.handleSetActiveTab(item.categoryId);
                }}
                key={item.categoryId}
                className={`${styles.list_item} ${item.categoryId === activeTab ? styles.cur : ""}`}
              >
                {item.categoryName}
              </div>
            ))}
          </ScrollWrap>
          <ScrollWrap wrapId="rootContent" wrapClass={styles.category_content} getRef={this.getRef}>
            {SubcategoriesList.map(item => <ProductItem key={item.categoryId}/>)}
          </ScrollWrap>
        </div>
        <ShopFooter/>
      </div>
    );
  }
}

export default Category;
