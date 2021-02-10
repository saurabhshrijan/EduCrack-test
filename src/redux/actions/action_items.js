import Axios from "axios";
export const getAllAvaliableItems = ()=>{
  return dispatch=>{
    Axios.get("/data/rentingList.json").then(res=>{
      console.log(res);
    dispatch({
      type:'GET_ALL_ITEMS',
      payload:res.data
    })
    }).catch(err=>{
      console.log(err);
    })
  }
  
}