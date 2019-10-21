import * as types from '../actions/types';

export default (state=[], action)=>{
    switch (action.type) {
        case types.FETCH_ORDER:
            return action.data;
            case types.CHANGE_STATUS:
                    return  state.map(order=>{
                        console.log(order._id);
                        console.log(action._id);
                        
                                if(order._id===action._id) {
                                    console.log(order.isActive);
                                    console.log(action.isActive);
                                    return {...order,isActive:!order.isActive}
                                } else return order
                            })
        default:
            return state;
    }
}