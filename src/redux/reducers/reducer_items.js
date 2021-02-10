const initialState={
  ItemsAvaliable:[]
}
export default function(state=initialState,action){
  switch(action.type){
    case 'GET_ALL_ITEMS':
      return{
        ...state,
        ItemsAvaliable:action.payload
      }
      default:
        return{...state}
  }
} 