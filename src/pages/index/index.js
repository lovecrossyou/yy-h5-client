/*
 * @Author: Jan-superman
 * @Date: 2018-09-27 20:38:37
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-11-07 23:33:55
 */

import React, { PureComponent } from "react";
import { List, InputItem, Button, WhiteSpace, Icon } from "antd-mobile";

import styles from "./index.less";
import { Banner, SearchBar, Category, LimitBuy } from "./components/index";
import { NearByShops } from "./components";
import ScrollWrap from "@/components/ScrollWrap";
import { Navigator } from "../../components/Nav";
import router from 'umi/router';
import CarouselItem from "../../components/carousel";


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
        <div style={{ height: `${this.clientHeight - 160 - 50}px`, position: 'relative' }}>
          <Navigator title='快马优品' props={this.props}/>
          <ScrollWrap wrapId="rootList" wrapClass={styles.wrap_body}>
            <SearchBar/>
            <div style={{marginTop:'28px'}}>
              <CarouselItem claName={styles.banner_wrapper}/>
            </div>
            <Category/>
            <LimitBuy/>
            <NearByShops
              onClick={()=>{
                router.push('/watershop')
              }}
            />
          </ScrollWrap>
        </div>
      </div>
    );
  }
}

export default Index;
