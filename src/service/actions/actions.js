import {ADD_TO_CART} from '../constants'
import {REMOVE_TO_CART} from '../constants'

export const addTOCart =(data)=>{
    // console.warn("action",data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const removeTOCart =(data)=>{
    // console.warn("action",data)
    return{
        type:REMOVE_TO_CART,
        // data:data
    }
}

// export const RToCart =(data)=>{
//     return{
//         type:'REMOVE_TO_CART',
//         data:data
//     }
// }

