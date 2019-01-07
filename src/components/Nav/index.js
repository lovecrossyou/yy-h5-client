import { Icon, NavBar } from "antd-mobile";
import router from "umi/router";
import React from "react";

export const Navigator = ({title=''})=>{
  return (
    <NavBar
      mode="dark"
      style={{height:'180px'}}
      onLeftClick={() => {
        //这里需要做指定式跳转，手机页面会涉及到用户刷新的问题
        router.go(-1);
      }}
    >
      {title}
    </NavBar>
  )
}
