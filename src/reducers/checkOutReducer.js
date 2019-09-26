import * as types from '../actions/types';




export default (state={}, action)=>{
    switch (action.type) {
        case types.LOG_IN:
            return  {...state, user:{name:action.user.name,phone:action.user.phone}} 
        case types.DELIVERY_STATUS:
            return {...state, address: {adresspickUp:action.object} }
            case types.DELIVERY_ADRESS:
                const{gatve, namas, butas, duru_kodas, komentaras}=action
            return {...state, address:{gatve:gatve,namas:namas, butas, duru_kodas,komentaras }}
            case types.USER_BAG:
                return {...state, bag: action.item}
                case types.CHANGE_NAME:
                    return{...state, user:{name:action.name, phone:action.number} }
                case types.ADD_ORDER: 
            return {...state, bag:''}
            case types.LOG_OUT:
            return [];
            case types.CLEAN_ORDER_DATA:
                return [];
        default:
            return state;
    }
}



