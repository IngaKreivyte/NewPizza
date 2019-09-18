import * as  types from './types';

export const showDeliveryStatus = (object)=>{
    return{
        type:types.DELIVERY_STATUS,
        object
    }
}
