import { Icon, NavBar } from "antd-mobile";
import router from "umi/router";
import React from "react";
import { BarRoutes } from "../../layouts/BasicLayout";

export const Navigator = ({title='',props})=>{

  return (
    <NavBar
      mode="dark"
      style={{height:'160px'}}
      icon={
        (BarRoutes.indexOf(props.route.path)>0) ?null: (
          <Icon type="left" size={'lg'}/>
        )
      }
      onLeftClick={() => {
        //这里需要做指定式跳转，手机页面会涉及到用户刷新的问题
         router.go(-1);
      }}
    >
      {title}
    </NavBar>
  )
}
