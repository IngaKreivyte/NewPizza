import * as types from '../actions/types';




export default (state=[], action)=>{
    switch (action.type) {
        
        case types.FETCH_DESSERT:
            return action.data;
        default:
            return state;
    }
}