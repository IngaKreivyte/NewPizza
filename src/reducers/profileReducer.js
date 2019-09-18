import* as types from '../actions/types';

const initialState={
    name:'',
    phone:'',
    email:'',
};
export default (state=initialState, action)=>{
    switch(action.type){
        case types.LOG_IN:
            return {
                name:action.user.name,
                phone:action.user.phone,
                email:action.user.email,
            }
            case types.LOG_OUT:
            return [];
        default : return state;
    }
};