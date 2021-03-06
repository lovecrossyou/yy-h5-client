import React from "react";
import { List, InputItem, Carousel, Button, WhiteSpace, Icon } from "antd-mobile";


import styles from "./index.css";
import star_icon  from './images/star.png'


import shop_icon from './images/shop_icon.png'
import bucket_icon from './images/bucket.png'
import health_icon from './images/health.png'
import shuiguo_icon from './images/shuiguo.png'


import addr_icon from './images/地址@2x.png'
/**
 * Created by zhulizhe on 2019-01-06.
 */

// 搜索框
export const SearchBar = () => {
  return <div>
    <div className={styles.addr_wrapper}>
      <img src={addr_icon} alt="" className={styles.addr_icon}/>
      <div className={styles.search_addr}>百万庄大街11号</div>
    </div>
    <div className={styles.search}>
      <div className={styles.search_wrapper}>
        <Icon type='search' color='#fff'/>
        <div className={styles.search_text}>搜索</div>
      </div>
    </div>
  </div>;
};


const CategoryItem = ({data}) => {

  return <div className={styles.cate_item}>
    <img className={styles.cate_icon} src={data.icon} alt=""/>
    <div className={styles.cate_item_text}>{data.title}</div>
  </div>;
};

// 分类

const categories = [{
  title:'便利超市',
  icon:shop_icon
},{
  title:'桶装水',
  icon:bucket_icon
},{
  title:'生鲜果蔬',
  icon:shuiguo_icon
},{
  title:'医药健康',
  icon:health_icon
}]

export const Category = () => {
  return <div className={styles.cate_wrapper}>
    {
      categories.map((d,index)=>(<CategoryItem data={d} key={index+'#'}/>))
    }

  </div>;
};

// 轮播图
export const Banner = ({ data, imgHeight, slideIndex }) => {
  return null;
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


export const LimitProduct = ({data}) => {
  return <div className={styles.limit_product}>
    <img
      className={styles.limit_product_icon}
      src={data}
      alt=""/>
    <div className={styles.limit_item_text}>便利超市</div>
  </div>;
};
// 限时抢购

const images = [
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4081706862,329782480&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2011939372,2030372149&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=453672126,4138129143&fm=26&gp=0.jpg'
]


export const LimitBuy = ({ title = "限时抢购" }) => {
  return <div className={styles.limit_wrapper}>
    <div className={styles.main_title}>{title}</div>
    <div className={styles.limit_product_wrapper}>
      {
        images.map((url,index)=><LimitProduct key={index+'#'} data={url}/>)
      }
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

export const ShopItem = ({data,click})=>{
  return <div className={styles.shop_item} onClick={click}>
    <div className={styles.shop_item_left}>
      <img
        className={styles.shop_item_icon}
        src={data.secondCategoryImageUrl}
        alt=""/>
      <div className={styles.shop_item_left_info}>
        <div className={styles.shop_item_pname}>{data.secondCategoryName}</div>
        <div className={styles.limit_product_wrapper}>
          <ShopStar/>
          <div className={styles.shop_yueshou}>月售600+</div>
        </div>
        <div className={styles.shop_yueshou}>起送￥20</div>
        <div className={styles.shop_yueshou_red}>满600减20</div>
      </div>
    </div>
    <div>
      <Icon type='right'/>
    </div>
  </div>
}

// 附近店铺列表
export const NearByShops = ({shops,title='附近的店铺',onClick}) => {
  return <div className={styles.near_wrapper}>
    <div className={styles.main_title}>{title}</div>
    {
      shops.map((shop,index)=>{
        return <ShopItem data={shop} click={onClick} key={index+'#'}/>
      })
    }
  </div>;
};
