import * as types from '../actions/types';




export default (state=[], action)=>{
    switch (action.type) {
        case types.ADD_TO_BAG:
                let dublicate = false;
               const items = state.map(item => {
                    if(item.name===action.item.name && item.size===action.item.size){
                        dublicate=true;
                        let totalAmount = item.amount + 1;
                        let totalPrice = totalAmount * item.price;
                        return {...item, amount:totalAmount, totalPrice}
                    } else {
                        return {...item, totalPrice:item.totalPrice};
                    }
               })
               if(dublicate) {
                return (
                 items
                )
                
           } else return  [...state, {...action.item, totalPrice:action.item.price }]
        //   case types.ADD_NUM:
        //     return state.map(object=>{
        //         if(object.id===action.object.id) {
        //          var totalAmount = object.amount + action.amount;
        //             return {...object, amount: totalAmount};
        //         } else {
        //             return object;
        //         };
        //     });
        case types.FIND_UNIQUE:
            return state.filter(object=>{
                    if(object.name===action.object.name &&  object.size===action.object.size  && object.amount+action.amount <= 0) 
                        return false;
                        return true;
                    }).map(object=> {
                    if(object.name===action.object.name && object.size===action.object.size && object.price ===action.object.price){
                   var totalAmount = object.amount+action.amount;
                   var totalPrice = object.price * totalAmount;
                     return {...object, amount:totalAmount, totalPrice}}
                     else return object
                          
                    })

        default:
            return state;
    }
}



