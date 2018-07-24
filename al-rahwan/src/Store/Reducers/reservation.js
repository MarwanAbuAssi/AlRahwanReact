import * as actionTypes from '../Action/actionType';
import { updateObject } from '../utility';

const initialState = {
    reservationArray:[{name:"marwan"}]

};

const getData=(state,action)=>{
    return updateObject(state, {reservationArray : action.data});

};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_DATA: return getData(state, action);
        case actionTypes.RESERVE:  {
            return updateObject(state, {reservationArray : action.data});

    };

        default:
            return state;
    }
};

export default reducer;