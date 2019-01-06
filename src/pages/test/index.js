/*
 * @Author: Jan-superman 
 * @Date: 2018-09-27 20:38:37 
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-11-07 23:33:55
 */

import React, { PureComponent } from "react";
import { List, InputItem, Toast, Button } from "antd-mobile";

import styles from "./index.less";

class Test extends PureComponent {

  state = {
    hasError: false,
    value: ""
  };
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info("Please enter 11 digits");
    }
  };
  onChange = (value) => {
    if (value.replace(/\s/g, "").length < 11) {
      this.setState({
        hasError: true
      });
    } else {
      this.setState({
        hasError: false
      });
    }
    this.setState({
      value
    });
  };

  render() {
    return (
      <div className={styles.index}>
        <div className={styles.content}>
          <List>
            <InputItem
              type="phone"
              placeholder="输入手机号"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChange}
              value={this.state.value}
            >手机号码</InputItem>
            <Button type="primary">发送订单测试</Button>
          </List>
        </div>
      </div>
    );
  }
}

export default Test;
