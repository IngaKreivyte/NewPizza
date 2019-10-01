import * as  types from './types';





export const addToBag = (item, amount, price)=>{
    
    return{
        type:types.ADD_TO_BAG,
        item,
        amount ,
        price,
    }
}

export const findUnique =(object, amount,price)=>{
    
    return{
        type:types.FIND_UNIQUE,
        amount,
        object,
        price
    }
}
// export const addNum = (object, amount) =>{    
//     return{
//         type:types.ADD_NUM,
//         object,
//         amount,
//     }
// }
// export const deleteItem = (object, amount) =>{
//     return{
//         type:types.DELETE_ITEM,
//         object, 
//         amount,
//     }
// }

export const userBag = item=>{
    
    return{
        type:types.USER_BAG,
       item,
    }
}


