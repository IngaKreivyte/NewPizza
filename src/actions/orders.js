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