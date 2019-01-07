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
import ScrollWrap from "@/components/ScrollWrap";


class Index extends PureComponent {

  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  getRef = e => {
    this.container = React.cloneElement(e);
  };

  state = {
    data: ["AiyWuByWklrrUDlFignR", "TekJlZRVCjLFexlOCuWn", "IJOtIlfsYdTyaDTRVrLI"],
    imgHeight: 352
  };

  render() {
    return (
      <div>
        <div style={{ height: `${this.clientHeight - 190}px`, position: 'relative' }}>
          <ScrollWrap wrapId="rootList" wrapClass={styles.wrap_body}>
            <SearchBar/>
            <div style={{marginTop:'28px'}}>
              <Banner
                imgHeight={this.state.imgHeight}
                data={this.state.data}/>
            </div>
            <Category/>
            <LimitBuy/>
            <NearByShops/>
          </ScrollWrap>
        </div>
      </div>
    );
  }
}

export default Index;
