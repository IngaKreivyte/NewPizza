import * as  types from './types';
import axios from 'axios';


const url = 'https://server-pizza-api.herokuapp.com/api/pizza';

// export const clearSingle =index=>{
//     return{
//         type: types.CLEAR_SINGLE,
//         index
//     };
// };


export const fetchPizzas = ()=>{
    return async function(dispatch){
        try{
            const res = await axios.get(url);
            dispatch({
                type:types.FETCH_PIZZAS,
                data:res.data
            })
        } catch(e){
            console.log(e.response);
            
        }
    }
}