/*
 * @Author: Jan-superman
 * @Date: 2018-09-27 20:38:37
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-11-07 23:33:55
 */

import React, { PureComponent } from "react";
import { List, InputItem, Carousel, Button, WhiteSpace, Icon } from "antd-mobile";
import ScrollWrap from "@/components/ScrollWrap";

import styles from "./index.less";
import { Navigator } from "../../components/Nav";


const Product = ()=>{
  return <div className={styles.shoppingcart_product_info}>
    <img className={styles.shoppingcart_product_icon} src="" alt=""/>
    <div className={styles.p_name}>农夫山泉</div>
    <div className={styles.p_price}>¥ 18.00</div>
  </div>
}

const ShoppingCart = () => {
  return <div className={styles.shoppingcart_wrapper}>
    <div className={styles.shoppingcart_shopInfo_wrapper}>
      <div className={styles.shoppingcart_shopInfo}>
        <img src="" alt="" className={styles.shoppingcart_shop_icon}/>
        <div className={styles.shoppingcart_shop_name}>家乐福</div>
      </div>
      <div>
        <Icon type='right'/>
      </div>
    </div>

    <div className={styles.products}>
      <Product/>
      <Product/>
    </div>
  </div>;
};

class Index extends PureComponent {

  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  render() {
    return (
      <div style={{ height: `${this.clientHeight -180- 150}px`, position: "relative" }}>
        <Navigator title='购物车'/>
        <ScrollWrap wrapId="rootList" wrapClass={styles.wrap_body}>
          <ShoppingCart/>
          <ShoppingCart/>
          <ShoppingCart/>
          <ShoppingCart/>
          <ShoppingCart/>
          <ShoppingCart/>
        </ScrollWrap>
      </div>
    );
  }
}

export default Index;
