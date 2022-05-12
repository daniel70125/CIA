import axios from 'axios';

const initialState = {
    user: {},
}
const GET_USER = 'GET_USER';

export function getUser(user) {
    return {
        type:GET_USER,
        payload: user
    }
}
// export function getItems(){
//     const items = axios.get('/menuItems')
// return {
//     type:GET_ITEMS, 
//     payload: items 
//     }
// }

export default function Reducer(state = initialState, action){
const {type, payload} = action;
switch(type){
    case GET_USER:
        return {...state, user: payload}
    // case GET_ITEMS + '_PENDING':
    //     return {...state, loading:true}
    // case GET_ITEMS + '_FULFILLED':
    //     return {...state, loading:false, items: payload.data}
    // case GET_ITEMS + '_REJECTED':
    //     return initialState;

    default:
        return state
    }
}