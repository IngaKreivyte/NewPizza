
import * as  types from './types';
import axios from 'axios';
const url = 'https://server-pizza-api.herokuapp.com/api/orders';



export const addOrder =(checkOut)=>{
    return async function(dispatch){
        try{
            await axios.post(url,checkOut)
            dispatch({
                type:types.ADD_ORDER,
                checkOut:checkOut,
            })
        } catch(e){
            console.log(e.response);
        }
    }
};