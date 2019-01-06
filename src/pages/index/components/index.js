import React from "react";
import { List, InputItem, Carousel, Button, WhiteSpace, Icon } from "antd-mobile";


import styles from "./index.css";
import BizIcon from "../../../components/BizIcon";
import star_icon  from './star.png'

/**
 * Created by zhulizhe on 2019-01-06.
 */

// 搜索框
export const SearchBar = () => {
  return <div>
    <Button icon={<Icon type='search'/>}>搜索</Button><WhiteSpace/>
  </div>;
};


const CategoryItem = () => {
  return <div className={styles.cate_item}>
    <BizIcon type='wode'/>
    <div className={styles.cate_item_text}>便利超市</div>
  </div>;
};

// 分类
export const Category = () => {
  return <div className={styles.cate_wrapper}>
    <CategoryItem/>
    <CategoryItem/>
    <CategoryItem/>
    <CategoryItem/>
  </div>;
};

// 轮播图
export const Banner = ({ data, imgHeight, slideIndex }) => {
  return (
    <div>
      <Carousel
        className="space-carousel"
        frameOverflow="visible"
        cellSpacing={10}
        slideWidth={0.8}
        autoplay
        infinite
        dots={false}
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      >
        {data.map((val, index) => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{
              display: "inline-block",
              position: "relative",
              width: "100%",
              height: "100%",
              boxShadow: "2px 1px 1px rgba(0, 0, 0, 0.2)"
            }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
              onLoad={() => {
                // fire window resize event to change height
                // window.dispatchEvent(new Event("resize"));
                // this.setState({ imgHeight: "auto" });
              }}
            />
          </a>
        ))}
      </Carousel>
    </div>
  );
};


export const LimitProduct = () => {
  return <div className={styles.limit_product}>
    <img
      className={styles.limit_product_icon}
      src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=971c5defc13d70cf58f7a25f99b5ba65/562c11dfa9ec8a138b055836ff03918fa1ecc0cd.jpg"
      alt=""/>
    <div className={styles.cate_item_text}>便利超市</div>
  </div>;
};
// 限时抢购
export const LimitBuy = ({ title = "限时抢购" }) => {
  return <div>
    <div>{title}</div>
    <div className={styles.limit_product_wrapper}>
      <LimitProduct/>
      <LimitProduct/>
      <LimitProduct/>
    </div>
  </div>;
};

export const ShopStar = ()=>{
  return <div className={styles.row}>
    <img className={styles.shop_star} src={star_icon} alt=""/>
    <img className={styles.shop_star} src={star_icon} alt=""/>
    <img className={styles.shop_star} src={star_icon} alt=""/>
    <img className={styles.shop_star} src={star_icon} alt=""/>
  </div>
}

export const ShopItem = ()=>{
  return <div className={styles.shop_item}>
    <div className={styles.shop_item_left}>
      <img
        className={styles.shop_item_icon}
        src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=971c5defc13d70cf58f7a25f99b5ba65/562c11dfa9ec8a138b055836ff03918fa1ecc0cd.jpg"
        alt=""/>
      <div className={styles.shop_item_left_info}>
        <div>京客隆-成府路店</div>
        <div className={styles.limit_product_wrapper}>
          <ShopStar/>
          <div>月售600+</div>
        </div>
        <div>起送￥20</div>
        <div>满600减20</div>
      </div>
    </div>
    <div>
      <Icon type='right'/>
    </div>
  </div>
}

// 附近店铺列表
export const NearByShops = ({title='附近的店铺'}) => {
  return <div>
    <div>{title}</div>
    <ShopItem/>
    <ShopItem/>
    <ShopItem/>
    <ShopItem/>
    <ShopItem/>
    <ShopItem/>
  </div>;
};