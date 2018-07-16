import * as actionTypes from '../Action/actionType';
import { updateObject } from '../utility';

const initialState = {
    reservationArray:[]

};

const getData=(state,action)=>{
    return updateObject(state, {reservationArray m: action.data});

};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_DATA: return getData(state, action);

        default:
            return state;
    }
};

export default reducer;