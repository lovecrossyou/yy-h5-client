/**
 * Created by zhulizhe on 2019-01-12.
 */
import request from "../../services/request";


export const queryProductList = params =>{
  return request('/h5/shop/shoplist',{
    method:'POST',
    body:params
  })
}