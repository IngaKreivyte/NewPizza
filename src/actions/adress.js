import * as types from './types';





export const showDeliveryStatus = (object)=>{
    return{
        type:types.DELIVERY_STATUS,
        object
    }
}
export const showAdress = (state)=>{
    return{
        type:types.DELIVERY_ADRESS,
        namas:state.namas,
        gatve:state.gatve,
        butas:state.butas,
        duru_kodas:state.duru_kodas,
        komentaras:state.komentaras,
    }
}
