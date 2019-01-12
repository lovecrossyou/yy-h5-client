/*
 * @Author: Jan-superman
 * @Date: 2018-09-27 20:38:37
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-11-07 23:33:55
 */

import React, {Component } from "react";
import { connect } from "dva";

import styles from "./index.less";
import { Banner, SearchBar, Category, LimitBuy } from "./components/index";
import { NearByShops } from "./components";
import ScrollWrap from "@/components/ScrollWrap";
import { Navigator } from "../../components/Nav";
import router from 'umi/router';
import CarouselItem from "../../components/carousel";


const shops = [
  {
    secondCategoryId: 2,
    secondCategoryName: "京客隆-成府路店",
    secondCategoryImageUrl:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2038682854,682426476&fm=15&gp=0.jpg"
  },
  {
    secondCategoryId: 2,
    secondCategoryName: "便利蜂-海淀黄庄店",
    secondCategoryImageUrl:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1712615769,1544700621&fm=15&gp=0.jpg"
  },
  {
    secondCategoryId: 2,
    secondCategoryName: "全食-苏州街店",
    secondCategoryImageUrl:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1417496360,1256003310&fm=15&gp=0.jpg"
  },
  {
    secondCategoryId: 2,
    secondCategoryName: "京客隆-成府路店",
    secondCategoryImageUrl:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2038682854,682426476&fm=15&gp=0.jpg"
  },
  {
    secondCategoryId: 2,
    secondCategoryName: "便利蜂-海淀黄庄店",
    secondCategoryImageUrl:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1712615769,1544700621&fm=15&gp=0.jpg"
  },
  {
    secondCategoryId: 2,
    secondCategoryName: "全食-苏州街店",
    secondCategoryImageUrl:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1417496360,1256003310&fm=15&gp=0.jpg"
  },
]

class Index extends Component {

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
    // const {shopList}= this.props.shop ;

    console.log('this.clientHeight ',this.clientHeight)
    return (
      <div className={styles.home_content}>
        <Navigator title='快马优品' props={this.props}/>
        <div style={{ height: `${this.clientHeight - 180-150}px`, position: "relative" }}>
          <ScrollWrap wrapId="homeList" wrapClass={styles.wrap_body}>
            <SearchBar/>
            <div style={{marginTop:'28px'}}>
              <CarouselItem claName={styles.banner_wrapper}/>
            </div>
            <Category/>
            <LimitBuy/>
            <NearByShops
              shops={shops}
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

export default connect(state=>{
  return {
    shop:state.shop
  }
})(Index);
