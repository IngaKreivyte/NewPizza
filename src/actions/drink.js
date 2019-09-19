import axios from 'axios';
import * as  types from './types';


const url = 'https://server-pizza-api.herokuapp.com/api/drink';

export const fetchDrink = ()=>{
    return async function(dispatch){
        try{
            const res = await axios.get(url);
            dispatch({
                type:types.FETCH_DRINK,
                data:res.data
            })
        } catch(e){
            console.log(e.response);
            
        }
    }
}