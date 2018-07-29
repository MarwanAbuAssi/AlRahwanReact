import React from 'react';
import * as actionTypes from '../../action/actionTypes'
const initialState={
    reservationArray:[],
    loader:true
}

const reducer = ( state = initialState, action ) => {
    console.log(action.type )
    switch ( action.type ) {
        case actionTypes.GET_DATA:
            console.log(action.data)
            console.log(state)
            return {...state,loader:false}

        default: return state;
    }
};
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
export default reducer;