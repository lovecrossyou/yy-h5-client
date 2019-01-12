/**
 * Created by zhulizhe on 2019-01-12.
 */

import { queryProductList } from "./service";

export default {
  namespace: "shop",
  state: {
    shopList:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query, search }) => {
        if(pathname === '/')
          console.log('xx');
        // dispatch({
        //   type: "fetch"
        // });
      });
    }
  },
  reducers: {
    saveShopList(state, action) {
      return { ...state,
        shopList:action.payload
      } ;
    }
  },
  effects: {
    *fetch({ payload }, { call, put, select }) {
      const res = yield call(queryProductList,{});
      if(res.code === 0){
        const list = res.list ;
        yield put({ type: "saveShopList", payload: list });
      }
    },
  }
};
