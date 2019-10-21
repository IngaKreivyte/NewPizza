import * as  types from './types';
import axios from 'axios';


const url = 'https://server-pizza-api.herokuapp.com/api/orders';




export const fetchOrders = ()=>{
    return async function(dispatch){
        try{
            const res = await axios.get(url);
            dispatch({
                type:types.FETCH_ORDER,
                data:res.data
            })
        } catch(e){
            console.log(e.response);
            
        }
    }
}

export const changeStatus= order =>{
    const { isActive,_id }= order;
    return async function(dispatch){
        
        try{
            await axios.put(url+'/' + _id, {_id:_id,isActive:!isActive,order:order})
            // console.log(_id);
            dispatch({
                    type:types.CHANGE_STATUS,
                    _id:_id,
                    isActive:!isActive,
                    order,
            })
        } catch(e){
            console.log(e.response)
        }
    }
}