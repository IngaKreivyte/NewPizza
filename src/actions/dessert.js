import axios from 'axios';
import * as  types from './types';


const url = 'https://server-pizza-api.herokuapp.com/api/dessert';

export const fetchDessert = ()=>{
    return async function(dispatch){
        try{
            const res = await axios.get(url);
            dispatch({
                type:types.FETCH_DESSERT,
                data:res.data
            })
        } catch(e){
            console.log(e.response);
            
        }
    }
}
