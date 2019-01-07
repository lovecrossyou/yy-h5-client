/*
 * @Author: Jan-superman
 * @Date: 2018-09-27 20:38:37
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-11-07 23:33:55
 */

import React, { PureComponent } from "react";
import { List, InputItem, Carousel, Button, WhiteSpace, Icon } from "antd-mobile";

import styles from "./index.less";
import { Navigator } from "../../components/Nav";


class Index extends PureComponent {

  render() {
    return (
      <div>
        <Navigator title='购物车'/>
      </div>
    );
  }
}

export default Index;
