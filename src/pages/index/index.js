/*
 * @Author: Jan-superman 
 * @Date: 2018-09-27 20:38:37 
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-11-07 23:33:55
 */

import React, { PureComponent } from "react";
import { List, InputItem, Carousel, Button, WhiteSpace, Icon } from "antd-mobile";

import styles from "./index.less";
import { Banner, SearchBar, Category, LimitBuy } from "./components/index";
import { NearByShops } from "./components";


class Index extends PureComponent {

  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: 352
  };

  render() {
    return (
      <div>
        <SearchBar/>
        <Banner
          imgHeight={this.state.imgHeight}
          data={this.state.data}/>
        <Category/>
        <LimitBuy/>
        <NearByShops/>
      </div>
    );
  }
}

export default Index;
