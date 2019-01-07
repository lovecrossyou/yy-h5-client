/*
 * @Author: Jan-superman
 * @Date: 2018-09-27 20:38:37
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-11-07 23:33:55
 */

import React, { PureComponent } from "react";
import { List, InputItem, Carousel, Button, WhiteSpace, Icon } from "antd-mobile";


import order_icon from './images/订单@2x.png'
import addr_icon from './images/地址-5@2x.png'
import youhui_icon from './images/优惠券@2x.png'
import water_ticket_icon from './images/卡包@2x.png'
import coins_icon from './images/积分@2x.png'
import yijian_icon from './images/yijianqujian@2x.png'
import faq_icon from './images/意见反馈@2x.png'
import more_icon from './images/more@2x.png'




const actions = [{
  icon:order_icon,
  title:'订单'
},
  {
    icon:addr_icon,
    title:'收货地址'
  },
  {
    icon:youhui_icon,
    title:'我的水票'
  },
  {
    icon:water_ticket_icon,
    title:'我的优惠券'
  },
  {
    icon:coins_icon,
    title:'我的积分'
  },
  {
    icon:yijian_icon,
    title:'一键送水'
  },
  {
    icon:faq_icon,
    title:'意见反馈'
  },
  {
    icon:more_icon,
    title:'更多'
  }]

import styles from "./index.css";


const ActionItem = ({data})=>{
  return <div className={styles.me_item}>
    <img src={data.icon} className={styles.me_action_icon}  alt=""/>
    <div>{data.title}</div>
  </div>
}

const Header = ()=>{
  return <div className={styles.header_wrapper}>
    <img className={styles.me_icon}  alt=""/>
    <div className={styles.me_name}>任蕊芳</div>
    <div className={styles.me_coins}>积分：2500</div>
  </div>
}

const ActionItems = ()=>{
    return <div className={styles.action_item_wrapper}>
      {
        actions.map((data,index)=><ActionItem data={data} key={index+'#'}/>)
      }
    </div>
}

class Index extends PureComponent {

  render() {
    return (
      <div className={styles.container}>
        <Header/>
        <ActionItems/>
      </div>
    );
  }
}

export default Index;
