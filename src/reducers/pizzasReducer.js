import * as types from '../actions/types';

// const items=[
//         {
//             name:'Margarita',
//             id:0,
//             kainos:[
//                 {size:'small', price:5},
//                 {size:'medium', price:7},
//                 {size:'large', price:9},
//             ],
//             description:'Pomidorai, mocarelos sūris, picų padažas, oregano prieskoniai'
//         },
//         {
//             name:'Peperoni',
//             id:1,
//             kainos:[
//                 {size:'small', price:6},
//                 {size:'medium', price:8},
//                 {size:'large', price:10}
//             ],
//             description:'Mocarelos sūris, saliamis, picų padažas'
//         },
//         {
//             name:'Barbeque',
//             id:2,
//             kainos:[
//                 {size:'small', price:5},
//                 {size:'medium', price:7},
//                 {size:'large', price:9}
//             ],
//             description:'Pomidorai, mocarelos sūris, picų padažas, oregano prieskoniai'
//         },
//         {
//             name:'Vegetarian',
//             id:3,
//             kainos:[
//                 {size:'small', price:4},
//                 {size:'medium', price:6},
//                 {size:'large', price:8}
//             ],
//             description:'Pomidorai, mocarelos sūris, picų padažas, oregano prieskoniai'
//         },
//         {
//             name:'Spicy',
//             id:4,
//             kainos:[
//                 {size:'small', price:5,},
//                 {size:'medium', price:7,},
//                 {size:'large', price:9,},
//             ],
//             description:'Pomidorai, mocarelos sūris, picų padažas, oregano prieskoniai'
//         },
//         {
//             name:'Seafood',
//             id:5,
//             kainos:[
//                 {size:'small', price:5},
//                 {size:'medium', price:7},
//                 {size:'large', price:9},
//             ],
//             description:'Pomidorai, mocarelos sūris, picų padažas, oregano prieskoniai'
//         },
//     ];

    export default (state=[], action)=>{
        switch (action.type) {
            // case types.CLEAR_SINGLE:
            //     return state.filter((pizza,i)=>i!==action.index);
            case types.FETCH_PIZZAS:
                return action.data;
            default:
                return state;
        }
    }